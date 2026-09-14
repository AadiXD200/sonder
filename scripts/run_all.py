"""Regenerate data/lectures.json from scratch. ~2 minutes."""
import os, subprocess, sys

HERE = os.path.dirname(os.path.abspath(__file__))
STEPS = [
    ("stage0_buildings.py", "building coordinates"),
    ("stage1.py",           "enumerate all courses"),
    ("analyze1.py",         "filter to St. George"),
    ("stage2.py",           "fetch rooms"),
    ("build.py",            "join + emit lectures.json"),
]

for i, (script, what) in enumerate(STEPS, 1):
    print(f"\n{'='*60}\n[{i}/{len(STEPS)}] {script} — {what}\n{'='*60}", flush=True)
    r = subprocess.run([sys.executable, os.path.join(HERE, script)])
    if r.returncode != 0:
        sys.exit(f"\nFAILED at {script} (exit {r.returncode}). Nothing downstream ran.")

print("\nDone. data/lectures.json regenerated.")
