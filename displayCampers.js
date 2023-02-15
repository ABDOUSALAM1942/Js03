const codeloccol = {
    name: 'Coder',
    legs: ' 4,',
    tails: ' 1,',
    friends: "'Codeloccol Campers'",

    newCodeLoccol: function () {
        return this.friends;
    }
}
codeloccol.name = " 'Happy Coder',";

console.log(codeloccol.newCodeLoccol());
