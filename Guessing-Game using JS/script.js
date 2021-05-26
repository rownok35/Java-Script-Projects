let submit_btn = document.querySelector('#submit_btn');
let info = document.querySelector('#info');
let play_again = document.querySelector('#play_again');


submit_btn.addEventListener('click', playgame);
play_again.addEventListener('click', play_again_function);
document.addEventListener('DOMContentLoaded', initial_task);

function initial_task() {
    play_again.style.display = 'none'
}

function play_again_function() {
    window.location.reload(true);
}



let low = 1
let high = 10

var counter = 0


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


let correct_ans = getRandomIntInclusive(low, high)
console.log('correct ans: ', correct_ans)



function playgame(e) {
    let guessing_number = document.querySelector('#Guessing_number').value;
    console.log('guessing number: ', guessing_number)

    counter += 1

    if (correct_ans == guessing_number) {
        console.log("Congratulations!! You win. The random number was", correct_ans);
        result(correct_ans, `Win!! 😍😍`, 'bg-success')
        return 0

    } else if (guessing_number < correct_ans) {

        if (counter == 3) {

            console.log(`Correct answer is greater! You do not have any chances left`)
            alert(`Correct answer is greater! You do not have any chances left`)
            result(correct_ans, 'Lose!! 😢😢', 'bg-danger')
            return 0

        }
        console.log(`Correct answer is greater! You have ${3-counter} chances left`)
        alert(`Correct answer is greater! You have ${3-counter} chances left`)
    } else {

        if (counter == 3) {

            console.log(`Correct answer is smaller! You do not have any chances left`)
            alert(`Correct answer is smaller! You do not have any chances left`)
            result(correct_ans, 'Lose!! 😢😢', 'bg-danger')
            return 0

        }
        console.log(`Correct answer is smaller! You have ${3-counter} chances left`)
        alert(`Correct answer is smaller! You have ${3-counter} chances left`)
    }

}

function result(correct_ans, message, class_name) {
    document.getElementById("Guessing_number").disabled = true;
    submit_btn.disabled = true;
    console.log(`You ${message} The Correct answer was ${correct_ans}`)

    info.innerHTML = "";
    info.className = '';

    // console.log(class_name)

    info.appendChild(document.createTextNode(`You ${message} The Correct answer was ${correct_ans}`));
    info.className = `p-3 mb-2 ${class_name} text-white`

    play_again.style.display = 'block'

}