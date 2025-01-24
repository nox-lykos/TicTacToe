let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newGmBtn = document.querySelector("#nwGame");
let winMsg = document.querySelector(".winMsg");
let msg = document.querySelector("#msg");
let drawGame = document.querySelector(".drawGame");
let drawReset = document.querySelector("#reset-Btn");

let cl=0;
let move1 = true; //first move is X

const winPatterns = [
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6]
];

const resetGame = () => {
    move1=true;
    cl=0;
    enableBtns();
    winMsg.classList.add("hide");
    drawGame.classList.add("hide");
};

boxes.forEach( (box) =>{
    box.addEventListener("click", () =>{
        if(move1) {
            box.innerText="X";
            move1 = false;
        }
        else{
            box.innerText="O";
            move1=true;
        }
        box.disabled=true;
        cl++;

        let isWinner = checkWinner();
        if (cl==9 && isWinner != true){
            Draw();
        }
        
    });
});

let disableBtns = () => {
    for(box of boxes){
        box.disabled=true;
        
    };
};

let enableBtns = () => {
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    };
};

const showWinner = (winner) =>{
    msg.innerText=`Winner is ${winner}`;
    winMsg.classList.remove("hide");
    disableBtns();

};

const Draw = () => {
    drawGame.classList.remove("hide");
    disableBtns();
};

const checkWinner = () =>{
    for (let pat of winPatterns){
        let val1 = boxes[pat[0]].innerText;
        let val2 = boxes[pat[1]].innerText;
        let val3 = boxes[pat[2]].innerText;
        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 == val2 && val2 == val3){
                console.log("Winner",val1);
                showWinner(val1);
                return true;
            };
        };
    } ;
};

newGmBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
drawReset.addEventListener("click", resetGame);