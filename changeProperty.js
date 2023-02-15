const codeloccol = {
    name: ' Coder',
    legs: ' 4,',
    tails: ' 1,',
    friends: [" [ 'Codeloccol Campers' ]\n}"],

    newCodeLoccol: function () {
        return '{ \n  name:' + this.name +
            '\n  legs:' + this.legs +
            '\n  tails:' + this.tails +
            '\n  friends:' + this.friends;
    }
}
codeloccol.name = " 'Happy Coder',";
console.log(codeloccol.newCodeLoccol());
