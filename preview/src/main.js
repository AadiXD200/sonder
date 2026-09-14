import "./standalone.css";
import { mountCampusMap } from "./campus-map.js";

export const campusMap = mountCampusMap(document.getElementById("app"));
window.campusMap = campusMap;
if (import.meta.hot) import.meta.hot.dispose(() => campusMap.dispose());
