let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");

const genComputerChoice = () => {
    const option = ["rock","paper","scissors"]  
    //rock,paper,scisor.
   const randIdx = Math.floor(Math.random()*3);
   return option[randIdx];
}

const drawGame = () => {
    msg.innerText = "Game draw"
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "You win";
        msg.style.backgroundColor ="green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = "you lose";
        msg.style.backgroundColor ="red";
    }

}

const playGame = (userChoice) => {
   
    //Generate computer choice.->modular 
    const compChoice =  genComputerChoice();
   

    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }else if( userChoice ==="paper"){
            //rock scissor;
            userWin = compChoice === "scissors" ? false : true;

        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})
