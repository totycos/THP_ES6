const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

// liste des titres des livres du CDI
const titleArray = books.map(book => { 
    return {title: book.title};
});
console.log(titleArray);


//Est-ce que tous les livres ont été empruntés au moins une fois?
console.log(books.every(book => book.rented > 1))


// Quel est le livre le plus emprunté?
console.log(books.sort((a, b) => b.rented - a.rented)[0].title)


// Quel est le livre le moins emprunté?
console.log(books.sort((a, b) => a.rented - b.rented)[0].title)


// Supprime le livre avec l'ID 133712
console.log(books.filter(book => book.id !== 133712))