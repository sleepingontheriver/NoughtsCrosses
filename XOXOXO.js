let StartingPosition = ["*", "*", "*",
"*", "*", "*",
"*", "*", "*"];

const Cross = "X"
const Nought = "O"
class Game {
    constructor(){
        this.State = StartingPosition
        
        this.turn = Cross

     // used when the starting position was a string   let rows = StartingPosition.trim().split("\n").map(l => [...l]);
    }
    Next() {
        // Need to update who's turn it is, allow player to place a piece, check for won or lost game state, and update the position
        
        //Somehow query player for where to put the piece

        while(true){
        
            console.log("It's ${this.turn}'s turn!")

            var CurrentMove = window.prompt("Where do you move?")
            //For now accept a number 0-8 which will be the string index
        
            this.State[CurrentMove] = this.turn
            //check so it doesnt work if it is placed on an already existing piece
            if (this.turn == Cross){
                this.turn = Nought
            }
            else{
                this.turn = Cross
            }
        

        }
    CheckOutcome(){
        if (this.state.includes("*") === false) {
            window.alert("Draw")
            return 0
        }
    }


}
const MyGame = new Game();

function GameLoop(){

    let  CurrentPosition = MyGame.State.toString()
    
    console.log(CurrentPosition)
    
    const MyParagraph = document.getElementById("Board")
    
    MyParagraph.innerHTML = CurrentPosition
    
    MyGame.Next()
    
}
    


document.addEventListener('DOMContentLoaded', () => {
    while(true){
        GameLoop()
}})

