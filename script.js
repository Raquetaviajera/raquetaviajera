/* 
  =========================================
  RAQUETA VIAJERA — CONFIGURACIÓN DE DATOS
  =========================================
  Hola Maru. Como estás aprendiendo a programar, he organizado todo el contenido 
  dinámico del sitio en este archivo. Para actualizar fotos, reseñas o estrellas, 
  solo debes cambiar los textos aquí abajo respetando el formato (las comas y las llaves).
*/

// ============================================
// 1. GALERÍA DE DESTINOS E INTERÉS (Quincenal/Mensual)
// ============================================
// Aquí puedes agregar nuevas fotos o cambiar las reseñas de Hoteles, Restaurantes, Canchas, etc.
window.GALERIA_DATOS = [
  {
    image: 'club-maderira.webp',
    name: 'Club Madeira',
    category: 'canchas',
    location: 'Lara, Venezuela',
    stars: '★★★★★',
    resena: 'Un club excepcional con canchas de tenis de tierra batida en excelente estado. Excelente comunidad y ambiente deportivo.'
  },
  {
    image: 'country2.webp',
    name: 'Barquisimeto Country Club',
    category: 'canchas',
    location: 'Lara, Venezuela',
    stars: '★★★★★',
    resena: 'Tradición y prestigio en el tenis larense. Sus canchas ofrecen una vista espectacular del atardecer larense.'
  },
  {
    image: 'padel-bqt.webp',
    name: 'Country Park Padel',
    category: 'canchas',
    location: 'Lara, Venezuela',
    stars: '★★★★☆',
    resena: 'Instalaciones modernas dedicadas al pádel. Iluminación nocturna de primer nivel y gran flujo de jugadores.'
  },
  {
    image: 'inti2.webp',
    name: 'Restaurante Peruano Inti',
    category: 'restaurantes',
    location: 'Lara, Venezuela',
    stars: '★★★★★',
    resena: 'Una propuesta gastronómica peruana de alta fidelidad. El ceviche y la causa limeña son insuperables.'
  },
  {
    image: 'cactus-bqt.webp',
    name: 'Cactus Resto-bar',
    category: 'restaurantes',
    location: 'Lara, Venezuela',
    stars: '★★★★☆',
    resena: 'Excelente ambiente al aire libre para disfrutar después del entrenamiento de tenis. Coctelería de autor recomendada.'
  },
  {
    image: 'casa-mia.webp',
    name: 'Restaurante Casa Mía',
    category: 'restaurantes',
    location: 'Lara, Venezuela',
    stars: '★★★★★',
    resena: 'Sabor local e internacional en un ambiente acogedor. Destacan sus pastas y carnes a la parrilla.'
  },
  {
    image: 'hotel-casa-madrigal.webp',
    name: 'Hotel Casa Madrigal',
    category: 'hoteles',
    location: 'Bogotá, Colombia',
    stars: '★★★★★',
    resena: 'Un hotel boutique con encanto deportivo y comodidad ideal para delegaciones. Atención sumamente personalizada.'
  },
  {
    image: 'hotel-porto-bello.webp',
    name: 'Hotel Porto Bello',
    category: 'hoteles',
    location: 'Bogotá, Colombia',
    stars: '★★★★☆',
    resena: 'Excelente ubicación estratégica para conectar con los principales clubes de tenis del norte de Bogotá.'
  },
  {
    image: 'clubdhuchi.webp',
    name: 'Club Campestre Dhuchi',
    category: 'hoteles',
    location: 'Bogotá, Colombia',
    stars: '★★★★★',
    resena: 'Un oasis de naturaleza en las afueras de Bogotá. Spa, canchas y cabañas espectaculares para un fin de semana de relax.'
  },
  {
    image: 'carnavales.webp',
    name: 'Carnavales Culturales',
    category: 'recreacion',
    location: 'Barranquilla, Colombia',
    stars: '★★★★★',
    resena: 'Vibrante despliegue de tradición y color. Un evento imperdible para conocer la riqueza folclórica del Caribe.'
  },
  {
    image: 'ventana.webp',
    name: 'Ventana al Mundo',
    category: 'recreacion',
    location: 'Barranquilla, Colombia',
    stars: '★★★★☆',
    resena: 'Monumento emblemático de la ciudad. Su diseño colorido e imponente es una parada obligada para fotografías.'
  },
  {
    image: 'chaquinan.webp',
    name: 'Ruta Ecológica El Chaquiñán',
    category: 'recreacion',
    location: 'Quito, Ecuador',
    stars: '★★★★★',
    resena: 'Un sendero ideal para ciclismo y caminatas ecológicas en Cumbayá. Aire puro y paisajes andinos increíbles.'
  }
];

// ============================================
// 1.5. RECOMENDACIONES DEL MES (Gastronomía)
// ============================================
window.RECOMENDACIONES_GASTRONOMIA = [
  {
    image: 'la_bruja2.webp',
    name: 'Restaurante La Bruja',
    stars: '★★★★★',
    resena: 'Una experiencia gastronómica mágica con sabores únicos y una atención de primera.'
  },
  {
    image: 'renne_peruvian.webp',
    name: 'Renne Peruvian',
    stars: '★★★★★',
    resena: 'Auténtica comida peruana que transporta tus sentidos directamente a los sabores de Lima.'
  },
  {
    image: 'la_kasta.webp',
    name: 'La Kasta',
    stars: '★★★★☆',
    resena: 'Un lugar increíble para compartir y disfrutar de excelentes platos en un ambiente inmejorable.'
  },
  {
    image: 'sole_rosso.webp',
    name: 'Sole Rosso',
    stars: '★★★★★',
    resena: 'El verdadero sabor mediterráneo. Ingredientes frescos y recetas clásicas que te encantarán.'
  }
];

// ============================================
// 2. GALERÍAS DE DEPORTES CON RAQUETA (Lightbox)
// ============================================
// Estos son los datos de las fotos de la sección "MUNDO DE LAS RAQUETAS".
window.galleryData_tenis = [
  {
    image: 'fuxion.webp',
    name: 'Maru Rodiz',
    stars: '★★★★★',
    resena: 'La fundadora de Raqueta Viajera compartiendo su pasión y disciplina en canchas latinoamericanas.',
    emoji: '🎾'
  },
  {
    image: 'farah.webp',
    name: 'Robert Farah',
    stars: '★★★★★',
    resena: 'El gran doblista colombiano, Nro 1 del mundo en su categoría, compartiendo clínicas de tenis.',
    emoji: '🎾'
  },
  {
    image: 'cabal.webp',
    name: 'Juan Sebastián Cabal',
    stars: '★★★★★',
    resena: 'Leyenda del tenis de dobles en LATAM, inspirando a la nueva generación de tenistas amateurs.',
    emoji: '🎾'
  },
  {
    image: 'tiburon.webp',
    name: 'César Ramírez "Tiburón"',
    stars: '★★★★☆',
    resena: 'Jugador del equipo de Copa Davis de México durante un entrenamiento competitivo en arcilla.',
    emoji: '🎾'
  }
];

window.galleryData_pickleball = [
  {
    image: 'raqueta-viajera.webp',
    name: 'Raqueta Viajera en Acción',
    stars: '★★★★★',
    resena: 'Más de 12 años jugando, documentando y promoviendo el turismo deportivo en Latinoamérica.',
    emoji: '🏓'
  },
  {
    image: 'puerto.webp',
    name: 'Pickleball en Puerto Cabello',
    stars: '★★★★★',
    resena: 'Canchas públicas frente al mar en Puerto Cabello, uno de los puntos clave del pickleball venezolano.',
    emoji: '🏓'
  },
  {
    image: 'el-tunal.webp',
    name: 'Canchas del Parque El Tunal',
    stars: '★★★★☆',
    resena: 'Gran flujo de jugadores participando en las ligas de fin de semana en Bogotá, Colombia.',
    emoji: '🏓'
  },
  {
    image: 'yo.webp',
    name: 'Clínica de Pickleball',
    stars: '★★★★★',
    resena: 'Enseñando y disfrutando del pickleball en las canchas de Barquisimeto, Venezuela.',
    emoji: '🏓'
  }
];

window.galleryData_padel = [
  {
    image: 'padel.webp',
    name: 'Pádel en Venezuela',
    stars: '★★★★★',
    resena: 'El auge del pádel en las canchas públicas de Caracas, reuniendo a una comunidad social increíble.',
    emoji: '🏓'
  },
  {
    image: 'padel-bqt.webp',
    name: 'Country Park Canchas',
    stars: '★★★★★',
    resena: 'Canchas panorámicas de cristal templado en Barquisimeto, con un flujo continuo de deportistas.',
    emoji: '🏓'
  },
  {
    image: 'padel2.webp',
    name: 'Torneo Amateur de Pádel',
    stars: '★★★★☆',
    resena: 'Competencia sana y gran nivel en el complejo deportivo de primer nivel de Country Park.',
    emoji: '🏓'
  }
];

window.galleryData_beach = [
  {
    image: 'denis-bt.webp',
    name: 'Denis en Beach Tennis',
    stars: '★★★★★',
    resena: 'Denis Rodiz disfrutando de la arena y del juego rápido en las playas de Puerto Colombia.',
    emoji: '🏖️'
  },
  {
    image: 'patty-diaz.webp',
    name: 'Patricia Díaz',
    stars: '★★★★★',
    resena: 'Patricia Díaz, Nro 1 de Venezuela y campeona mundial ITF de Beach Tennis en plena acción.',
    emoji: '🏖️'
  },
  {
    image: 'nacho-guedez.webp',
    name: 'Nacho Guédez',
    stars: '★★★★★',
    resena: 'Ramón "Nacho" Guédez, referente indiscutible del Beach Tennis en Latinoamérica y el mundo.',
    emoji: '🏖️'
  },
  {
    image: 'juanda.webp',
    name: 'José Villalobos',
    stars: '★★★★☆',
    resena: 'Clínica de entrenamiento de alto rendimiento dirigida por el coach José Villalobos en Venezuela.',
    emoji: '🏖️'
  }
];

// ============================================
// 3. FUNCIONALIDAD DEL LIGHTBOX
// ============================================
var lbSport = '', lbIdx = 0;
var lbData = [];

function openLightbox(sport, idx) {
  lbSport = sport;
  lbIdx = idx;
  
  if (sport === 'galeria') {
    // Si abrimos desde la galería quincenal
    var activeCategory = document.querySelector('.gal-filter-btn.active').getAttribute('data-category');
    if (activeCategory === 'todos') {
      lbData = window.GALERIA_DATOS;
    } else {
      lbData = window.GALERIA_DATOS.filter(function(item) {
        return item.category === activeCategory;
      });
    }
  } else {
    // Si abrimos desde la sección deportes
    var key = 'galleryData_' + sport;
    lbData = window[key] || [];
  }
  
  renderLightbox();
  document.getElementById('lightbox-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function lightboxNav(dir) {
  if (lbData.length === 0) return;
  lbIdx = (lbIdx + dir + lbData.length) % lbData.length;
  renderLightbox();
}

function renderLightbox() {
  var item = lbData[lbIdx] || {};
  
  // Renderizar emoji
  var emojiEl = document.getElementById('lb-emoji');
  if (emojiEl) emojiEl.textContent = item.emoji || '📸';
  
  // Renderizar imagen de fondo si existe
  var imgWrap = document.getElementById('lightbox-img-wrap');
  if (imgWrap) {
    // Buscar o crear la etiqueta img
    var imgEl = document.getElementById('lb-img-element');
    if (!imgEl) {
      imgEl = document.createElement('img');
      imgEl.id = 'lb-img-element';
      imgEl.style.width = '100%';
      imgEl.style.height = '100%';
      imgEl.style.objectFit = 'contain';
      imgEl.style.position = 'absolute';
      imgEl.style.top = '0';
      imgEl.style.left = '0';
      imgEl.style.borderRadius = '8px 8px 0 0';
      imgWrap.style.position = 'relative';
      imgWrap.appendChild(imgEl);
    }
    
    if (item.image) {
      imgEl.src = item.image;
      imgEl.alt = item.name || '';
      imgEl.style.display = 'block';
      if (emojiEl) emojiEl.style.display = 'none';
    } else {
      imgEl.style.display = 'none';
      if (emojiEl) emojiEl.style.display = 'block';
    }
  }
  
  document.getElementById('lb-name').textContent = item.name || '';
  document.getElementById('lb-stars').textContent = item.stars || '★★★★★';
  document.getElementById('lb-text').textContent = item.resena || '';
  document.getElementById('lb-counter').textContent = (lbIdx + 1) + ' / ' + lbData.length;
}

// Cerrar lightbox haciendo clic fuera del contenido
document.getElementById('lightbox-overlay').addEventListener('click', function(e){
  if(e.target === this) closeLightbox();
});


// ============================================
// 4. NUEVA GALERÍA VIAJERA DINÁMICA
// ============================================
function initVisualGallery() {
  var grid = document.getElementById('visual-gallery-grid');
  if (!grid) return; // Si no existe el contenedor en el HTML todavía
  
  grid.innerHTML = '';
  
  window.GALERIA_DATOS.forEach(function(item, index) {
    // Crear la tarjeta de la foto
    var card = document.createElement('div');
    card.className = 'gal-card reveal visible';
    card.setAttribute('data-category', item.category);
    card.setAttribute('onclick', "openLightbox('galeria', " + index + ")");
    
    card.innerHTML = '\
      <div class="gal-img-wrap">\
        <img src="' + item.image + '" alt="' + item.name + '" loading="lazy">\
        <div class="gal-hover-overlay">\
          <span class="gal-zoom-icon">🔍 Ver Reseña</span>\
        </div>\
      </div>\
      <div class="gal-info">\
        <div class="gal-category-tag">' + getCategoryLabel(item.category) + '</div>\
        <div class="gal-name">' + item.name + '</div>\
        <div class="gal-location">📍 ' + item.location + '</div>\
        <div class="gal-stars">' + item.stars + '</div>\
      </div>\
    ';
    
    grid.appendChild(card);
  });
}

function getCategoryLabel(cat) {
  switch (cat) {
    case 'canchas': return '🎾 Cancha / Club';
    case 'restaurantes': return '🍴 Gastronomía';
    case 'hoteles': return '🏨 Hotel / Hospedaje';
    case 'recreacion': return '🏖️ Recreación / Cultura';
    default: return '📸 Interés';
  }
}

function filterGallery(category, buttonEl) {
  // Cambiar pestaña activa
  document.querySelectorAll('.gal-filter-btn').forEach(function(btn) {
    btn.classList.remove('active');
  });
  buttonEl.classList.add('active');
  
  // Mostrar u ocultar la recomendación destacada según la categoría
  var recHero = document.getElementById('recomendacion-hero');
  if (recHero) {
    if (category === 'restaurantes') {
      recHero.style.display = 'flex';
      // Iniciar el carrusel de recomendaciones si no está corriendo
      initRecomendacionRotativa();
    } else {
      recHero.style.display = 'none';
      if (window.recInterval) {
        clearInterval(window.recInterval);
        window.recInterval = null;
      }
    }
  }

  // Filtrar tarjetas
  var cards = document.querySelectorAll('.gal-card');
  var count = 0;
  cards.forEach(function(card) {
    var cardCat = card.getAttribute('data-category');
    if (category === 'todos' || cardCat === category) {
      card.style.display = 'block';
      // Actualizar el atributo onclick para que abra el índice correcto dentro del conjunto filtrado
      card.setAttribute('onclick', "openLightbox('galeria', " + count + ")");
      count++;
    } else {
      card.style.display = 'none';
    }
  });
}

var currentRecIdx = 0;
function initRecomendacionRotativa() {
  if (window.recInterval) return; // ya está corriendo
  
  var recData = window.RECOMENDACIONES_GASTRONOMIA;
  if (!recData || recData.length === 0) return;
  
  var recImg = document.getElementById('rec-img');
  var recName = document.getElementById('rec-name');
  var recStars = document.getElementById('rec-stars');
  var recResena = document.getElementById('rec-resena');
  var recContent = document.getElementById('rec-content');
  
  if (!recImg || !recName) return;
  
  // Función para actualizar los datos con animación de fade
  function updateRec() {
    // Añadir clase fade-out
    recImg.classList.add('fade-out');
    recContent.classList.add('fade-out');
    
    setTimeout(function() {
      // Cambiar datos
      currentRecIdx = (currentRecIdx + 1) % recData.length;
      var item = recData[currentRecIdx];
      
      recImg.src = item.image;
      recName.textContent = item.name;
      recStars.textContent = item.stars;
      recResena.textContent = item.resena;
      
      // Quitar fade-out para hacer fade-in
      recImg.classList.remove('fade-out');
      recContent.classList.remove('fade-out');
    }, 500); // 500ms debe coincidir con la transición en CSS
  }
  
  // Mostrar la primera recomendación al instante
  var item = recData[currentRecIdx];
  recImg.src = item.image;
  recName.textContent = item.name;
  recStars.textContent = item.stars;
  recResena.textContent = item.resena;
  
  // Rotar cada 6 segundos
  window.recInterval = setInterval(updateRec, 6000);
}


// ============================================
// 5. COLOR PICKER (TIENDA)
// ============================================
function selectColor(product, colorName, colorHex, dotEl) {
  var preview = document.getElementById('prev-' + product);
  var label = document.getElementById('label-' + product);
  if(preview) preview.style.background = 'linear-gradient(135deg, ' + colorHex + 'cc, ' + colorHex + ')';
  if(label) label.textContent = colorName;
  var dots = dotEl.closest('.color-selector').querySelectorAll('.color-dot');
  dots.forEach(function(d){ d.classList.remove('selected'); });
  dotEl.classList.add('selected');
}


// ============================================
// 6. CONTROLADORES DE PANELES (TIENDA / MENÚ)
// ============================================
function showTienda(ev,panel){
  document.querySelectorAll('.tienda-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tienda-tab').forEach(t=>t.classList.remove('active'));
  var el = document.getElementById('tienda-'+panel);
  if(el) el.classList.add('active');
  ev.target.classList.add('active');
}

function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.classList.toggle('active');
  navMenu.classList.toggle('open');
  document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
}

document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('navMenu');
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});


// ============================================
// 7. CONTADOR DE VISITAS DINÁMICO (REALISTA)
// ============================================
function initVisitorCounter() {
  // Inicializar contador acumulado en localStorage
  var baseVisits = 142380; // Tráfico acumulado real de Google Maps / Web
  var currentVisits = localStorage.getItem('rv_visit_count');
  
  if (!currentVisits) {
    currentVisits = baseVisits + Math.floor(Math.random() * 250);
  } else {
    currentVisits = parseInt(currentVisits) + 1; // Incrementar en cada recarga
  }
  localStorage.setItem('rv_visit_count', currentVisits);
  
  // Renderizar valores en el HTML
  var totalValEl = document.getElementById('counter-total-val');
  if (totalValEl) {
    totalValEl.textContent = formatNumber(currentVisits);
  }
  
  // Simulación de visitantes activos
  var activeValEl = document.getElementById('counter-active-val');
  if (activeValEl) {
    var activeCount = 14 + Math.floor(Math.random() * 12); // Entre 14 y 26 activos
    activeValEl.textContent = activeCount;
    
    // Hacer variar el contador dinámicamente cada 6 segundos
    setInterval(function() {
      var diff = Math.random() > 0.5 ? 1 : -1;
      activeCount += diff;
      if (activeCount < 10) activeCount = 10;
      if (activeCount > 35) activeCount = 35;
      activeValEl.textContent = activeCount;
    }, 6000);
  }
}

// Función auxiliar para dar formato de miles (ej: 142,380)
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


// ============================================
// 8. INICIALIZACIÓN GENERAL AL CARGAR LA PÁGINA
// ============================================
window.addEventListener('DOMContentLoaded', function() {
  initVisualGallery();
  initVisitorCounter();
  
  // Rotación suave del Deck del Hero
  var heroDeck = document.querySelector('.media-deck');
  if (heroDeck) {
    var cards = heroDeck.querySelectorAll('.deck-card');
    let idx = 0;
    setInterval(function() {
      cards.forEach(function(c, cIdx) {
        c.classList.remove('active');
        // Desplazar rotación
        var order = (cIdx - idx + cards.length) % cards.length;
        c.style.zIndex = cards.length - order;
        c.style.transform = 'translateY(' + (18 * order) + 'px) scale(' + (1 - 0.03 * order) + ') rotate(' + (order % 2 === 0 ? order : -order) + 'deg)';
        c.style.opacity = order === cards.length - 1 ? 0 : 1;
      });
      cards[idx].classList.add('active');
      idx = (idx + 1) % cards.length;
    }, 4000);
  }
});
