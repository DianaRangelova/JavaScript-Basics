function theatrePromotions(day, age) {
    let price;

    switch (day) {
        case 'Weekday':
            if (age >= 0 && age <= 18) {
                price = 12;
            } else if (age > 18 && age <= 64) {
                price = 18;
            } else if (age > 64 && age <= 122) {
                price = 12;
            } else {
                console.log("Error!");
                return;
            }
            break;
        case 'Weekend':
            if (age >= 0 && age <= 18) {
                price = 15;
            } else if (age > 18 && age <= 64) {
                price = 20;
            } else if (age > 64 && age <= 122) {
                price = 15;
            } else {
                console.log("Error!");
                return;
            }
            break;
        case 'Holiday':
            if (age >= 0 && age <= 18) {
                price = 5;
            } else if (age > 18 && age <= 64) {
                price = 12;
            } else if (age > 64 && age <= 122) {
                price = 10;
            } else {
                console.log("Error!");
                return;
            }
            break;
        default:
            console.log("Error!");
            return;
    }

    console.log(`${price}$`);
}

theatrePromotions('Weekday', 42)
theatrePromotions('Holiday', -12)
theatrePromotions('Holiday', 15)
