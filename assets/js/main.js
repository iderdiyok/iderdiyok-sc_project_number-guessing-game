
//Start Game
let divStartGame = document.getElementById("startGame")
let divSelectNumber = document.getElementById("selectNumber")

function startGame(){
    divStartGame.classList.add("d-none")
    divSelectNumber.classList.remove("d-none")
}

//selectedNumber
let spanSelectedNumber = document.getElementById("selectedNumber")
let divTheGame = document.getElementById("theGame")
let formCustomNumber = document.getElementById("customNumber")

function selectedNumber(index){
    spanSelectedNumber.innerHTML = index.value
    console.log(spanSelectedNumber.innerHTML);
    divSelectNumber.classList.add("d-none")
    divTheGame.classList.remove("d-none")
}

function customNumber(){
    formCustomNumber.classList.remove("d-none")
}

//The Game
let target = Math.floor(Math.random() * 100)
let retriesInt = 0;
let hint=""

let retries = document.getElementById("retries")
let inputChoice = document.getElementById("inputChoice")
let result = document.getElementById("result")
let txtGameResult = document.getElementById("gameResult")

function checkChoice(){
    if (inputChoice.value > 100) {
        openModal(); 
    }else{
        retriesInt++
        retries.innerHTML = retriesInt
        if(retriesInt == 1){
            result.classList.remove("d-none")
        }
        if (inputChoice.value != target) {
            if (inputChoice.value < target) {
                hint = "higher"
            }else{
                hint = "lower"
            }
            if(parseInt(retries.innerHTML) >= parseInt(spanSelectedNumber.innerHTML)){
                document.getElementById("btnGuess").classList.add("disabled")
                document.getElementById("gameEnd").classList.remove("d-none")
                txtGameResult.classList.add("text-danger")
                txtGameResult.innerHTML += `You lost!!! You couldn't guess the right number in ${retriesInt} tries. The correct number was ${target}`
            }else{
                result.innerHTML += `<li class="list-group-item">You need to guess ${hint} than ${inputChoice.value}, try again</li>`
                inputChoice.value =""
            }
        }else{
            document.getElementById("gameEnd").classList.remove("d-none")
            document.getElementById("btnGuess").classList.add("disabled")
            txtGameResult.classList.add("text-success")
            txtGameResult.innerHTML += `Yes!!! You guessed the correct number after ${retriesInt} retries`
        }
            
    }
}

function openModal() {
    document.getElementById("backdrop").style.display = "block"
    document.getElementById("myModal").style.display = "block"
    document.getElementById("myModal").classList.add("show")
}
function closeModal() {
    document.getElementById("backdrop").style.display = "none"
    document.getElementById("myModal").style.display = "none"
    document.getElementById("myModal").classList.remove("show")
}