!
function sommeDiviseurs(nombre) {
    let somme = 0;
    for (let i = 1; i <= nombre / 2; i++) {
        if (nombre % i === 0) {
            somme += i;
        }
    }
    return somme;
}

function Nombres_parfait(n) {
    for (let i = 2; i < n; i++) {
        if (sommeDiviseurs(i) === i) {
            console.log(i);
        }
    }
}


Nombres_parfait(30);
