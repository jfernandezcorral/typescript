var t = 7;
var Colors;
(function (Colors) {
    Colors[Colors["Rojo"] = 0] = "Rojo";
    Colors[Colors["Verde"] = 1] = "Verde";
    Colors[Colors["Azul"] = 2] = "Azul";
    Colors[Colors["Gris"] = 3] = "Gris";
    Colors[Colors["Amarillo"] = 4] = "Amarillo";
})(Colors || (Colors = {}));
;
var f;
f = function (s) {
    return s + s;
};
console.log(f('adios'));
var Character = (function () {
    function Character(f, l) {
        this.fullname = f + l;
    }
    Character.prototype.greet = function (name) {
        return name + this.fullname;
    };
    return Character;
}());
function add(foo, bar, x) {
    if (x === void 0) { x = 0; }
    return foo + bar + x;
}
var v = add(7, 4);
console.log(v);
function add2() {
    var foo = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        foo[_i - 0] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}
console.log(add2(37, 24, 5));
function test(value) {
    switch (typeof value) {
        case "string":
            return "My\tname\tis\t" + value + ".";
        case "number":
            return "I'm\t" + value + "\tyears\told.";
        case "boolean":
            return value ? "I'm	single." : "I'm	not	single.";
        default:
            console.log("Invalid	Operation!");
    }
}
test(45);
function hola(v) {
    console.log('hola');
}
var a = window;
var pp;
