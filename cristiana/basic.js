var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

//My favorite sandwich is a Hamburger which has approximately 260 calories, along with it I enjoy eating Large French Fries which have about 570 calories.


var sandwichObj = JSON.parse(sandwiches);
/*
var sandwichObj = { 
    sandwich: "hamburger",
    calories: "260"
};
*/
var friesObj = JSON.parse(fries);
/*
var friesObj = { 
    fries_size: "Large French Fries",
    calories: "570"
};
*/
document.getElementById("hamburger").innerHTML= `My favorite sandwich is a ${sandwichObj.sandwich} which has approximately ${sandwichObj.calories} calories, along with it I enjoy eating ${friesObj.fries_size} which have about ${friesObj.calories} calories.`;