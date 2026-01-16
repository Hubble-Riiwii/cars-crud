import Car from "../../../backend/models/car.js";
import API from "../../../backend/api/api.js";

const db = new API(); //API

const getAllCars = ()=>{
    return Car.getAllCars(db)
}
const createCar = ()=>{
    const inputNameCar = document.getElementById("inputNameCar");
    const inputTypeCar = document.getElementById("inputTypeCar");
    const inputImageCar = document.getElementById("inputImageCar");
    const inputPriceCar = document.getElementById("inputPriceCar");
    const inputDiscountCar = document.getElementById("inputDiscountCar");
    const inputLiterCapacityCar = document.getElementById("inputLiterCapacityCar");
    const inputIsManual = document.getElementById("inputIsManual");
    const inputPeopleCapacityCar= document.getElementById("inputPeopleCapacityCar");
    let checks = (()=>{
        //Checks for validation of values, if not, get the element with the error and inform the user.
        return true
    })()
    if (checks){
        const car = db.CreateCar(inputNameCar.value, inputTypeCar.value, inputPriceCar.value, inputPeopleCapacityCar.value, inputIsManual.checked, inputLiterCapacityCar.value, inputImageCar.value, inputDiscountCar.value);
        
    }
}
const createCarBtn = document.getElementById("create-car-btn");