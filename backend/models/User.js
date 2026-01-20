export default class User{
    static db = "http://localhost:3000";
    type = "user";
    constructor(id, username, email, profileImage, ownedCars, rentedCars, favoriteCars){
        this.id = id;
        this.username = username;
        this.email = email;
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
                return new User(data[0].id, data[0].username, data[0].email, data[0]?.profileImage || "", data[0]?.ownedCars || [], data[0]?.rentedCars || [], data[0]?.favoriteCars || []);
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
    static async signUp(username, password, email){
        //pass the sign up code here
        const user = {
            username: username,
            password: password,
            email: email,
            profileImage: "",
            ownedCars: [],
            rentedCars: [],
            favoriteCars: []
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
            return new user(data.id, data.username, data.email, data.profileImage, data.ownedCars, data.rentedCars, data.favoriteCars);
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