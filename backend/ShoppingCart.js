const carrito = [
    {
        nombre: "lenovo thinkPad",
        descripcion: "laptop para oficina",
        tipoProducto: "computador portatil",
        modelo: "VG6",
        precio: {
            minimoVenta: 3000000,
            compra: 1000000
        },
        caracteristicas: {
            dimensiones: {
                alto: "2cm",
                ancho: "50 cm",
                largo: "30 cm"
            },
            fabricacion: {
                pais: "Taiwan",
                fecha: new Date(`2017-05-02`)
            }
        },
        ObtenerPrecioCompra: function (){
            return this.precio.compra;
        }
    },
    {
        nombre: "Apple iPhone",
        descripcion: "teléfono inteligente",
        tipoProducto: "celular",
        modelo: "13 Pro Max",
        precio: {
            minimoVenta: 4500000,
            compra: 2500000
        },
        caracteristicas: {
            dimensiones: {
                alto: "0.7cm",
                ancho: "7.8cm",
                largo: "16cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date(`2021-09-24`)
            }
        },
        ObtenerPrecioCompra: function (){
            return this.precio.compra;
        }
    },   
    {
        nombre: "Samsung Galaxy Tab",
        descripcion: "tableta para entretenimiento",
        tipoProducto: "tablet",
        modelo: "S7",
        precio: {
            minimoVenta: 3000000,
            compra: 1800000
        },
        caracteristicas: {
            dimensiones: {
                alto: "0.6cm",
                ancho: "25.3cm",
                largo: "16.5cm"
            },
            fabricacion: {
                pais: "Corea del Sur",
                fecha: new Date(`2020-08-05`)
            }
        },
        ObtenerPrecioCompra: function (){
            return this.precio.compra;
        }
    },   
    {
        nombre: "Sony WH-1000XM4",
        descripcion: "audífonos inalámbricos con cancelación de ruido",
        tipoProducto: "audifonos",
        modelo: "WH-1000XM4",
        precio: {
            minimoVenta: 1200000,
            compra: 700000
        },
        caracteristicas: {
            dimensiones: {
                alto: "20cm",
                ancho: "18cm",
                largo: "8cm"
            },
            fabricacion: {
                pais: "Malasia",
                fecha: new Date(`2020-08-06`)
            }
        },
        ObtenerPrecioCompra: function (){
            return this.precio.compra;
        }
    },   
    {
        nombre: "Amazon Kindle",
        descripcion: "lector de libros electrónicos",
        tipoProducto: "tablet",
        modelo: "Paperwhite",
        precio: {
            minimoVenta: 1000,
            compra: 1500
        },
        caracteristicas: {
            dimensiones: {
                alto: "240cm",
                ancho: "11.5cm",
                largo: "16.7cm"
            },
            fabricacion: {
                pais: "China",
                fecha: new Date(`2019-10-07`)
            }
        },
        ObtenerPrecioCompra: function (){
            return this.precio.compra;
        }
    }
];



/*ejecutar el metodo: obetnerpreciocompra
console.log(carrito[0].precio.compra)
console.log(carrito[1].precio.compra)
console.log(carrito[2].precio.compra)
console.log(carrito[3].precio.compra)
console.log(carrito[4].precio.compra) */

/*imprimir:
    NOMBRE DEL PRODUCTO  ETC 
    console.log(carrito.nombre)
    console.log(carrito.tipoProducto)
    console.log(carrito.modelo)*/ 

/*RECORRER EL CARRITO DE COMPRAS 
    metodo foreach*/
    //for each no retorna a un nuevo arreglo
/*
carrito.forEach(producto=>{
    if(producto.nombre)
    console.log(producto.nombre)
})

carrito.forEach(producto=>{
    if(producto.tipoProducto)
    console.log(producto.tipoProducto)
})

carrito.forEach(producto=>{
    if(producto.modelo)
    console.log(producto.modelo)
})

carrito.forEach(producto=>{
    if(producto.caracteristicas.dimensiones.largo)
    console.log(producto.caracteristicas.dimensiones.largo)
})


carrito.forEach(producto=>{
    if(producto.caracteristicas.fabricacion.pais)
    console.log(producto.caracteristicas.fabricacion.pais)
})*/

for (const producto of carrito) {
    const { nombre, tipoProducto, modelo, caracteristicas: { dimensiones: { largo }, fabricacion: { pais } } } = producto;
    console.log(`Nombre: ${nombre}), 
                 Tipo de Producto: ${tipoProducto},
                 Modelo: ${modelo},
                 Dimensión Largo: ${largo},
                 País de Fabricación: ${pais}`);
    }

/* metodo de transformacion map */
let preciosCompra = carrito.map((producto) =>{
    return producto.precio.compra
})

/*filter : recorre el arreglo buscando elementos que
concuerden con la condicional establecida
en el el filtro creando un nuevo arrelgo con los
objetos que cumplen dicho criterio */


Productos = carrito.filter((producto) => {
    return producto.nombre
})

//calculo del total del inventario
let total = 0
carrito.forEach(producto =>{
    //acumular valor de compra de cada 
    //producto recorrido en la variable
    //total
    total += producto.precio.compra
})

/*utilizando el method reduce: reduce a un solo
valor el arrelgo, con base en una expresion */
let inventario = carrito.reduce((total, producto)=>{
    return total + producto.precio.compra 
},0 )

//console.log(ProductosChina)

/*console.log(preciosCompra)
console.log(`El valor del stock es:  ${total}`)*/


// Consultar los productos que vengan de China
const productosDeChina = carrito.filter(producto => producto.caracteristicas.fabricacion.pais === "China");
productosDeChina.forEach(producto => {
    console.log(`.......................................`)
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Tipo de Producto: ${producto.tipoProducto}`);
    console.log(`Modelo: ${producto.modelo}`);
    console.log(`Dimensiones (largo): ${producto.caracteristicas.dimensiones.largo}`);
    console.log(`País de Fabricación: ${producto.caracteristicas.fabricacion.pais}`);
    console.log(`.......................................`)
});


//productos de mas de 2 metros
const productosAltos = carrito.filter(producto => producto.caracteristicas.dimensiones.alto > 201);
console.log("Productos con más de dos metros de alto:");
productosAltos.forEach(producto => {
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Dimensiones (alto): ${producto.caracteristicas.dimensiones.alto}`);
    console.log(`.......................................`)
});

//productos que tienen un precio minimo a COP 10000
const productosBaratos = carrito.filter(producto => producto.precio.minimoVenta < 10000);
console.log("Productos con precio mínimo de venta inferior a COP 10000:");
productosBaratos.forEach(producto => {
    console.log(`.......................................`)
    console.log(`Nombre: ${producto.nombre}`);
    console.log(`Precio Mínimo de Venta: ${producto.precio.minimoVenta}`);
    console.log(`.......................................`)
});

console.log(`el valor del inventario es : ${inventario}`)
