export default class Car{
    constructor(id, name, type, TotalPrice, image, litersCapacity, isFavorite, isManual, capacity, Discount = 0){
        this.id = id;
        this.name = name;
        this.type = type;
        this.image = image;
        this.TotalPrice = TotalPrice;
        this.price = TotalPrice - (TotalPrice*Discount);
        this.litersCapacity = litersCapacity;
        this.isManual = isManual;
        this.capacity = capacity;
        this.Discount = Discount;
        this.isFavorite = isFavorite;
    }
    getCarCard(){
        let spanDiscount = this.Discount != 0 ? `<span class="secondary-text discount-text">${this.TotalPrice}.00</span>`: "";
        const carHTML = document.createElement("div"); carHTML.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3");
        carHTML.innerHTML = `
                    <div class="card card-item relative h-100"> 
                        <i class="${this.isFavorite ? "hearth-icon-full" : "hearth-icon-empty"} top-right-icon"></i>
                        <h3 class="card-title">${this.name}</h3>
                        <h4 class="card-subtitle">${this.type}</h4>
                        <div class="card-img-container">
                            <img src="${this.image}" alt="${this.name}" class="w-100" title="${this.name +" "+ this.type}">
                        </div>
                        <div class="w-100 d-flex justify-content-around align-items-center">
                            <span class="secondary-text"><i class="gas-station-icon"></i>${this.litersCapacity}L</span>
                            <span class="secondary-text"><i class="manual-icon"></i>${this.isManual ? "Manual":"Auto"}</span>
                            <span class="secondary-text"><i class="profile-2-users-icon"></i>${this.capacity} People</span>
                        </div>
                        <div class="card-price-container w-100 d-flex justify-content-around align-items-center mt-3">
                            <span class="card-price">${this.price}.00/ <span class="secondary-text">day</span>${spanDiscount}</span>
                            <button class="btn btn-primary btn-sm primary-background rent-btn" id="${this.id}">Rent Now</button>
                        </div>
                    </div>
                `;
        return carHTML;
    }
    getCarTable(){
        const carRow = document.createElement("tr"); carRow.setAttribute("id", this.id+"-car");
        carRow.innerHTML = `
            <td class="id-table">${this.id}</td>
            <td class="name-table">${this.name}</td>
            <td class="type-table">${this.type}</td>
            <td class="img-table">${this.image}</td>
            <td class="totalPrice-table">${this.TotalPrice}</td>
            <td class="discount-table">${this.Discount}</td>
            <td class="litersCapacity-table">${this.litersCapacity}</td>
            <td class="isManual-table">${this.isManual}</td>
            <td class="peopleCapacity-table">${this.capacity}</td>
        `;
    }
    static RentCar(){
        //Future Update
        console.log("Car rented")
    }
    static async getAllCars(db){
        const cars = await db?.FetchCars();
        console.log(cars)
        const carArray = [];
        if(cars === null || typeof(cars) !== "object"){
            console.warn("No cars fetched")
            return null
        }
        for (c of cars){
            console.log(c)
        }
        return carArray;
    }
}