const popularSection = document.getElementById("pupular-cars-section").querySelector(".row");

function addToPopularSection(isFavorite, carName, carType, imgLink, isManual, liters, people, carPrice, TotalPrice = 0){
    let HeartIcon = "hearth-icon-empty"; let Manual = "Manual"; let discountSpan = "";
    if (isFavorite){
        HeartIcon = "hearth-icon-full"
    }
    if (!isManual){
        Manual = "Automatic"
    }
    if(TotalPrice){
        discountSpan = `<span class='secondary-text discount-text'>${TotalPrice}.00</span>`;
    }
    let Template = `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3"> 
                    <div class=" card card-item relative h-100"> 
                        <i class="${HeartIcon} top-right-icon"></i>
                        <h3 class="card-title">${carName}</h3>
                        <h4 class="card-subtitle">${carType}</h4>
                        <div class="card-img-container">
                            <img src="${imgLink}" alt="${carName}" class="w-100" title="${carName + carType}">
                        </div>
                        <div class="w-100 d-flex justify-content-around align-items-center">
                            <span class="secondary-text"><i class="gas-station-icon"></i>${liters}L</span>
                            <span class="secondary-text"><i class="manual-icon"></i>${Manual}</span>
                            <span class="secondary-text"><i class="profile-2-users-icon"></i>${people} People</span>
                        </div>
                        <div class="card-price-container w-100 d-flex justify-content-around align-items-center mt-3">
                            <span class="card-price">${carPrice}.00/ <span class="secondary-text">day</span>${discountSpan}</span>
                            <button class="btn btn-primary btn-sm primary-background">Rent Now</button>
                        </div>
                    </div>
                </div>`;
    popularSection.innerHTML += Template;
}

const Cars = [
    {
        isFavorite: false, 
        name: "Koenigsegg",
        type: "Sport",
        imgLink: "./assets/cars/car_koenigsegg.png",
        liters: 90,
        manual : true,
        people: 2,
        price: 99
    }, 
    {
        isFavorite: true, 
        name: "Koenigsegg",
        type: "Sport",
        imgLink: "./assets/cars/car_koenigsegg.png",
        liters: 90,
        manual : true,
        people: 2,
        price: 99
    }, 
    {
        isFavorite: false, 
        name: "Koenigsegg",
        type: "Sport",
        imgLink: "./assets/cars/car_koenigsegg.png",
        liters: 90,
        manual : true,
        people: 2,
        price: 99
    }, 
    {
        isFavorite: true, 
        name: "Nissan",
        type: "Sport",
        imgLink: "./assets/cars/car_nissangt-r.png",
        liters: 80,
        manual : true,
        people: 2,
        price: 80,
        TotalPrice: 100
    }   
]
Cars.forEach(car=>{
    addToPopularSection(car.isFavorite, car.name, car.type, car.imgLink, car.manual, car.liters, car.people, car.price, car?.TotalPrice)
})