//Feet to Mile
function feetToMile(feet){
    var mile = feet * 0.00018939; 
    mile = mile.toFixed(2);
    return mile;
}
var result=feetToMile(10000)
 console.log(result);

//woodCalculator
function woodCalculator(chair, table, bed){
    var chairCubicFeet= chair*1;
    var tableCubicFeet=table*3;
    var bedCubicFeet=bed*5;
    var totalWood = chairCubicFeet + tableCubicFeet + bedCubicFeet;
    return totalWood;
}
 var resultWoodCal = woodCalculator(1,2,3);
 console.log(resultWoodCal);

 // brickCalculator

function brickCalculator(n){
    if(n <= 10 && n > 1){
        var brick = 15000 * n;
        return brick;
    }
    else if( n > 10 && n <= 20){
        var brick = (12000 * (n - 10) + 150000);
        return brick;
    }
    else{
        var brick = (10000 * (n - 20) + 270000);
        return brick;
    }
}

var totalBrick = brickCalculator(30);
console.log(totalBrick);



  //tinyFriend
    function tinyFriend(friends){
        var numberOfArrayFriend = friends[0];
        for(var i=0; i < friends.length;i++){
            var currentFriends = friends[i];
            var newCurrentFriends = friends[i].length;
            if(newCurrentFriends < numberOfArrayFriend.length){
                numberOfArrayFriend = currentFriends;
            }
        }
        return numberOfArrayFriend;
    }


    var resultTinyFriend = tinyFriend(["tahmina","sabrin","sakia","riya","koli apu", "mamun vai"]);
    console.log(resultTinyFriend);


 