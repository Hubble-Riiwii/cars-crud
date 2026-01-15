export default class API{
    db = "http://localhost:3000/db.json";
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
            TotalPrice : totalPrice,
            price : totalPrice - (totalPrice*discount),
            litersCapacity : litersCapacity,
            isManual : isManual,
            capacity : capacity,
            Discount : discount,
            isFavorite : false,
        }
        try{
            const response = await fetch(this.db+"/cars", {
                method:"POST", 
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify(car)
            });
            if(!response.ok){
                throw new Error(`HTTP Error! status ${response.status}`);
            }
            const data = await response.json()
            console.log('Success:', data);
            return data;
        } catch(error){
            console.error(`Error \n ${error}`);
            return null;
        }
    }
    async getUser(username, password, email){
        try{
            const response = await fetch(this.db+"/users:username?"+username, {
                method: "GET",
                headers: {"Content-Type": "application/json"}
            });
            if(!response.ok){
                throw new Error(`HTTP Error! status ${response.status}`);
            }
            const data = await response.json();
            if (await data === null){
                response = await fetch(this.db+"/users:email?"+email, {
                    method: "GET",
                    headers: {"Content-Type":"application/json"}
                });
                data = await response.json()
            }
            if (await data?.password == password){
                return data;
            } else{
                console.warn("Contraseña incorrecta");
                return null
            }
        } catch(error){
            console.error(`Error \n ${error}`)
            return null
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
                headers: {"Content-Type": "application/json"},
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