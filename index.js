function getComputerChoice(){
    let rock='rock'
    let paper='paper'
    let scissors='scissors'
    compChoice=Math.floor(Math.random()*3)

    if (compChoice===0){
        compChoice=rock
    } else if (compChoice===1){
        compChoice=paper
    }else{
        compChoice=scissors
    }
}

getComputerChoice()