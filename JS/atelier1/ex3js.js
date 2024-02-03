let chaine1 = "abc";
let chaine2 = "de";
let resultats = [];

for (let char1 of chaine1) {
    for (let char2 of chaine2) {
        resultats.push(char1 + char2);
    }
}

console.log(resultats);
