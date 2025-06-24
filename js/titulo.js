function establecerTituloPagina(nuevoTitulo) {
    document.title = nuevoTitulo;
}
establecerTituloPagina("Dinamita SQL");
function establecerFavicon(urlIcono) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.type = 'image/png';
    link.href = urlIcono;
}

window.onload = function () {
    establecerFavicon('images/sqllogo.png');
};



