let personne = {
    nom: " Mariam ",
    Age: ' 30',

    identite: function () {
        return 'nom:' + this.nom +
            '\nAge:' + this.Age;
    }

}
console.log(personne.identite());
