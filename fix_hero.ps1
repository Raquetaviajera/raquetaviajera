$content = Get-Content 'index.html' -Raw -Encoding UTF8
$heroNew = @"
<!-- ========================================
         MEDIA DECK — Pila de fotos flotantes
         El JavaScript (script.js, línea 491) las
         rota automáticamente cada 4 segundos.
         ======================================== -->
    <div class="media-deck">

      <!-- CARTA 1: Denis jugando Beach Tennis
           Aparece al frente, rotada a la izquierda -->
      <div class="deck-card deck-card--1">
        <img src="denis-bt.webp" alt="Denis Rodiz - Beach Tennis en Colombia">
        <div class="deck-card-label">Beach Tennis</div>
      </div>

      <!-- CARTA 2: Vista de Quito, Ecuador
           En el medio, rotada levemente a la derecha -->
      <div class="deck-card deck-card--2">
        <img src="quito2.webp" alt="Basílica del Voto Nacional - Quito Ecuador">
        <div class="deck-card-label">Ecuador</div>
      </div>

      <!-- CARTA 3: Canchas de Pádel en Venezuela
           Al fondo, más pequeña para dar profundidad -->
      <div class="deck-card deck-card--3">
        <img src="padel.webp" alt="Canchas de Pádel - Venezuela">
        <div class="deck-card-label">Pádel</div>
      </div>

    </div>
"@
$content = $content -replace '(?s)<div class="hero-logo-wrap">.*?class="hero-logo-img">\s*</div>', $heroNew
Set-Content 'index.html' -Value $content -Encoding UTF8
Write-Host "Done"
