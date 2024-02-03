let T = [17, 38, 10, 25, 72];

// Trier et afficher le tableau
T.sort((a, b) => a - b);
console.log("Tableau trié :", T);

// Ajouter l'élément 12 et afficher le tableau
T.push(12);
console.log("Tableau avec ajout de 12 :", T);

// Renverser et afficher le tableau
T.reverse();
console.log("Tableau renversé :", T);

// Afficher l'indice de l'élément 17
console.log("Indice de l'élément 17 :", T.indexOf(17));

// Enlever l'élément 38 et afficher le tableau
T.splice(T.indexOf(38), 1);
console.log("Tableau sans l'élément 38 :", T);

// Afficher le sous-tableau du 2e au 3e élément
console.log("Sous-tableau du 2e au 3e élément :", T.slice(1, 3));

// Afficher le sous-tableau du début au 2e élément
console.log("Sous-tableau du début au 2e élément :", T.slice(0, 2));

// Afficher le sous-tableau du 3e élément à la fin de la liste
console.log("Sous-tableau du 3e élément à la fin :", T.slice(2));
