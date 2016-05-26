var t: number = 7;
enum Colors {Rojo, Verde};
var f: (s: string) => string;
f = function(s: string):string{
	return s + s;
}
console.log(f('hola'));
class Character{
	fullname: string;
	constructor(f: string, l: string){
		this.fullname = f + l;
	}
	greet(name: string){
		return name + this.fullname;
	}
}

