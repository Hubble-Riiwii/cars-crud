export default class User{
    static db;
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
    static async logIn(user, password){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; //Regex to verify if it's username or email
        let searchParam = (emailRegex.test(user)) ? "?email=" : "?username="; //Verifies if the string is a valid email, "email" parameter if it is, else "username"
        try{
            const response = await fetch(User.db+"/users"+searchParam+user, {
                method: "GET",
                headers: {"Content-Type":"application/json"}
            });
            if(!response.ok){
                throw new Error(`HTTP Error! status ${response.status}`);
            }
            const data = await response.json();
            if (data.length === 0){
                return null
            } else if (data[0]?.password === password){
                return data[0];
            } else{
                return null
            }
        } catch(error){
            console.error(`Error\n ${error}`)
            return null
        }
    }
    static async verifyUsername(username){
        try{
            const response = await fetch(User.db+"/users?username="+username,{
                method:"POST", 
                headers: {"Content-Type":"application/json"}
            })
            if(!response.ok){

            }
        } catch(error){
            console.error("error", error)
        }
    }
    static async signUp(username, password, email, type){
        //pass the sign up code here
        const user = {
            username : username,
            email : email,
            password : password,
            type: type
        }
        try{
            const response = await fetch(User.db+"/users", {
                method: "POST",
                headers: {"Content-Type":'application/json'},
                body: JSON.stringify(user)
            })
            if(!response.ok){
                throw new Error(`HTTP Error! status ${response.status}`)
            }
            const data = await response.json();
            return data;
        } catch (error){
            console.error(`Error \n ${error}`)
            return null
        }
    }
    logOut(){
        //code to log out
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