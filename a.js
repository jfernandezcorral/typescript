var t = 7;
var Colors;
(function (Colors) {
    Colors[Colors["Rojo"] = 0] = "Rojo";
    Colors[Colors["Verde"] = 1] = "Verde";
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
