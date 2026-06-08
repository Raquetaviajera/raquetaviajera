$content = Get-Content 'index.html' -Raw -Encoding UTF8

$navOld = "<li><a onclick=`"scrollToSection('raquetas-section')`">Raquetas</a></li><li><a onclick=`"scrollToSection('tienda')`">Tienda</a></li>"
$navNew = "<li><a onclick=`"scrollToSection('raquetas-section')`">Raquetas</a></li><li><a onclick=`"scrollToSection('galeria-viajera')`">Galer&iacute;a</a></li><li><a onclick=`"scrollToSection('tienda')`">Tienda</a></li>"

$content = $content.Replace($navOld, $navNew)

$heroOld = [regex]::Match($content, '(?s)<div class="hero-logo-wrap">.*?class="hero-logo-img">\s*</div>').Value
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
        <div class="deck-card-label">P&aacute;del</div>
      </div>

    </div>
"@

if ($heroOld -ne "") {
    $content = $content.Replace($heroOld, $heroNew)
    Write-Host "Media deck inserted."
} else {
    Write-Host "Hero logo wrap not found."
}

$prensaOld = [regex]::Match($content, '(?s)(<!-- M.TRICAS -->\s*<section id="prensa".*?</section>)').Value
$galeriaHtml = @"

<!-- ================================================
     GALERÍA VIAJERA
     Esta sección se llena automáticamente con
     JavaScript (función initVisualGallery en script.js).
     Los datos de cada foto están en window.GALERIA_DATOS
     al principio del archivo script.js — fácil de editar.
     ================================================ -->
<section id="galeria-viajera" class="content-section">
  <div class="sec-inner">

    <!-- Encabezado de la sección -->
    <span class="sec-eyebrow reveal">Contenido real &middot; LATAM</span>
    <h2 class="sec-title reveal">GALER&Iacute;A<br>VIAJERA.</h2>
    <div class="red-bar reveal"></div>
    <p class="sec-desc reveal">M&aacute;s de 900 lugares documentados con c&aacute;mara propia. Canchas, restaurantes, hoteles y cultura en Venezuela, Colombia y Ecuador. Haz clic en cualquier foto para ver la rese&ntilde;a completa.</p>

    <!-- ============================================
         VIDEO TEASER CARD — Tarjeta estilo glassmorphism
         El efecto "cristal" se logra con backdrop-filter
         en el CSS (.vtc-glass en styles.css)
         ============================================ -->
    <div class="video-teaser-card reveal">
      <div class="vtc-glass">

        <!-- Botón de Play (columna izquierda, fondo rojo) -->
        <div class="vtc-play-btn" onclick="window.open('https://youtube.com/@raquetaviajera', '_blank')" title="Ver canal de YouTube">
          <div class="vtc-play-icon">&#9654;</div>
        </div>

        <!-- Texto central: título, descripción y enlace -->
        <div class="vtc-content">
          <div class="vtc-tag">YouTube &middot; 75.7% Retenci&oacute;n</div>
          <div class="vtc-title">RAQUETA VIAJERA<br><span>EN ACCI&Oacute;N.</span></div>
          <div class="vtc-desc">La &uacute;nica voz en espa&ntilde;ol del turismo deportivo en LATAM. Canchas, destinos, gastronom&iacute;a y deporte de raqueta &mdash; todo en un solo canal.</div>
          <a href="https://youtube.com/@raquetaviajera" target="_blank" rel="noopener" class="vtc-cta">Ver Canal &#8594;</a>
        </div>

        <!-- Estadísticas (columna derecha) -->
        <div class="vtc-stats">
          <div class="vtc-stat"><span>75.7%</span>Retenci&oacute;n</div>
          <div class="vtc-stat"><span>5.9M</span>Google Maps</div>
          <div class="vtc-stat"><span>900+</span>Destinos</div>
        </div>

      </div>
    </div>
    <!-- Fin video-teaser-card -->

    <!-- ============================================
         FILTROS DE CATEGORÍA
         Cada botón llama a filterGallery() en script.js.
         El parámetro es el valor "category" de cada
         item en window.GALERIA_DATOS (script.js línea 14).
         ============================================ -->
    <div class="gal-filter-tabs reveal">
      <!-- "Todos" muestra todas las fotos sin filtrar -->
      <button class="gal-filter-btn active"
              data-category="todos"
              onclick="filterGallery('todos', this)">
        Todos
      </button>
      <!-- "Acción" filtra las canchas deportivas -->
      <button class="gal-filter-btn"
              data-category="canchas"
              onclick="filterGallery('canchas', this)">
        &#127926; Acci&oacute;n
      </button>
      <!-- "Canchas" también filtra la categoría canchas -->
      <button class="gal-filter-btn"
              data-category="hoteles"
              onclick="filterGallery('hoteles', this)">
        &#127968; Hospedaje
      </button>
      <!-- "Gastronomía" filtra los restaurantes -->
      <button class="gal-filter-btn"
              data-category="restaurantes"
              onclick="filterGallery('restaurantes', this)">
        &#127860; Gastronom&iacute;a
      </button>
      <!-- "Recreación" filtra cultura y turismo -->
      <button class="gal-filter-btn"
              data-category="recreacion"
              onclick="filterGallery('recreacion', this)">
        &#127958; Recreaci&oacute;n
      </button>
    </div>
    <!-- Fin filtros -->

    <!-- ============================================
         GRID DE LA GALERÍA
         Este div empieza VACÍO a propósito.
         La función initVisualGallery() en script.js
         lo rellena automáticamente al cargar la página
         usando los datos de window.GALERIA_DATOS.
         Para agregar fotos nuevas, edita script.js.
         ============================================ -->
    <div class="gal-grid" id="visual-gallery-grid">
      <!-- Las tarjetas de fotos se insertan aquí con JavaScript -->
    </div>
    <!-- Fin galería grid -->

  </div>
</section>
"@

if ($prensaOld -ne "") {
    $content = $content.Replace($prensaOld, "$prensaOld`n$galeriaHtml")
    Write-Host "Galeria Viajera inserted."
} else {
    Write-Host "Prensa section not found."
}

Set-Content 'index.html' -Value $content -Encoding UTF8
Write-Host "Done!"
