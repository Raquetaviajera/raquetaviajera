import re

print("Reading index.html...")
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

print("Original size:", len(html))

# We will replace all src="data:image/png;base64,..." with src="RV perfil.png"
# Note that we match [A-Za-z0-9+/=\s\n\r]+ because base64 can contain newlines.
cleaned_html = re.sub(r'src="data:image/png;base64,[A-Za-z0-9+/=\s\r\n]+"', 'src="RV perfil.png"', html)

print("Cleaned size:", len(cleaned_html))

with open("index.html", "w", encoding="utf-8") as f:
    f.write(cleaned_html)

print("index.html cleaned successfully!")
