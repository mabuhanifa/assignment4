// 1 anaToVori

function anaToVori(ana) {

    //error handling
    if (ana < 0 || typeof ana !== "number") {
        return "please give a number with positive value"
    } else {
        return ana / 16;
    }

}

console.log(anaToVori(32));

// 2 pandaCost

function pandaCost(singaraQuantity, samosaQuantity, jilapiQuantity) {

    //error handling
    if (((typeof singaraQuantity || typeof samosaQuantity || typeof jilapiQuantity) !== "number" || singaraQuantity < 0 || samosaQuantity < 0 || jilapiQuantity < 0)) {
        return "please ensure that every input is  a number and there is no negative value "
    }

    const perSingara = 7;
    const perSamosa = 10;
    const perJilapi = 15;

    // price calculation
    const totalSingara = singaraQuantity * perSingara;
    const totalSamosa = samosaQuantity * perSamosa;
    const totalJilapi = jilapiQuantity * perJilapi;

    const totalPrice = totalSingara + totalSamosa + totalJilapi;

    return totalPrice;


}

console.log(pandaCost(10, 101, 10));

// 3 picnicBudget

function picnicBudget(person) {

    //error handling
    if (typeof person !== "number" || person < 0) {
        return "Please give a number with positive value "
    } else if (person < 101) {
        return person * 5000;
    } else if (person < 201) {
        return (100 * 5000) + ((person - 100) * 4000);
    } else if (person >= 201) {
        return (100 * 5000) + (100 * 4000) + ((person - 200) * 3000);
    }
}


console.log(picnicBudget(210));

//4 oddFriend

let friendsarray = ['helo', 'hel'];

function oddFriend(friends) {

    //error handling

    if (Array.isArray(friends) !== true || friends.length < 1) {
        return "please insert an array with at least 1 element"
    }

    //loop starting here

    for (let i = 0; i < friends.length; i++) {

        //error handling

        if (typeof friends[i] !== "string") {
            return "array items(names) must be string ";
        } else if (friends[i].length % 2 == 1) {
            return friends[i];
        }

    }
}

console.log(oddFriend(friendsarray));