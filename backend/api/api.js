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
            price : totalPrice - (totalPrice*(discount/100)),
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
}