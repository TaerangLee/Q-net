const test = document.querySelector(".Customer_Engagement");

console.log(test);

function add1(){
    console.log("click here");
    test.style.color="blue";

}

test.addEventListener("click", add1);