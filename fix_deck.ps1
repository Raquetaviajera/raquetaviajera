$fileCss = "styles.css"
$lines = Get-Content -Path $fileCss -Encoding UTF8

$startIdx = -1
$endIdx = -1

for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match "1. COMPONENTE PILA DE FOTOS") {
        $startIdx = $i - 1
    }
    if ($lines[$i] -match "2. NUEVA SECCIÓN DE GALERÍA VIAJERA") {
        $endIdx = $i - 1
        break
    }
}

$newLines = @()
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($startIdx -ne -1 -and $endIdx -ne -1 -and $i -ge $startIdx -and $i -le $endIdx) {
        continue
    }
    
    $line = $lines[$i]
    if ($line -match "width: 300px;" -and $lines[$i-2] -match "\.media-deck") {
        $line = $line -replace "300px", "350px"
    }
    if ($line -match "height: 380px;" -and $lines[$i-3] -match "\.media-deck") {
        $line = $line -replace "380px", "440px"
    }
    
    $newLines += $line
}

Set-Content -Path $fileCss -Value $newLines -Encoding UTF8

$fileJs = "script.js"
$jsLines = Get-Content -Path $fileJs -Encoding UTF8
$newJsLines = @()

foreach ($line in $jsLines) {
    if ($line -match "-15 \* order") {
        $line = $line -replace "-15 \* order", "18 * order"
    }
    $newJsLines += $line
}

Set-Content -Path $fileJs -Value $newJsLines -Encoding UTF8
Write-Host "Fix applied"
