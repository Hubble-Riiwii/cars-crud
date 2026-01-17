export default class API{
    db = "http://localhost:3000";
    async FetchCars(){
        try {
            const response = await fetch(this.db+"/cars", {
                method: "GET", 
                headers: {"Content-Type":"application/json"}
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Error: \n ${error}`)
            return null;
        }
    }
    async CreateCar(name, type, totalPrice, capacity, isManual, litersCapacity, img, discount = 0){
        const car = {
            name: name,
            type : type,
            image : img,
            totalPrice : totalPrice,
            price : totalPrice - (totalPrice*discount),
            litersCapacity : litersCapacity,
            isManual : isManual,
            capacity : capacity,
            discount : discount,
            isFavorite : false,
        }
        try{
            const response = await fetch(this.db+"/cars", {
                method:"POST", 
                headers: {"Content-Type":"application/json"},
                body:JSON.stringify(car)
            });
            if(!response.ok){
                throw new Error(`HTTP Error! status ${response.status}`);
            }
            const data = await response.json()
            return data;
        } catch(error){
            console.error(`Error \n ${error}`);
            return null;
        }
    }
    async getUser(username, password){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; //Regex to verify if it's username or email
        if (!emailRegex.test(username)){
        try{
            const response = await fetch(this.db+"/users?username="+username, {
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
        } else{
        try{
            const response = await fetch(this.db+"/users?email="+username, {
                method: "GET",
                headers: {"Content-Type":"application/json"}
            });
            if(!response.ok){
            throw new Error(`HTTP Error! status ${response.status}`);
            }
            const data = await response.json()
            if (await data.length === 0){
                return null
            } else if (await data[0]?.password === password){
                return data[0];
            } else{
                return null
            }
        } catch (error){
            console.error(`Error \n ${error}`)
            return null
        }
        }
        
    }
    async createUser(username, password, email){
        const user = {
            username : username,
            email : email,
            password : password
        }
        try{
            const response = await fetch(this.db+"/users", {
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
}