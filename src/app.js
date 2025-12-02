function suma(a, b) {
    return a + b;
}

function agregarItem(texto) {
    const lista = document.getElementById('lista');
    const nuevoItem = document.createElement('li');
    nuevoItem.textContent = texto;
    lista.appendChild(nuevoItem);
}

console.log("App lista")