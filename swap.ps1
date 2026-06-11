$content = Get-Content "index.html" -Raw -Encoding UTF8

# Extraer el bloque de "Todos" (quitando active)
$todosRegex = '(?s)(<!-- "Todos".*?)<button class="gal-filter-btn active"(.*?</button>)'
$content = $content -replace $todosRegex, '$1<button class="gal-filter-btn"$2'

# Extraer el bloque de "Gastronomía" completo (y añadir active)
$gastroRegex = '(?s)(\s*<!-- "Gastronomia".*?)<button class="gal-filter-btn"(\s+data-category="restaurantes".*?</button>)'

# Necesitamos atrapar el bloque de gastronomia y moverlo arriba de Todos
# Mejor busquemos el bloque completo de tabs
$tabsRegex = '(?s)(<div class="gal-filter-tabs reveal">)(.*?)(\s*<!-- "Gastronomia".*?<button class="gal-filter-btn"\s+data-category="restaurantes".*?</button>)(.*?</div>)'

# $1 = <div...>
# $2 = lo que hay antes de gastronomía (incluyendo Todos)
# $3 = el bloque de gastronomía
# $4 = lo que hay después de gastronomía hasta el </div>

$content = $content -replace $tabsRegex, '$1$3$2$4'

# Ahora, la etiqueta Gastronomía está arriba. Vamos a quitarle el "active" a Todos y ponérselo a Gastronomía.
$content = $content.Replace('<button class="gal-filter-btn active"
              data-category="todos"', '<button class="gal-filter-btn"
              data-category="todos"')

$content = $content.Replace('<button class="gal-filter-btn"
              data-category="restaurantes"', '<button class="gal-filter-btn active"
              data-category="restaurantes"')

Set-Content "index.html" -Value $content -Encoding UTF8
Write-Host "Success index.html"
