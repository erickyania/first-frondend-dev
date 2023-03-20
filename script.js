let xp = 0
let health = 100
let currentWeapon = 0
let fighting
let monterHealth
let inventory = ["stick"]

// using object "document and method "document.queryselector" to reference the element to a variable.

const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const text = document.querySelector("#text")
const xpText = document.querySelector("#epText")
const healthText = document.querySelector("#healthText")
const goldtext = document.querySelector("#golText")
const monsterStats = document.querySelector("#monsterStats")
const monsterNameText = document.querySelector("#monsterName")
const monterHealthText = document.querySelector("#monterHealth")
const location = [
    {
        name: 'town square',
        'button text': ['got to store', 'buy to cave', 'fight dragon'],
        'button functions': [goStore, goCave, fightDragon],
        text: 'your in the town square.Do you see a sign \"STORE\"'
    },

    {
        name: 'store',
        'button text': ['buy 10 coins (10 gold)', 'buy 30 gold coins(30 gold)', 'go to town square'],
        'button functions': [buyHealth, buyWeapon, goTown],
        text: 'you enter store'
    }

]

// initialize button
button1.onclick = goStore
button2.onclick = goCave
button3.onclick = fightDragon

function update(location) {
    button1.innerText = location['button text'][0]
    button2.innerText = location['button text'][1]
    button1.innerText = location['button text'][2]

    button1.onclick = location['button functions'][0]
    button2.onclick = location['button functions'][1]
    button3.onclick = location['button functions'][2]
    text.innerText = location.text
}

function goTown() {
    update(location[0])
}

function goStore() {
    update(location[1])
}

function goCave() {
    console.log("going to cave")
}

function fightDragon() {
    console.log("fighting dragon")
}

function buyHealth() {

}

function buyWeapon() {

}

