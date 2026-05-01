/* SPORT GALLERY */
function showSportGallery(ev, sport, panel) {
  var container = ev.target.closest('.raqueta-panel');
  container.querySelectorAll('.sport-gallery-panel').forEach(function(p){ p.classList.remove('active'); });
  container.querySelectorAll('.sport-gtab').forEach(function(t){ t.classList.remove('active'); });
  var el = document.getElementById('sgpanel-' + sport + '-' + panel);
  if(el) el.classList.add('active');
  ev.target.classList.add('active');
}
/* LIGHTBOX */
var lbSport = '', lbIdx = 0;
var lbData = {};

function openLightbox(sport, idx) {
  lbSport = sport;
  lbIdx = idx;
  var key = 'galleryData_' + sport;
  lbData = window[key] || [];
  renderLightbox();
  document.getElementById('lightbox-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
function lightboxNav(dir) {
  lbIdx = (lbIdx + dir + lbData.length) % lbData.length;
  renderLightbox();
}
function renderLightbox() {
  var item = lbData[lbIdx] || {};
  document.getElementById('lb-emoji').textContent = item.emoji || '📸';
  document.getElementById('lb-name').textContent = item.name || '';
  document.getElementById('lb-stars').textContent = item.stars || '★★★★★';
  document.getElementById('lb-text').textContent = item.resena || '';
  document.getElementById('lb-counter').textContent = (lbIdx + 1) + ' / ' + lbData.length;
}
document.getElementById('lightbox-overlay').addEventListener('click', function(e){
  if(e.target === this) closeLightbox();
});

/* COLOR PICKER */
function selectColor(product, colorName, colorHex, dotEl) {
  var preview = document.getElementById('prev-' + product);
  var label = document.getElementById('label-' + product);
  if(preview) preview.style.background = 'linear-gradient(135deg, ' + colorHex + 'cc, ' + colorHex + ')';
  if(label) label.textContent = colorName;
  var dots = dotEl.closest('.color-selector').querySelectorAll('.color-dot');
  dots.forEach(function(d){ d.classList.remove('selected'); });
  dotEl.classList.add('selected');
}

/* TIENDA */
function showTienda(ev,panel){
  document.querySelectorAll('.tienda-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.tienda-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tienda-'+panel).classList.add('active');
  ev.target.classList.add('active');
}
