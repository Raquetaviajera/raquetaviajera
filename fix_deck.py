import sys

# 1. FIX STYLES.CSS
with open("styles.css", "r", encoding="utf-8") as f:
    lines = f.readlines()

# find duplicate block 3433-3486
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if "1. COMPONENTE PILA DE FOTOS DINÁMICA (HERO MEDIA DECK)" in line:
        start_idx = i - 2 # include comment before it if needed
    if "2. NUEVA SECCIÓN DE GALERÍA VIAJERA DINÁMICA" in line:
        end_idx = i - 1
        break

if start_idx != -1 and end_idx != -1:
    del lines[start_idx:end_idx]

# Update the remaining .media-deck to 350x440 (un poco más grande)
for i, line in enumerate(lines):
    if ".media-deck {" in line:
        # Check next few lines for width/height
        for j in range(i, i+10):
            if "width: 300px;" in lines[j]:
                lines[j] = lines[j].replace("300px", "350px")
            if "height: 380px;" in lines[j]:
                lines[j] = lines[j].replace("380px", "440px")

with open("styles.css", "w", encoding="utf-8") as f:
    f.writelines(lines)


# 2. FIX SCRIPT.JS
with open("script.js", "r", encoding="utf-8") as f:
    js_lines = f.readlines()

for i, line in enumerate(js_lines):
    if "c.style.transform = 'translateY(' + (-15 * order) + 'px)" in line or "-15 * order" in line:
        js_lines[i] = line.replace("-15 * order", "18 * order") # match CSS (+18px per order)

with open("script.js", "w", encoding="utf-8") as f:
    f.writelines(js_lines)

print("Fix applied")
