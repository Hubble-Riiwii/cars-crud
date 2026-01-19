export default class User{
    constructor(id, username, email, type, profileImage, ownedCars, rentedCars, favoriteCars){
        this.id = id;
        this.username = username;
        this.email = email;
        this.type = type;
        this.profileImage = profileImage;
        this.ownedCarscars = ownedCars;
        this.rentedCars = rentedCars;
        this.favoriteCars = favoriteCars;
    }
    static logIn(){
        //pass the log in code here
    }
    static signUp(){
        //pass the sign up code here
    }
    rentCar(car){
        //code to rent car
    }
    putToRentCar(car){
        //code to put car inside the webPage
    }
    likeCar(car){
        //code to add car to favorite
    }
    //Add admin methods or create a new model for Admin.js
}