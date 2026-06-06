$file = "index.html"
$lines = Get-Content -Path $file -Encoding UTF8

$galeriaStart = 835
$galeriaEnd = 938
$insertPos = 144

if ($lines[$galeriaStart] -match "<!-- ================================================" -or $lines[$galeriaStart+7] -match "galeria-viajera") {
    $galeriaBlock = $lines[$galeriaStart..$galeriaEnd]
    
    $newLines = @()
    for ($i = 0; $i -lt $lines.Count; $i++) {
        if ($i -ge $galeriaStart -and $i -le $galeriaEnd) {
            continue
        }
        if ($i -eq $insertPos) {
            $newLines += ""
            $newLines += $galeriaBlock
            $newLines += ""
        }
        $newLines += $lines[$i]
    }
    
    Set-Content -Path $file -Value $newLines -Encoding UTF8
    Write-Host "Moved successfully"
} else {
    Write-Host "Lines did not match exactly, aborting to prevent corruption."
    Write-Host "Line 835:" $lines[$galeriaStart]
}
