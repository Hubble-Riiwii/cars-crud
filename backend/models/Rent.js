export default class Rent{
    isPaid = false;
    amountPaid = false;
    overdueTime = 0;
    isDone = false;

    constructor(car, user, startDate, timeRent, cost){
        this.car = car;
        this.user = user;
        this.startDate = startDate;
        this.timeRent = timeRent;
        this.cost = cost;
    }
}