document.addEventListener('DOMContentLoaded', () => {
  
    const Cross = "X"
    const Nought = "O"
    const Squares = document.querySelectorAll('.grid div')
    const Reset = document.querySelector('button')

    let turn = Cross

    for (let i = 0; i < Squares.length; i++) {
        Squares[i].onclick = () => {
            Squares[i].classList.add('taken')
            Squares[i].classList.add(turn)
            if (turn == Cross){
                turn = Nought
                Squares[i].innerHTML = "<img src = 'X.png'/>"
            }
            else{
                turn = Cross
                Squares[i].innerHTML = "<img src = 'O.png'/>"
            }
        } 
    }
    Reset.onclick = () => {
        document.querySelectorAll('.grid div').forEach(element => {
            element.innerHTML = ""
            element.classList.remove('taken', 'X', 'O')
        })

        }
    
})