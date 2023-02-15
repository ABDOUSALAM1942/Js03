let book = {
    titre: " L'Enfant Noir ",
    auteur: " Camara Laye",
    annee: ' 1953',

    livre: function () {
        return 'Titre:' + this.titre +
            '\nAuteur:' + this.auteur +
            '\nannée:' + this.annee;
    }

}
console.log(book.livre());