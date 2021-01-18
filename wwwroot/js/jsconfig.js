
var a = 0;
function poi(){
    a = a + 1;
    return 'this works' + a;
}

var b = {
    firstname: "Orange",
    lastname: "McGoat",
    fullname: function () {
        return this.firstname + this.lastname;
    }
}
