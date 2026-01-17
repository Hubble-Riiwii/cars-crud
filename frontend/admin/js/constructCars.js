import Car from "../../../backend/models/car.js";
import API from "../../../backend/api/api.js";
import Alert from "../../../backend/models/alerts.js";
import { debounce } from "../../../backend/models/functions.js";
const db = new API(); //API
const inputNameCar = document.getElementById("inputNameCar");
const inputTypeCar = document.getElementById("inputTypeCar");
const inputImageCar = document.getElementById("inputImageCar");
const inputPriceCar = document.getElementById("inputPriceCar");
const inputDiscountCar = document.getElementById("inputDiscountCar");
const inputLiterCapacityCar = document.getElementById("inputLiterCapacityCar");
const inputIsManual = document.getElementById("inputIsManual");
const inputPeopleCapacityCar= document.getElementById("inputPeopleCapacityCar");
let check = false;
const createCarBtn = document.getElementById("create-car-btn");
const getAllCars = ()=>{
    return Car.getAllCars(db)
}
const verifyContent = (event)=>{
    check = true;
    let RegexPositiveInteger = /^[1-9]\d*$/;
    let RegexPositiveFloat = /^(?:[1-9]\d*|0)\.\d+|^[1-9]\d*$/;
    let RegexZeroToOne2Decimals = /^(?:0(?:\.\d{1,2})?|1(?:\.0{1,2})?)$/;
    let RegexImageUrl = /^(?!.*\s).+\.(jpg|jpeg|svg|webp|png|gif)$/i;

    if(inputPriceCar === event.target){
        let tmpcheck = RegexPositiveFloat.test(inputPriceCar.value);
        if(!tmpcheck){
            inputPriceCar.setCustomValidity('This field is wrong!');
            inputPriceCar.reportValidity()
        } 
        check = tmpcheck && check;
    } 
    if(inputDiscountCar === event.target){
        let tmpcheck = RegexZeroToOne2Decimals.test(inputDiscountCar.value);
        if(!tmpcheck){
            inputDiscountCar.setCustomValidity('This field is wrong!');
            inputDiscountCar.reportValidity()
        } else{
            inputDiscountCar.setCustomValidity("");
        }
        check = tmpcheck && check;
    }
    if(inputLiterCapacityCar === event.target){
        let tmpcheck = RegexPositiveInteger.test(inputLiterCapacityCar.value);
        if(!tmpcheck){
            inputLiterCapacityCar.setCustomValidity('This field is wrong!');
            inputLiterCapacityCar.reportValidity()
        } else{
            inputLiterCapacityCar.setCustomValidity('');
        }
        check = tmpcheck && check;
    }
    if(inputPeopleCapacityCar === event.target){
        let tmpcheck = RegexPositiveInteger.test(inputPeopleCapacityCar.value);
        if(!tmpcheck){
            inputPeopleCapacityCar.setCustomValidity('This field is wrong!');
            inputPeopleCapacityCar.reportValidity()
        } else{
            inputPeopleCapacityCar.setCustomValidity('');
        }
        check = tmpcheck && check;
    }
    if(inputImageCar === event.target){
        let tmpcheck = RegexImageUrl.test(inputImageCar.value);
        if(!tmpcheck){
            inputImageCar.setCustomValidity('This field is wrong!');
            inputImageCar.reportValidity()
        } else{
            inputImageCar.setCustomValidity('');
        }
        check = tmpcheck && check;
    }
}
const createCar = ()=>{
    if (check){
        const car = db.CreateCar(inputNameCar.value, inputTypeCar.value, inputPriceCar.value, inputPeopleCapacityCar.value, inputIsManual.checked, inputLiterCapacityCar.value, inputImageCar.value, inputDiscountCar.value);
        return car
    } else{
        Alert({ title: "There are invalid values!!",
             text: "Please rectify",return: false })
        return null
    }
}
createCarBtn.addEventListener("click", createCar)
document.querySelector("tbody > tr").addEventListener("input", debounce(verifyContent.bind(this)))