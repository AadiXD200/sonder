import {test, expect} from '@playwright/test';
import {initialState, findMeetings, createSearchIndex, encodeState, decodeState} from '../src/explore/model.js';
import {searchBuildings} from '../src/explore/place-search.js';

const buildings = {
  BA: {name:'Bahen Centre for Information Technology',lat:43.6623,lng:-79.3968},
  RL: {name:'John P. Robarts Library Building',lat:43.6623,lng:-79.3968},
  OI: {name:'Ontario Institute for Studies in Education',lat:43.6623,lng:-79.3968},
  MS: {name:'Medical Sciences Building',lat:43.6623,lng:-79.3968},
  IN: {name:'Innis College',lat:43.6623,lng:-79.3968},
  HA: {name:'Haultain Building',lat:43.6623,lng:-79.3968},
};
const topics = {
  psychology:{label:'Psychology',synonyms:['psych'],courses:['PSY100H1']},
  music:{label:'Music',synonyms:[],courses:['MUS100H1']},
  ai:{label:'AI',synonyms:[],courses:['CSC100H1']},
};
const index=createSearchIndex(topics);
const base={day:2,term:'F',start:660,end:900,seats:150,subject:'Science',room:'2158'};
const meetings=[
  {...base,id:'psych',code:'PSY100H1',title:'Introduction to Psychology',building:'MS'},
  {...base,id:'music',code:'MUS100H1',title:'Music',subject:'Arts & ideas',building:'RL'},
  {...base,id:'oise',code:'EDU100H1',title:'Education',building:'OI',room:'B250'},
  {...base,id:'innis',code:'CIN100H1',title:'Cinema',building:'IN'},
  {...base,id:'ai',code:'CSC100H1',title:'Computing',subject:'Technology',building:'BA'},
  {...base,id:'aircraft',code:'AIR100H1',title:'Aircraft design',building:'HA'},
];
const matching=(query, extra={})=>findMeetings(meetings,{...initialState(),query,...extra},buildings,index).map(m=>m.id).sort();

test('building aliases, codes, partial names and exact rooms coexist with course/topic search',()=>{
  for(const q of ['OISE','OI','Ontario Institute for Studies in Education']) expect(matching(q)).toEqual(['oise']);
  expect(matching('robarts')).toEqual(['music']);
  expect(matching('med sci')).toEqual(['psych']);
  expect(matching('IN')).toEqual(['innis']);
  for(const q of ['MS2158','MS 2158','Medical Sciences room 2158']) expect(matching(q)).toEqual(['psych']);
  expect(matching('OI B250')).toEqual(['oise']);
  expect(matching('2158')).not.toContain('oise');
  expect(matching('CSC 100')).toEqual(['ai']);
  expect(matching('AI')).toEqual(['ai']);
  expect(searchBuildings('AI',buildings)).toEqual([]);
  expect(matching('MS 2158',{timeMode:'custom',finishBy:true})).toEqual([]);
  expect(matching('OISE',{building:{codes:['BA']}})).toEqual([]);
  expect(searchBuildings('<img onerror=x>',buildings)).toEqual([]);
});

test('multiple interests form a union while preserving time, room and building constraints',()=>{
  const interests=['psychology','music'];
  expect(matching('',{interests})).toEqual(['music','psych']);
  expect(matching('',{interests,building:{codes:['MS']}})).toEqual(['psych']);
  expect(matching('',{interests,timeMode:'custom',finishBy:true})).toEqual([]);
  const state={...initialState(),interests};
  expect(decodeState(encodeState(state),buildings,meetings,topics)).toEqual(state);
  expect(decodeState('#v=1&interests=music,music,unknown,%3Cscript%3E',buildings,meetings,topics).interests).toEqual(['music']);
});

async function open(page,width=1440){
  await page.setViewportSize({width,height:900});
  await page.route('**/data/lectures.json',r=>r.fulfill({status:404,body:'Fixtures'}));
  await page.goto('/explore.html');
  await expect(page.locator('.class-ticket').first()).toBeVisible();
}
for(const width of [390,1440]) {
  test(`search suggestions select a building and can locate an empty building at ${width}px`,async({page})=>{
    await open(page,width);
    await page.locator('#toggle-search').click();
    await expect(page.locator('#search-suggestions')).toBeHidden();
    await expect(page.locator('#search')).toHaveAttribute('placeholder', width <= 760 ? 'Search campus…' : /building or room/);
    await page.locator('#search').fill('BA');
    await expect(page.locator('.class-ticket')).toHaveCount(1);
    await page.locator('[data-search-building="BA"]').click();
    expect(await page.evaluate(()=>window.sonderPreview.state.building.codes)).toEqual(['BA']);
    await expect(page.locator('#search-panel')).toBeHidden();
    await page.locator('#time-day').click();
    await expect(page.locator('.class-ticket')).toHaveCount(3);
    await page.locator('#toggle-search').click();
    await page.locator('#search').fill('OISE');
    await expect(page.locator('[data-search-building="OI"]')).toContainText('No matches');
    await page.locator('[data-search-map="OI"]').click();
    await page.waitForFunction(()=>window.sonderPreview.map?.status==='ready');
    expect(await page.evaluate(()=>window.sonderPreview.state.building.codes)).toEqual(['OI']);
    await expect(page.locator('body')).toHaveAttribute('data-view','map');
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  });
}
test('keyboard search suggestions support arrows, selection and dismissal',async({page})=>{
  await open(page);
  await page.keyboard.press('/');
  await page.locator('#search').fill('Robarts');
  await page.keyboard.press('ArrowDown');
  await expect(page.locator('[data-search-building="RL"]')).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(page.locator('#search')).toBeFocused();
  await expect(page.locator('#search-suggestions')).toBeHidden();
  await page.locator('#search').fill('BA');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  expect(await page.evaluate(()=>window.sonderPreview.state.building.codes)).toEqual(['BA']);
});

test('interest drafts cancel, apply as chips, survive refresh, and can be removed or reset',async({page})=>{
  await open(page,390);
  await page.locator('#open-filters').click();
  await page.locator('#filter-interests > summary').click();
  await page.locator('#topic-picker summary').click();
  await page.locator('#topic-search').fill('psych');
  await page.locator('[data-interest="psychology"]').check();
  await page.keyboard.press('Escape');
  expect(await page.evaluate(()=>window.sonderPreview.state.interests)).toEqual([]);
  await page.locator('#open-filters').click();
  await page.locator('#filter-interests > summary').click();
  await page.locator('#topic-picker summary').click();
  await page.locator('[data-interest="psychology"]').check();
  await page.locator('[data-interest="music"]').check();
  await page.locator('#apply-filters').click();
  await expect(page.locator('#interest-summary button')).toHaveCount(2);
  await expect(page.locator('.class-ticket')).toHaveCount(2);
  await page.reload();
  await expect(page.locator('#interest-summary button')).toHaveCount(2);
  await page.locator('[data-remove-interest="music"]').click();
  await expect(page.locator('.class-ticket')).toHaveCount(1);
  await page.locator('#open-filters').click();
  await page.locator('#reset-filters').click();
  await page.locator('#apply-filters').click();
  await expect(page.locator('#interest-summary')).toBeHidden();
  await expect(page.locator('.class-ticket')).toHaveCount(8);
});

test('backdrop closes only the top popup and never dismisses a drag that began inside',async({page})=>{
  await open(page);
  await page.locator('#toggle-map').click();
  await page.locator('.lecture-open').first().click();
  await page.locator('#detail-title').click();
  await expect(page.locator('#lecture-detail')).toBeVisible();
  const r=await page.locator('#detail-title').boundingBox();
  await page.mouse.move(r.x+8,r.y+8);await page.mouse.down();await page.mouse.move(20,200);await page.mouse.up();
  await expect(page.locator('#lecture-detail')).toBeVisible();
  await page.locator('#share-class').click();
  await page.mouse.click(20,200);
  await expect(page.locator('#share-dialog')).toBeHidden();
  await expect(page.locator('#lecture-detail')).toBeVisible();
  await page.mouse.click(20,200);
  await expect(page.locator('#lecture-detail')).toBeHidden();
  await expect.poll(()=>page.evaluate(()=>window.sonderPreview.state.selected)).toBeNull();
  await page.locator('#open-filters').click();
  await page.locator('#filter-interests > summary').click();
  await page.locator('[data-topic="Science"]').click();
  await page.mouse.click(20,200);
  await expect(page.locator('#filters-dialog')).toBeHidden();
  expect(await page.evaluate(()=>window.sonderPreview.state.subject)).toBe('Everything');
});
