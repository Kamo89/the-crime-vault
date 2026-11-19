#!/usr/bin/env python3
"""Builds index.html (the whole game, one file) from src/. Run: python3 build.py"""
from pathlib import Path
src = Path(__file__).parent / "src"
order = ["kiln", "amandelhof", "kopanang", "dezalze", "pistorius", "abc", "frederick", "gsk"]
cases = "\n".join((src / "cases" / f"{n}.js").read_text() for n in order)
html = (src / "head.html").read_text() + "<style>\n" + (src / "styles.css").read_text() + "</style>" + (src / "body.html").read_text() \
    + "<script>\nconst CASES = [];\n" + cases + "\n" + (src / "engine.js").read_text() + "\n" + (src / "pwa.js").read_text() + "\n" + (src / "boot.js").read_text() + "</script>\n</body>\n</html>\n"
(Path(__file__).parent / "index.html").write_text(html)
print(f"index.html built: {len(html)//1024} KB, {len(order)} cases")
