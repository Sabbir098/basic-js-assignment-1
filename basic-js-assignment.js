//1. conversion of seer To mon.

function seerToMon(seer){
    const calcuSeerToMon = seer / 40;
    const totalMon = calcuSeerToMon;
    return totalMon; 
}
const getResult = seerToMon(500);
console.log(getResult);

// 2. write a function and figure out totalsales

const perShirtPrice = 100;
const perPantPrice = 200;
const perShoePrice = 500; 

function totalSales(shirt, pant, shoe){
    const totalShirtPrice = shirt * perShirtPrice;
    const totalPantPrice = pant * perPantPrice;
    const totalShoePrice = shoe * perShoePrice;
    const overAllSales = totalShirtPrice + totalPantPrice + totalShoePrice;
    return overAllSales; 
}

const getSumOfSales = totalSales(5, 5, 5);
console.log(getSumOfSales);

// 3. get out total deliveryCost;

function deliveryCost(amountOfDelivery){
    const oneToHundredDeliveryCost = 100
    const hundredToTwoHundredDeliveryCost = 80;
    const TwoHundredToUnlimitedDeliveryCost = 50

    if(amountOfDelivery <= 100){
        const oneTo100TotalCost= amountOfDelivery * oneToHundredDeliveryCost
        return oneTo100TotalCost;
    }
    else if(amountOfDelivery <= 200){
        const first100 = 100 * oneToHundredDeliveryCost;
        const restDelivery = amountOfDelivery - 100;
        const oneHundredTo200TotalCost = restDelivery * hundredToTwoHundredDeliveryCost;
        const totalDeliveryCost = first100 + oneHundredTo200TotalCost;
        return totalDeliveryCost;
    }
    else{
        const first100 = 100 * oneToHundredDeliveryCost;
        const oneHundredTo200TotalCost = 100 * hundredToTwoHundredDeliveryCost;
        const againRestDelivery = amountOfDelivery - 200;
        const restTotalDeliveryCost = againRestDelivery * TwoHundredToUnlimitedDeliveryCost;
        const overAllDeliveryCost = first100 + oneHundredTo200TotalCost + restTotalDeliveryCost;
        return overAllDeliveryCost;
    }
        
}

const getTotalCostOfDelivery = deliveryCost(250);
console.log(getTotalCostOfDelivery);

// 4. problem 4 

const friends = ['sakib','rifat','rohan','kamrul','emon','sabbir','abdullah' ];
function perfectFriend(friends){
    for(const friend of friends){
        if(friend.length == 5){
            return friend;
        }
    }
}

const getPerfectFriend = perfectFriend(friends);
console.log(getPerfectFriend);