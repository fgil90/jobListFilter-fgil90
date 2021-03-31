
const img = document.querySelector(".pokemon-image");
const answerInput = document.querySelector("#answer-input");
const submitButton = document.querySelector("#submit-button");

let r = (Math.random() * 150 + 1).toFixed(0);

//const source = "./img/pokemon-img/" + r.toString() + ".png";
const source = `./img/pokemon-img/${r.toString()}.png`;
img.src = source;

submitButton.addEventListener("click", verifyPokemon);

function verifyPokemon(event) {
    let answerText = answerInput.value;
    event.preventDefault();

    if (answerText.toUpperCase() == table[r - 1].toUpperCase()) {
        console.log("RIGHT");
    } else {
        console.log("WRONG");
    }
}