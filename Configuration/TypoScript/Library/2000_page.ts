# Default page object:
page = PAGE

page.10 = FLUIDTEMPLATE
page.10 {
  partialRootPath = {$resDir}/Private/Partials
	layoutRootPath = {$resDir}/Private/Layouts
  file = {$resDir}/Private/Templates/DefaultTemplate.html
}

## CSS Dateien Laden
page.includeCSS {
  bootstrap = {$resDir}/Public/Css/main.css
}

## Javascript laden
page.includeJSlibs {
  bootstrap = {$resDir}/Public/Javascript/bootstrap.min.js
}