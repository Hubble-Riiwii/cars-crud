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
}