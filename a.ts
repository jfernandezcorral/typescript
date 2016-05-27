var t: number = 7;
enum Colors {Rojo, Verde, Azul, Gris};
var f: (s: string) => string;
f = function(s: string):string{
	return s + s;
}
console.log(f('adios'));
class Character{
	fullname: string;
	constructor(f: string, l: string){
		this.fullname = f + l;
	}
	greet(name: string){
		return name + this.fullname;
	}
}

function add(foo: number, bar: number, x: number = 0): number{
	return foo + bar + x;
}

var v = add(7, 4);
console.log(v);
function add2(...foo: number[]): number{
    var result = 0;
    for (var i = 0; i < foo.length; i++) {
        result += foo[i];
    }
    return result;
}
console.log(add2(37, 24, 5));
function test(name: string): string;				//	overloaded	signature
function test(age: number): string;					//	overloaded	signature
function test(single: boolean): string;	//	overloaded	signature
function test(value: (string | number | boolean))	:	string	{	//implementation	signature
		switch(typeof value){
			case	"string":
				return	`My	name	is	${value}.`;
			case	"number":
				return	`I'm	${value}	years	old.`;	
			case	"boolean":
				return	value	?	"I'm	single.":	"I'm	not	single.";	
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
