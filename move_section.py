import sys

with open("index.html", "r", encoding="utf-8") as f:
    lines = f.readlines()

galeria_start = -1
galeria_end = -1
prensa_end = -1

for i, line in enumerate(lines):
    if "<!-- ================================================" in line and "GALERÍA VIAJERA" in lines[i+1]:
        galeria_start = i
    if "</section>" in line and galeria_start != -1 and galeria_end == -1 and i > galeria_start + 10:
        if i >= 937: # based on our line numbers
            galeria_end = i
            
for i, line in enumerate(lines):
    if "<!-- DESTINOS -->" in line:
        prensa_end = i - 1 # Insert before this
        break

if galeria_start != -1 and galeria_end != -1 and prensa_end != -1:
    galeria_block = lines[galeria_start:galeria_end+1]
    # Remove from original position
    del lines[galeria_start:galeria_end+1]
    
    # Recalculate prensa_end because deleting lines before it changes its index?
    # No, galeria is after prensa. So indices for prensa don't change.
    
    # Insert at new position
    lines = lines[:prensa_end] + galeria_block + ['\n'] + lines[prensa_end:]
    
    with open("index.html", "w", encoding="utf-8") as f:
        f.writelines(lines)
    print("Moved successfully")
else:
    print(f"Could not find indices: start={galeria_start}, end={galeria_end}, insert={prensa_end}")
