// 2do Desafio Cotizacion y venta de Equipos de Laboratorio

class Equipo {

    constructor(nombreEquipo, marca, anioModelo, cantidadEnsayos, id) {
        this.nombreEquipo = nombreEquipo;
        this.marca = marca;
        this.anioModelo = parseInt(anioModelo);
        this.cantidadEnsayos = parseInt(cantidadEnsayos);
        this.id = id;
    }
}

const equipos = [
    new Equipo('Termometro', 'Perkin', 2008, 20000, 1),
    new Equipo('Termometro', 'Fisher', 2012, 50000, 2),
    new Equipo('Titulador', 'Perkin', 2015, 100000, 3),
    new Equipo('Titulador', 'Fisher', 2012, 90000, 4),
    new Equipo('Fotometro', 'Perkin', 2019, 150000, 5),
    new Equipo('Fotometro', 'Fisher', 2017, 110000, 6),
]

alert("Bienvenido a Equilab"); 

let ingreso = prompt('Desea ingresar a cotizar nuestros equipos, Marque 1; \n En otro momento Marque 2.');
console.log(ingreso);

switch (ingreso) {
    case '1':
        let instrumento = prompt('¿Que instrumento Desea Cotizar?\n Termometro \n Titulador \n Fotometro');
        const filtrado= equipos.filter((equipo)=>equipo.nombreEquipo.toLowerCase().includes(instrumento.toLowerCase()))
        console.log(instrumento);
        console.log(filtrado);
        function resultado(array){
            let info = '';
            array.forEach(elemento=>{
            info += 'Equipo cotizado: ' + elemento.nombreEquipo + '\nMarca: ' + elemento.marca + '\nAño: ' + elemento.anioModelo + '\nOperación: ' + elemento.cantidadEnsayos + ' ensayos.\n\n'
            }) 
            return info;
        }
            alert(resultado(filtrado));
            console.log(resultado);
            alert('Gracias por prefererirnos su cotización ha sido enviada a su email')
        break;
    case'2':
        alert('Gracias por visitarnos, vuelva pronto');
        break;
    default:
        alert('No es un criterio válido');
        break;
    }

   

    
