"""The topic vocabulary.

This is the fixed list a tagger is allowed to choose from, and it is also the
browsable grid in the UI. Both jobs pull in the same direction: a topic has to
be something a student would actually type or tap ("psychology", "film",
"climate"), not a curriculum category ("Interdisciplinary Studies").

Design rules I held to:

  * Named after the thing, not the department. `ai` not `computer science` --
    a student looking for AI does not care that CHE321 belongs to Chemical
    Engineering, and that cross-faculty reach is the entire point of the search.
  * Roughly 30-120 courses each on this catalogue. A topic with four courses is
    a dead tile in the grid; a topic with six hundred tells you nothing.
  * Synonyms carry the query surface. `ml`, `machine learning` and `deep
    learning` all land on `ai`. Synonyms are matched on normalised whole words,
    so short ones like `ai` and `ml` are safe -- they can't match inside
    "aircraft" or "html".
  * `keywords` are for the fallback tagger only (when the LLM pass is
    unavailable or low-confidence). They are deliberately more specific than
    the synonyms, because they run against description prose where a loose word
    like "design" fires on everything.

Order matters only for display: the grid renders in this order.
"""

# id: (label, synonyms, keywords)
TOPICS = {
    # --- making things / computing -------------------------------------
    "programming": (
        "Programming",
        ["programming", "coding", "software", "computer science", "cs",
         "software engineering", "programmer"],
        ["programming", "software design", "python", "java", "javascript",
         "object-oriented", "compiler", "operating system", "data structures",
         "algorithms and", "software engineering", "web programming"]),
    "ai": (
        "AI & machine learning",
        ["ai", "artificial intelligence", "machine learning", "ml",
         "deep learning", "neural networks", "llm", "llms"],
        ["machine learning", "artificial intelligence", "deep learning",
         "neural network", "reinforcement learning", "computer vision",
         "natural language processing", "generative model"]),
    "data": (
        "Data & statistics",
        ["data", "data science", "statistics", "stats", "analytics",
         "probability", "statistical"],
        ["statistical", "probability", "regression", "data analysis",
         "inference", "sampling", "bayesian", "stochastic", "data science"]),
    "math": (
        "Mathematics",
        ["math", "maths", "mathematics", "calculus", "algebra", "geometry",
         "topology", "analysis"],
        ["calculus", "linear algebra", "theorem", "differential equation",
         "topology", "number theory", "abstract algebra", "real analysis",
         "measure", "manifold", "combinatorics"]),
    "engineering": (
        "Engineering",
        ["engineering", "engineer", "mechanical", "electrical", "civil",
         "aerospace", "mechatronics"],
        ["mechanical design", "thermodynamics", "structural analysis",
         "circuit", "control systems", "fluid mechanics", "manufacturing",
         "finite element", "aerodynamics", "materials engineering"]),
    "robotics": (
        "Robotics",
        ["robotics", "robots", "robot", "automation", "control systems"],
        ["robot", "kinematics", "actuator", "autonomous vehicle",
         "control system", "mechatronic"]),
    "design": (
        "Design",
        ["design", "product design", "industrial design", "ux", "graphic design"],
        ["design process", "prototyp", "user-centred", "user-centered",
         "industrial design", "design thinking", "typograph"]),
    "architecture": (
        "Architecture",
        ["architecture", "architectural", "urban design", "buildings"],
        ["architectural", "built environment", "urban design", "studio",
         "spatial design", "landscape architecture"]),

    # --- life & health --------------------------------------------------
    "biology": (
        "Biology",
        ["biology", "bio", "life sciences", "cell biology", "molecular biology"],
        ["cell", "organism", "molecular biology", "gene expression", "protein",
         "enzyme", "physiolog", "biochem", "microbio"]),
    "medicine": (
        "Medicine & health",
        ["medicine", "medical", "health", "healthcare", "clinical", "disease",
         "public health", "pathology"],
        ["clinical", "disease", "patient", "diagnosis", "pathology",
         "pharmacolog", "epidemiolog", "public health", "therapeutic",
         "immunolog", "anatomy"]),
    "neuroscience": (
        "Brain & behaviour",
        ["neuroscience", "brain", "cognition", "cognitive science", "neural",
         "consciousness", "mind"],
        ["brain", "neuron", "cognitive", "perception", "memory and",
         "neural circuit", "behaviour", "behavior", "consciousness"]),
    "psychology": (
        "Psychology",
        ["psychology", "psych", "mental health", "therapy", "personality"],
        ["psycholog", "mental health", "personality", "developmental",
         "clinical psych", "social psych", "emotion"]),
    "genetics": (
        "Genetics & evolution",
        ["genetics", "genomics", "evolution", "dna", "heredity", "genome"],
        ["genetic", "genome", "evolution", "heredit", "dna", "mutation",
         "phylogen", "natural selection"]),
    "nutrition": (
        "Food & nutrition",
        ["nutrition", "food", "diet", "dietetics", "food science"],
        ["nutrition", "diet", "food science", "metabolism", "nutrient"]),
    "sport": (
        "Sport & movement",
        ["sport", "sports", "kinesiology", "fitness", "exercise", "athletics",
         "physical education"],
        ["exercise", "kinesiolog", "athlet", "physical activity", "biomechanic",
         "sport", "coaching", "motor learning"]),

    # --- physical world -------------------------------------------------
    "physics": (
        "Physics",
        ["physics", "quantum", "relativity", "mechanics", "particle physics"],
        ["quantum", "relativity", "electromagnet", "particle", "thermodynam",
         "wave", "optics", "classical mechanics", "condensed matter"]),
    "chemistry": (
        "Chemistry",
        ["chemistry", "chem", "organic chemistry", "materials", "molecules"],
        ["chemical", "organic chem", "reaction", "molecul", "spectroscop",
         "synthesis", "catalys", "polymer"]),
    "space": (
        "Space & astronomy",
        ["space", "astronomy", "astrophysics", "cosmology", "planets", "stars",
         "universe"],
        ["astronom", "galax", "cosmolog", "planet", "stellar", "telescope",
         "astrophysic", "universe"]),
    "earth": (
        "Earth & geology",
        ["earth", "geology", "geoscience", "rocks", "oceans", "volcanoes",
         "earth science"],
        ["geolog", "mineral", "tectonic", "sediment", "ocean", "atmosphere",
         "earth's", "fossil", "hydrolog"]),
    "climate": (
        "Climate & environment",
        ["climate", "climate change", "environment", "environmental",
         "sustainability", "ecology", "green"],
        ["climate", "environmental", "sustainab", "ecosystem", "ecolog",
         "conservation", "biodiversity", "pollution", "carbon"]),

    # --- people & society -----------------------------------------------
    "history": (
        "History",
        ["history", "historical", "the past", "ancient history", "medieval"],
        ["histor", "century", "medieval", "ancient", "empire", "archival",
         "modern era", "war of", "revolution"]),
    "politics": (
        "Politics",
        ["politics", "political science", "government", "policy", "democracy",
         "elections", "political"],
        ["politic", "government", "policy", "democra", "state", "election",
         "citizen", "governance", "power and"]),
    "law": (
        "Law & justice",
        ["law", "legal", "justice", "rights", "human rights", "criminology",
         "crime", "courts"],
        ["legal", "law", "justice", "rights", "court", "criminal",
         "constitution", "regulat", "crimin"]),
    "economics": (
        "Economics",
        ["economics", "econ", "economy", "markets", "macroeconomics",
         "microeconomics"],
        ["econom", "market", "price", "supply and demand", "macroeconom",
         "microeconom", "trade", "labour market", "labor market"]),
    "business": (
        "Business & management",
        ["business", "management", "commerce", "marketing", "strategy",
         "entrepreneurship", "startup", "mba"],
        ["management", "marketing", "business strateg", "organization",
         "entrepreneur", "firm", "consumer", "operations"]),
    "finance": (
        "Finance & accounting",
        ["finance", "financial", "accounting", "investing", "banking",
         "actuarial", "insurance"],
        ["financ", "accounting", "investment", "portfolio", "asset",
         "actuarial", "risk manage", "derivative", "insurance"]),
    "sociology": (
        "Society & culture",
        ["sociology", "society", "social", "culture", "cultural studies",
         "anthropology", "social theory"],
        ["sociolog", "social structure", "cultur", "anthropolog", "communit",
         "inequality", "identity", "class and"]),
    "gender": (
        "Gender & sexuality",
        ["gender", "sexuality", "feminism", "women", "queer", "lgbtq",
         "women's studies"],
        ["gender", "feminis", "sexuality", "queer", "women's", "masculin"]),
    "race": (
        "Race & colonialism",
        ["race", "racism", "colonialism", "postcolonial", "indigenous",
         "decolonial", "black studies", "diaspora"],
        ["colonial", "indigenous", "racial", "race", "diaspora", "settler",
         "black stud", "empire and"]),
    "education": (
        "Education & teaching",
        ["education", "teaching", "pedagogy", "learning", "schools",
         "educational"],
        ["pedagog", "teaching", "classroom", "curriculum", "educational",
         "learners", "school"]),
    "cities": (
        "Cities & geography",
        ["cities", "city", "urban", "geography", "planning", "urban studies",
         "toronto"],
        ["urban", "geograph", "city", "planning", "spatial", "neighbourhood",
         "neighborhood", "region", "transport"]),

    # --- arts & ideas ---------------------------------------------------
    "philosophy": (
        "Philosophy",
        ["philosophy", "ethics", "logic", "metaphysics", "epistemology",
         "moral", "existentialism"],
        ["philosoph", "ethic", "moral", "metaphysic", "epistemolog", "logic",
         "argument", "nature of knowledge", "free will"]),
    "religion": (
        "Religion",
        ["religion", "religious", "theology", "faith", "buddhism",
         "christianity", "islam", "judaism", "spirituality"],
        ["religio", "theolog", "sacred", "scriptur", "buddhis", "christian",
         "islam", "jewish", "ritual", "faith"]),
    "literature": (
        "Literature & writing",
        ["literature", "english", "books", "novels", "poetry", "creative writing",
         "writing", "fiction"],
        ["literar", "novel", "poetry", "poem", "fiction", "narrative",
         "text", "writing", "author", "genre"]),
    "language": (
        "Languages & linguistics",
        ["language", "languages", "linguistics", "french", "spanish",
         "mandarin", "translation", "grammar"],
        ["language", "linguistic", "grammar", "phonolog", "syntax",
         "translation", "bilingual", "speakers"]),
    "film": (
        "Film & media",
        ["film", "cinema", "movies", "media", "television", "screen studies",
         "video"],
        ["film", "cinema", "screen", "media", "televis", "documentar",
         "moving image", "spectator"]),
    "music": (
        "Music",
        ["music", "musical", "composition", "performance", "sound", "opera",
         "jazz"],
        ["music", "composer", "sound", "performance practice", "harmon",
         "instrument", "opera", "repertoire"]),
    "art": (
        "Art & art history",
        ["art", "art history", "visual art", "painting", "sculpture",
         "museums", "curating"],
        ["art histor", "painting", "sculptur", "visual art", "museum",
         "gallery", "artist", "aesthetic", "curat"]),
    "theatre": (
        "Theatre & performance",
        ["theatre", "theater", "drama", "performance", "acting", "stage"],
        ["theatr", "drama", "stage", "performance", "acting", "playwright"]),
    "classics": (
        "Classics & antiquity",
        ["classics", "latin", "greek", "ancient", "rome", "archaeology",
         "mythology"],
        ["ancient greek", "roman", "latin", "classical world", "archaeolog",
         "myth", "antiquit", "homer"]),
}

# Subject buckets Astra's UI already filters on. Mapping is by topic, not by
# department, so a course lands in the bucket its *content* belongs to.
SUBJECT_OF_TOPIC = {
    "programming": "Technology", "ai": "Technology", "data": "Technology",
    "engineering": "Technology", "robotics": "Technology",
    "design": "Technology", "architecture": "Technology",

    "math": "Science", "biology": "Science", "medicine": "Science",
    "neuroscience": "Science", "genetics": "Science", "nutrition": "Science",
    "physics": "Science", "chemistry": "Science", "space": "Science",
    "earth": "Science", "climate": "Science", "sport": "Science",

    "history": "Society", "politics": "Society", "law": "Society",
    "economics": "Society", "business": "Society", "finance": "Society",
    "sociology": "Society", "gender": "Society", "race": "Society",
    "education": "Society", "cities": "Society", "psychology": "Society",

    "philosophy": "Arts & ideas", "religion": "Arts & ideas",
    "literature": "Arts & ideas", "language": "Arts & ideas",
    "film": "Arts & ideas", "music": "Arts & ideas", "art": "Arts & ideas",
    "theatre": "Arts & ideas", "classics": "Arts & ideas",
}

IDS = list(TOPICS)

# Department-code prefix -> topics that department's courses reliably belong to.
# Used two ways: as a prior the fallback tagger can lean on when the prose is
# thin, and as a sanity check on the LLM pass. Deliberately NOT exhaustive --
# only prefixes where the mapping is honest. A wrong prior is worse than none,
# because it silently pollutes a whole topic's course list.
PREFIX_PRIOR = {
    "CSC": ["programming"], "ECE": ["engineering"], "MIE": ["engineering"],
    "CIV": ["engineering"], "AER": ["engineering"], "MSE": ["engineering"],
    "CHE": ["engineering"], "APS": ["engineering"], "ESC": ["engineering"],
    "BME": ["engineering"], "MIN": ["engineering"], "ROB": ["robotics"],
    "MAT": ["math"], "APM": ["math"], "STA": ["data"], "ACT": ["finance"],
    "PHY": ["physics"], "AST": ["space"], "CHM": ["chemistry"],
    "ESS": ["earth"], "ENV": ["climate"], "FOR": ["climate"],
    "BIO": ["biology"], "CSB": ["biology"], "EEB": ["genetics"],
    "BCH": ["biology"], "MGY": ["biology"], "IMM": ["biology"],
    "HMB": ["medicine"], "PSL": ["medicine"], "PCL": ["medicine"],
    "LMP": ["medicine"], "ANA": ["medicine"], "NFS": ["nutrition"],
    "KPE": ["sport"], "PSY": ["psychology"], "COG": ["neuroscience"],
    "HIS": ["history"], "POL": ["politics"], "CRI": ["law"],
    "ECO": ["economics"], "RSM": ["business"], "MGT": ["business"],
    "FIN": ["finance"], "SOC": ["sociology"], "ANT": ["sociology"],
    "WGS": ["gender"], "GGR": ["cities"], "URB": ["cities"],
    "PHL": ["philosophy"], "RLG": ["religion"], "ENG": ["literature"],
    "LIN": ["language"], "FRE": ["language"], "FSL": ["language"],
    "SPA": ["language"], "ITA": ["language"], "GER": ["language"],
    "SLA": ["language"], "EAS": ["language"], "NMC": ["history"],
    "CIN": ["film"], "MUS": ["music"], "HMU": ["music"], "PMU": ["music"],
    "FAH": ["art"], "VIS": ["art"], "DRM": ["theatre"],
    "CLA": ["classics"], "LAT": ["classics"], "GRK": ["classics"],
    "ARC": ["architecture"], "HPS": ["history"], "PHS": ["physics"],
    "INS": ["race"], "AFR": ["race"], "CDN": ["sociology"],
    # College and interdisciplinary programmes. Their catalogue entries are
    # often "topics vary from year to year depending on the instructor", so
    # the prose scores nothing and the prefix is the only signal there is.
    # A loose tag beats no tag: an untagged course is invisible to every
    # topic query in the app.
    "VIC": ["sociology"], "NEW": ["sociology"], "TRN": ["politics"],
    "INI": ["film"], "UNI": ["sociology"], "SMC": ["religion"],
    "CRE": ["art"], "IFP": ["education"], "WDW": ["sociology"],
}


def normalise(q):
    import re
    return re.sub(r"[^a-z0-9 ]+", " ", (q or "").lower()).strip()


def synonym_index():
    """Flat {synonym -> topic id}. Longest synonyms win on ties by being
    matched first at query time."""
    idx = {}
    for tid, (_label, syns, _kw) in TOPICS.items():
        idx[tid] = tid
        for s in syns:
            idx[normalise(s)] = tid
    return idx
