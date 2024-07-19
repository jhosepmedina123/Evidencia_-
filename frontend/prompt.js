const productName = new String('Lenovo V4');
console.log({productName})

const productPrice = 23.9;
const productPriceStr = "23"
console.log(typeof(productPrice));
console.log(typeof(productPriceStr));
//product object
//literal object
const product1 = {
    name: 'Lenovo ThinkPad',
    color: 'Gray',
    model: 'IU643',
    description: 'Laptop ordinary',
    price: 1250000
}
//acceder a las propiedades 
console.log(product1)
console.log(product1['name'])
console.log(product1.model)

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