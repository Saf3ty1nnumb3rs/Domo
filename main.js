var feedMe = document.getElementById("feedButton");

feedMe.addEventListener("click" , feedMeLove, false);
var heartCnt = 0;
var feedMeLove = function(){
    heartCnt = heartCnt += 1;
    var foodStuffRow2 = document.getElementById("foodRow2");
    var foodStuff = document.getElementById("food");
    if (heartCnt <= 8) {
        foodStuff.innerHTML += "&hearts;";
    } else if (heartCnt > 8 && heartCnt <= 16) {
        foodStuffRow2.innerHTML += "&hearts;";   
    } else if(heartCnt === 17){
        alert("Domo has no more love to give");
    } else {
        alert("You're making Domo angry");
    }
}
    