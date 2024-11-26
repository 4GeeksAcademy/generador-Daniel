
const excusas = [
    "Hoy no va a funcionar.",
    "Tendras que seguir intentando.",
    "Que esto no va a cambiar.",
    "Seguiremos todo el tiempo asi.",
    "Si podia te cortaba el internet.",
    "No te cansas de recargar la pagina?.",
    "A esta altura ya te perdi el respeto."
]

function nuevaExcusa() {
    const indiceAleatorio = Math.floor(Math.random() * excusas.length);
    document.getElementById("excusa").textContent = excusas[indiceAleatorio];
}


window.onload = nuevaExcusa;
