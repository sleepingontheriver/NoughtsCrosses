document.addEventListener('DOMContentLoaded', () => {
  
    const Cross = "X"
    const Nought = "O"
    const Squares = document.querySelectorAll('.grid div')
    const Reset = document.querySelector('button')

    let turn = Cross

    let arr = [[""],[""],[""],[""],[""],[""],[""],[""],[""]];

    function gameover(){
        console.log("Game over")
    }

    for (let i = 0; i < Squares.length; i++) {
        Squares[i].onclick = () => {
            
            Squares[i].classList.add(turn)

            let id = Squares[i].id

            arr[i] = turn

            if (!(Squares[i].classList.contains("taken"))){
                if (turn == Cross){
                    turn = Nought
                    Squares[i].innerHTML = "<img src = 'X.png'/>"
                }
                else{
                    turn = Cross
                    Squares[i].innerHTML = "<img src = 'O.png'/>"
                }
                
                Squares[i].classList.add('taken')
            
                // check the rows

                if (arr[0] == arr[1] && arr[0] == arr[2]){
                    gameover()
                }

                if (arr[3] == arr[4] && arr[3] == arr[5]){
                    gameover()
                }
                
                if (arr[6] == arr[7] && arr[6] == arr[8]){
                    gameover()
                }

                //then the columns and diags 

                if (arr[0] == arr[3] && arr[0] == arr[6]){
                    gameover()
                }

                if (arr[1] == arr[4] && arr[1] == arr[7]){
                    gameover()
                }

                if (arr[2] == arr[5] && arr[2] == arr[8]){
                    gameover()
                }

                if (arr[0] == arr[4] && arr[0] == arr[8]){
                    gameover()
                }

                if (arr[6] == arr[4] && arr[6] == arr[2]){
                    gameover()
                }

            }

        } 
    }
    Reset.onclick = () => {
        document.querySelectorAll('.grid div').forEach(element => {
            element.innerHTML = ""
            element.classList.remove('taken', 'X', 'O')
        })
        turn = Cross
        arr = [[""],[""],[""],[""],[""],[""],[""],[""],[""]]
        }
    
})