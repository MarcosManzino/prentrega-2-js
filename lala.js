class cliente {
    constructor(id, nombre, precio, demora, profesional) {
        this.id = (id);
        this.nombre = nombre.toUpperCase();
        this.precio = (precio);
        this.demora = (demora);
        this.profesional = (profesional);
    }


}
let numJuan = 0
let numPepe = 0
const clientesPepe = [];
const clientesJuan = [];
let z = ""
function tiempo(a) {
    if (a <= 0) {

        z = "Por favor pasar a la silla " 

    } else if (a >= 60) {

        return z = (a / 60).toFixed() + " " + "H" + " / " + (a % 60) + " " + "m"

    } else if (a < 60) {

        return z = a +" "+ "m"
    }
}

function pepe() {
    alert("usted eligio a Pepe")
    tiempo(30 * numPepe)
    clientesPepe.push(new cliente(1 + numPepe, prompt("ingrese su nombre"), "$1000", z, "Pepe"));
    numPepe++
}
function juan() {
    alert("usted eligio a Juan")
    tiempo(30 * numJuan)
    clientesJuan.push(new cliente(1 + numJuan, prompt("ingrese su nombre"), "$1000", z, "Juan"));
    numJuan++
}

for (let i = 0; i <= 1; i++) {
    a = prompt(".1 ingresar cliente \n.2 salir");
    if (a == 1) {
        for (let ii = 0; ii <= 1; ii++) {
            b = prompt("Elegir el profesional \n1. Pepe \n2. Juan")
            if (b == 1) {
                pepe()
                b = 0
                ii = 1
            } else if (b == 2) {
                juan()
                b = 0
                ii = 1
            } else {
                alert("no ingreso el profesional, intente nuevamente")
                ii--

            }
        }
        i--
    } else if (a == 2) {
        i = 1
    } else {
        i--
        alert("no eligio ninguna opcion ")
    }
}
console.log("clientes de Juan \n._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._.")
for (const cliente of clientesJuan) {
    console.log(cliente.nombre + " " + cliente.demora);

}
console.log("clientes de Pepe \n._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._.")
for (const cliente of clientesPepe) {
    console.log(cliente.nombre + " " + cliente.demora);
}
console.log("._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._.")
console.log("informacion de tosos los clientes segun profesional")
console.log("Juan \n._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._.")
for (const cliente of clientesJuan) { console.log(cliente); }
console.log("Pepe \n._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._._.")
for (const cliente of clientesPepe) { console.log(cliente); }