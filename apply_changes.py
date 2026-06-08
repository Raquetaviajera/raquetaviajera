import re

def main():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update the nav links
    nav_old = "<li><a onclick=\"scrollToSection('raquetas-section')\">Raquetas</a></li><li><a onclick=\"scrollToSection('tienda')\">Tienda</a></li>"
    nav_new = "<li><a onclick=\"scrollToSection('raquetas-section')\">Raquetas</a></li><li><a onclick=\"scrollToSection('galeria-viajera')\">Galería</a></li><li><a onclick=\"scrollToSection('tienda')\">Tienda</a></li>"
    if nav_old in content:
        content = content.replace(nav_old, nav_new)
        print("Nav updated.")
    else:
        print("Nav old not found.")

    # 2. Replace the hero logo with media-deck
    # It starts with <div class="hero-logo-wrap"> and ends with </div> after the img
    hero_pattern = re.compile(r'<div class="hero-logo-wrap">.*?</div>\s*</div>', re.DOTALL)
    
    media_deck = """<!-- ========================================
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
  </div>"""
    
    if re.search(hero_pattern, content):
        content = re.sub(hero_pattern, media_deck, content, count=1)
        print("Media deck inserted.")
    else:
        print("Hero logo wrap not found.")

    # 3. Insert Galería Viajera after Prensa section
    # Find the end of #prensa section
    prensa_pattern = re.compile(r'(<!-- MÉTRICAS -->\s*<section id="prensa".*?</section>)', re.DOTALL)
    
    galeria_html = """

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
    <span class="sec-eyebrow reveal">Contenido real · LATAM</span>
    <h2 class="sec-title reveal">GALERÍA<br>VIAJERA.</h2>
    <div class="red-bar reveal"></div>
    <p class="sec-desc reveal">Más de 900 lugares documentados con cámara propia. Canchas, restaurantes, hoteles y cultura en Venezuela, Colombia y Ecuador. Haz clic en cualquier foto para ver la reseña completa.</p>

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
          <div class="vtc-tag">YouTube &middot; 75.7% Retención</div>
          <div class="vtc-title">RAQUETA VIAJERA<br><span>EN ACCIÓN.</span></div>
          <div class="vtc-desc">La única voz en español del turismo deportivo en LATAM. Canchas, destinos, gastronomía y deporte de raqueta &mdash; todo en un solo canal.</div>
          <a href="https://youtube.com/@raquetaviajera" target="_blank" rel="noopener" class="vtc-cta">Ver Canal &#8594;</a>
        </div>

        <!-- Estadísticas (columna derecha) -->
        <div class="vtc-stats">
          <div class="vtc-stat"><span>75.7%</span>Retención</div>
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
        &#127926; Acción
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
        &#127860; Gastronomía
      </button>
      <!-- "Recreación" filtra cultura y turismo -->
      <button class="gal-filter-btn"
              data-category="recreacion"
              onclick="filterGallery('recreacion', this)">
        &#127958; Recreación
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
"""

    if re.search(prensa_pattern, content):
        content = re.sub(prensa_pattern, r'\1\n' + galeria_html, content, count=1)
        print("Galeria Viajera inserted.")
    else:
        print("Prensa section not found.")

    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)
        print("File saved.")

if __name__ == '__main__':
    main()
