"""Where the pipeline reads and writes.

Every path is derived from this file's own location, so the scripts work
no matter which directory you run them from.
"""
import os

ROOT  = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CACHE = os.path.join(ROOT, ".cache")      # intermediates, gitignored
DATA  = os.path.join(ROOT, "data")        # the shipped artifact

os.makedirs(CACHE, exist_ok=True)
os.makedirs(DATA,  exist_ok=True)

def p(*parts):
    """Path inside the intermediate cache."""
    return os.path.join(CACHE, *parts)
