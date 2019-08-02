// Create car
function createCar(brand, model){

    brand = brand.toUpperCase();

    function details(price){
        console.log({
            brand : brand,
            model : model,
            price : price
        });
    }

    return details;
}

let car1 = createCar("Peugeot", "208");
let car2 = createCar("VW", "Golf");
let car3 = createCar("Ferrari", "F40")(5000000);

car1(1000);
car2(2000);



