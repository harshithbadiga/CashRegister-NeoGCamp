var billAmount = document.querySelector("#bill-amt")
var cashGiven = document.querySelector("#user-amt")
var check = document.querySelector("#check")
var errorMessage = document.querySelector(".error-msg")
var notes = document.querySelectorAll(".noOfNotes")

const notesAvailable = [2000, 500, 100, 20, 2, 1]


check.addEventListener("click", function buttonClicked() {
    hideMessage()


    if (billAmount.value > 0) {
        if (cashGiven.value > billAmount.value) {
            const changeToBeReturned = cashGiven.value - billAmount.value
            change(changeToBeReturned);
        } else {
            invalid("Do you want to wash dishes!")

        }

    } else {
        invalid("The amount is negative!")
    }
})


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