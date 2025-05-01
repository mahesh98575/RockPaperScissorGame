let user=0;
let comp=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user");
const compScorePara=document.querySelector("#comp");

const genCompChoice = () =>{
    const options =["rock","paper","scissor"];
    const randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    msg.innerText="Game was tie.Play Again";
    msg.style.backgroundColor="#081b31"
}

const showWinner= (userWin,UserChoice,compChoice) =>{
    if(userWin){
        user++;
        userScorePara.innerText=user;
        msg.innerText=`You Win.! Your ${UserChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comp++;
        compScorePara.innerText=comp;
        msg.innerText=`You Lost.! ${compChoice} beats your ${UserChoice}`;
        msg.style.backgroundColor="red";
    }
}

const PlayGame=(UserChoice)=>{
    //Generate computer choice
    const compChoice = genCompChoice();
    if(UserChoice==compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(UserChoice==="rock"){
            userWin = compChoice==="paper"? false : true ;
        }else if(UserChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,UserChoice,compChoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const UserChoice=choice.getAttribute("id");
        PlayGame(UserChoice);
    })
})