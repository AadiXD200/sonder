"""Clean calendar prose into card-ready copy.

The TTB API already strips most prerequisite blocks, so this is deliberately
light: it removes enrolment administrivia that reads as noise on a result card
("Restricted to students in...", trailing "Note:" clauses) and pulls the first
one or two sentences as the summary the card actually shows.

Two outputs per course, because they serve different jobs:
  summary  - what the card shows. Short, must read as a sell.
  full     - what the detail view shows and what the tagger reads. Cleaned but
             not truncated; throwing away the back half of a description loses
             exactly the specific terms ("Lebesgue measure", "Hilbert spaces")
             that make topic tagging work on opaque titles.
"""
import re

# Sentences that are about enrolment, not about the subject. Dropped wherever
# they appear, not just at the end -- some records lead with them.
ADMIN = re.compile(
    r'(?:^|(?<=[.!?]\s))'
    r'(?:Restricted to|Open only to|Enrolment is|Priority is given|'
    r'Students? (?:must|are required to|may not)|Note:|This course is (?:restricted|open only)|'
    r'Not eligible for|May not be taken)'
    r'[^.!?]*[.!?]\s*',
    re.I)

# Trailing metadata the API sometimes leaves inline.
TAIL = re.compile(
    r'\s*(?:Breadth Requirement|Distribution Requirement|Prerequisite|Exclusion|'
    r'Corequisite|Recommended Preparation)\s*:.*$',
    re.I | re.S)

WS = re.compile(r'\s+')


def clean(text):
    """Strip administrivia and normalise whitespace. Returns '' for empties."""
    if not text:
        return ''
    t = TAIL.sub('', text)
    t = ADMIN.sub('', t)
    t = WS.sub(' ', t).strip()
    # A description that was *only* administrivia collapses to nothing; fall
    # back to the original so the card is never blank.
    if len(t) < 40 and text.strip():
        t = WS.sub(' ', TAIL.sub('', text)).strip()
    return t


def sentences(text):
    """Split on sentence ends, protecting the common abbreviations that appear
    in calendar prose (e.g., i.e., etc., Ph.D., vs.) from being split mid-word."""
    if not text:
        return []
    guard = re.sub(r'\b(e\.g|i\.e|etc|vs|cf|Ph\.D|M\.A|B\.A|St|Dr|Prof)\.',
                   lambda m: m.group(0).replace('.', '\x00'), text)
    parts = re.split(r'(?<=[.!?])\s+', guard)
    return [p.replace('\x00', '.').strip() for p in parts if p.strip()]


def summarise(text, limit=220):
    """First one or two sentences, up to `limit` chars.

    Takes a second sentence only if the first is short enough that the pair
    still fits -- a card with one strong sentence beats a card with one and a
    half. Never cuts mid-sentence: an ellipsis on a card reads as broken data.
    """
    s = sentences(clean(text))
    if not s:
        return ''
    out = s[0]
    if len(out) > limit:
        # A single over-long sentence is rare; clip at a word boundary.
        return out[:limit].rsplit(' ', 1)[0].rstrip(',;:') + '…'
    if len(s) > 1 and len(out) + 1 + len(s[1]) <= limit:
        out = out + ' ' + s[1]
    return out
