    console.log('Shopping car');
//Template String:
//Concatenation alternative
//Create product name
const productName = String('Lenovo V4');
console.log(`Nombre del producto: ${productName}`)

const productPrice = 23;
const productPriceStr = "23"
console.log(typeof(productPrice));
console.log(typeof(productPriceStr));
console.log(productPrice !== productPriceStr);

//product object
//literal object
const product1 = {
    name: 'Lenovo ThinkPad',
    color: 'Gray',
    model: 'IU643',
    description: 'Laptop ordinary',
    price: 1250000,

    getModel: function(){
        console.log(this.model)
    }
}


//acceder a las propiedades 
console.log(product1.price)
console.log(typeof(product1.price))
product1.getModel();

//sin desestructuracion
const nombrecito = product1.name;
console.log(nombrecito);

//con desestruturacion
const {name, description, price} = product1;
console.log({name, description, price});

//object constructor
const product = function(name1, color1, price1){
    this.name1 = name1
    this.color1 = color1
    this.price1 = price1
}

//crear dos instancias de producto
const p1 = new product('MacBook Pro', 'Space Gray', 6990000)
const {name1, color1, price1} = p1;
console.log({name1, color1,price1})


//operador spread
const medidas = {
    'peso' : '50Kg',
    'altura' : '1m',
    'largo': '50cm'
}
const nuevo = {...product1, ...medidas}
console.log(nuevo)