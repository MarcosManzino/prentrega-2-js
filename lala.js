
class cliente {
    constructor(id, nombre, precio, demora, profecional) {
        this.id  =(id);
        this.nombre  = nombre.toUpperCase();
        this.precio  =(precio);
        this.demora  =(demora);
        this.profecional  =(profecional);
    }
    

}
const clientesPepe = [];
const clientesJuan = [];

for (let i= 0; i <= 4; i++) {
  numero = prompt("elegir profecional escribiendo 1 o 2 dependiendo su eleccion \n1. Pepe\n2. Juan")
    if (numero == 1) {
        alert("usted eligio a Pepe")
        
        clientesPepe.push(new cliente(i+1, prompt("ingrese su nombre"), "$1000", 30*i+"m","Pepe"));

    } else if(numero == 2){
        alert("usted eligio a Juan")
        
        clientesJuan.push(new cliente(i+1, prompt("ingrese su nombre"), "$1000", 30*i+"m","Juan"));
    }
    else{
      alert("usten no eligio a nadie \nintente de nuevo")
      i--
    }
}
console.log("clientes de Juan \n--------------------------------------------------------------------------------------------------------------")
 for (const cliente of clientesJuan) {
     console.log(cliente.demora);
     console.log(cliente);
}
console.log("clientes de Pepe \n--------------------------------------------------------------------------------------------------------------")
for (const cliente of clientesPepe) {
    console.log(cliente.demora);
    console.log(cliente);
}