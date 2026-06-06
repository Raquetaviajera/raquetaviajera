$content = Get-Content index.html -Raw
# Replace base64 src attributes
$content = $content -replace 'src="data:image/png;base64,[A-Za-z0-9+/=\s\r\n]+"', 'src="RV perfil.png"'
[System.IO.File]::WriteAllText('index.html', $content, [System.Text.Encoding]::UTF8)
Write-Host "Length is now: $($content.Length)"
