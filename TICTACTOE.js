let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");
let newbtn = document.querySelector(".New")
let winnermsg = document.querySelector(".winner")
let msgcontainer = document.querySelector(".msg-container")




let turnO =  true ;//playerO

const winPatterns = [

[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click",
()=>{
    console.log("Button was clicked");
if(turnO)
{
    box.innerText="O"
    turnO=false; 
}
else{
    box.innerText="X"
    turnO=true
}
box.disabled=true;

checkWinners();


})
    
});
const enabled=()=>{
    for (const box of boxes) {
        box.disabled=false; 
        box.innerText=""   
    }
    
}

const resetgame=()=>
{
turnO=true;
enabled()
msgcontainer.classList.add("hide")


}

const disabled=()=>{
    for (const box of boxes) {
        box.disabled=true;    
    }
    
}


const showWinner=(winner)=>{
winnermsg.innerText = `Congratulations, winner is ${winner}`;

msgcontainer.classList.remove("hide")
disabled();
}



const checkWinners=()=>
{
for (let Pattern of winPatterns) {

 let pos1=   boxes[Pattern[0]].innerText;
let pos2 = boxes[Pattern[1]].innerText;
let pos3 = boxes[Pattern[2]].innerText;

if (pos1!=""&&pos2!=""&&pos3 !="") {

if (pos1==pos2&&pos2==pos3) {

    console.log("winner",pos1)

    showWinner(pos1);
} 

    
}
    
    
}

}

resetBtn.addEventListener("click",resetgame)
newbtn.addEventListener("click",resetgame)
