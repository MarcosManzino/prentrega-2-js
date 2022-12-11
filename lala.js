/*
sistema de turnos para peliqueria  (ingresa con que profecional se atiende, en la consola muestra la lista de profecionales y el tiempo de espera entre corte y corte )
si desea probar el codigo de forma rapida poner 1 o 2 de forma entercalada en los pront y tocar enter para que se llenen los parametros rapido 
*/ 
class cliente {
    constructor(id, nombre, precio, demora, profecional) {
        this.id  =(id);
        this.nombre  = nombre.toUpperCase();
        this.precio  =(precio);
        this.demora  =(demora);
        this.profecional  =(profecional);
    }
    

}
let numJuan = 0
let numPepe = 0
const clientesPepe = [];
const clientesJuan = [];

for (let i= 0; i <= 9; i++) {
  numero = prompt("elegir profecional escribiendo 1 o 2 dependiendo su eleccion \n1. Pepe\n2. Juan")
    if (numero == 1) {
        alert("usted eligio a Pepe")
        
        clientesPepe.push(new cliente(1+numPepe, prompt("ingrese su nombre"), "$1000", 30*numPepe+"m","Pepe"));
        numPepe ++

    } else if(numero == 2){
        alert("usted eligio a Juan")
        
        clientesJuan.push(new cliente(1+numJuan, prompt("ingrese su nombre"), "$1000", 30*numJuan+"m","Juan"));
        numJuan ++
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