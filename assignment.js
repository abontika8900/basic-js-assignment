

// problem 1
// The total amount of milk you bought

function seerToMon(seer){
    console.log(seer);
    var milkMon = 40;
    var milkQuantity = seer /milkMon;
    return milkQuantity;
}
var seer =320;
var milk = seerToMon(seer);
console.log(milk);


// problem 2
// The total amount of money sold
/*
tshirtPrice = 100tk/tshirt
pantPrice = 200tk/pant
shoePrice = 500tk/shoe
*/

function totalSales(tshirtQuantity,pantQuantity,shoeQuantity){
    const tshirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;
 // total sales
const tshirtPriceQuantity = tshirtQuantity*tshirtPrice;
const pantPriceQuantity = pantQuantity*pantPrice;
const shoePriceQuantity = shoeQuantity*shoePrice;

// adding all quantity
const totalPrice = tshirtPriceQuantity+pantPriceQuantity+shoePriceQuantity;
return totalPrice;
}
const firstOption = totalSales(100,145,300);
console.log(firstOption);



// problem 3
// Calculation of total delivery money

function deliveryCost(tshirt){
    const firstDelivery100Tshirt = 100;
    const secondDelivery200Tshirt = 80;
    const nextDeliveryTshirt = 50;
     
    if(tshirt <= 100){
        const cost = tshirt*firstDelivery100Tshirt;
        return cost;
    }
    //  condition
    else if(tshirt <= 80){
        const firstDeliveryTshirt = 100*firstDelivery100Tshirt;
        const nextTshirt = tshirt -100;
        const secondDeliveryTshirt =nextTshirt*secondDelivery200Tshirt;
        const totalTshirt = firstDeliveryTshirt+secondDeliveryTshirt;
        return totalTshirt;
    }
     
    else{
        const firstDeliveryTshirt = 100*firstDelivery100Tshirt;
        const secondDeliveryTshirt = 100*secondDelivery200Tshirt;
        const nextTshirt = tshirt - 200;
        const NextDeliveryTshirt =nextTshirt*nextDeliveryTshirt;
        const totalTshirt = firstDeliveryTshirt+secondDeliveryTshirt+NextDeliveryTshirt;
        return totalTshirt;
    }
}
const tshirt = deliveryCost(420)
console.log(tshirt);


// problem 4
// Cheking my best friend in a array
const friends = ['sumi','eti', 'mayda', 'robi', 'abudullah', 'fahah', 'atik', 'tithi', 'sabiha'];
function perfectFriend(friends) {

    let firstElement = "";
    for (const element of friends) {
        if (element.length == 5) {
            firstElement = element;
             return firstElement = element;
            break;
        }
        else if  (element.length != 5){
           continue;
        }
        else{
            return "This is not applicable"
        }
    }
}
let result = perfectFriend(friends);
console.log(result);