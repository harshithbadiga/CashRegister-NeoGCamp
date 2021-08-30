var billAmount = document.querySelector("#bill-amt")
var cashGiven = document.querySelector("#user-amt")
var check = document.querySelector("#check")
var errorMessage = document.querySelector(".error-msg")
var notes = document.querySelectorAll(".noOfNotes")
var proceedBtn = document.querySelector(".proceed-btn")
var secondSecreen = document.querySelector(".test-1")
var tableView = document.querySelector(".table-view")
var resetBtn = document.querySelector(".reset-btn")

const notesAvailable = [2000, 500, 100, 20, 2, 1]

proceedBtn.addEventListener("click", function next(){
    if (billAmount.value > 0){
        proceedBtn.style.display = "none"
        secondSecreen.style.display ="block"


    } else{
        invalid("The amount is invalid!")
    }
})

resetBtn.addEventListener("click", function reload(){
    location.reload()
})



check.addEventListener("click", function buttonClicked() {
    hideMessage()
    tableView.style.display = "block"



        if (cashGiven.value >= billAmount.value) {
            const changeToBeReturned = cashGiven.value - billAmount.value
            change(changeToBeReturned);
        } else {
            invalid("Do you want to wash dishes!")
            tableView.style.display = "none"

        }


    }
)


function invalid(msg) {
    errorMessage.style.display = "block"
    errorMessage.innerText = msg
}

function hideMessage() {
    errorMessage.style.display = "none"
}

function change(changeToBeReturned) {
    for (var i = 0; i < notesAvailable.length; i++) {
        const numberOfNotes = Math.trunc(changeToBeReturned / notesAvailable[i])
        changeToBeReturned %= notesAvailable[i]
        notes[i].innerText = numberOfNotes
    }

}