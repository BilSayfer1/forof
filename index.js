let cars = [{
    model: "malibu",
    company: "gm",
    price: 32000,
    year: 2022,
    details: {
        color: "white",
        wheels: 3,
        hatch: true,
        beaten: false,
        mileAge: 10000,
    },
},
{
    model: "gentra",
    company: "gm",
    price: 20000,
    year: 2020,
    details: {
        color: "black",
        wheels: 4,
        hatch: true,
        beaten: false,
        mileAge: 1000,
    },
},
{
    model: "nexia 1.6",
    company: "gm",
    price: 8000,
    year: 2015,
    details: {
        color: "white",
        wheels: 4,
        hatch: false,
        beaten: true,
        mileAge: 70000,
    },
},
{
    model: "Mercedes CLS 6.3",
    company: "Mercedes-Benz",
    price: 50000,
    year: 2008,
    details: {
        color: "black",
        wheels: 4,
        hatch: true,
        beaten: false,
        mileAge: 100000,
    },
},
{
    model: "Mercedes Gelik 6 x 6",
    company: "Mercedes-Benz",
    price: 1250000,
    year: 2023,
    details: {
        color: "gold",
        wheels: 12,
        hatch: true,
        beaten: false,
        mileAge: 2000,
    },
},
{
    model: "Жигули 2107",
    company: "Lada",
    price: 4000,
    year: 2008,
    details: {
        color: "white",
        wheels: 4,
        hatch: false,
        beaten: true,
        mileAge: 700000,
    },
},
{
    model: "Cobalt",
    company: "gm",
    price: 15000,
    year: 2022,
    details: {
        color: "white",
        wheels: 4,
        hatch: false,
        beaten: false,
        mileAge: 64000,
    },
},
{
    model: "Tahoe",
    company: "gm",
    price: 50000,
    year: 2023,
    details: {
        color: "black",
        wheels: 4,
        hatch: true,
        beaten: false,
        mileAge: 400,
    },
},
]

let discount = prompt("Ассалому алейкум Далер ака как вы?, сколько процентов хотите сделать новогоднюю скидку для данных авто")


for (let car of cars) {
    let dscnt = car.price - ((car.price / 100) * discount)
    console.log("model:", car.model);
    console.log("price:", dscnt);
}