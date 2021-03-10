// =========================================================== ELements
const startBtn = document.querySelector('.start')
const toGameTableBtn = document.querySelector('.go-to-game')
const whatTeam = document.querySelector('.what-team')
const t1 = document.querySelector('.team1')
const t2 = document.querySelector('.team2')
const t1_value = document.querySelector('.team1-value')
const t2_value = document.querySelector('.team2-value')

const inpT1Value = document.querySelector('.inp-team1-value')
const inpT2Value = document.querySelector('.inp-team2-value')
const gameTime = document.querySelector('.game-time')
const gameValue = document.querySelector('.values')
const startGameBtn = document.querySelector('.in-game-table-btn')

const timer = document.querySelector('.timer')
const trueAnswer = document.querySelector('.true')
const falseAnswer = document.querySelector('.false')
const word = document.querySelector('.word')



// =========================================================== Variables
let nowTeam = [] 
let currentTeam = 0
let t1_count = 0
let t2_count = 0
let words = {}


// =========================================================== Workds
words = {
    names: ['',],
    items: ['աթոռ','սեղան','պահարան','ծաղկաման','բազկաթոռ','բազմոց','մահճակալ','լուսամփոփ','աստիճան','գիրք','տետր','մատիտ',
    'կազմ','սրիչ','ծաղիկ','մոխրաման','ծխախոտ','ձեռք','մատ','շախմատ','շաշկի','մազ','վարս','նկար','պատկեր','տուփ','արկղ',
    'անձեռոցիկ','ծունկ','ոտք','կոճակ','զգես','տաբատ','կոշիկ','հող','աչք','հոնք','ճակատ','շրթունք','քիթ','ականջ','հիմք','արմատ',
    'կոդ','ցողուն','տանձ','դեղձ','ծիրան','բանան','արքայախնձոր','կիվի','կատու','շուն','փիղ','ձի','արքա','թագուհի','կայսր'],
    football: [],
    random: [],
}

let randomNum = Math.round(Math.random()*words.items.length - 1)

// =========================================================== Functions

startBtn.addEventListener('click',function() {
    document.querySelector('.start-part').style.display = 'none'
    document.querySelector('.choose-team').style.display = 'flex'
})


toGameTableBtn.addEventListener('click',function() {
    document.querySelector('.game-table').style.display = 'flex'
    document.querySelector('.choose-team').style.display = 'none'
    nowTeam = [inpT1Value.value,inpT2Value.value]

    whatTeam.innerHTML = nowTeam[currentTeam]
    t1.innerHTML = inpT1Value.value
    t2.innerHTML = inpT2Value.value

    t1_value.innerHTML = t1_count
    t2_value.innerHTML = t2_count
})

startGameBtn.addEventListener('click',function() {
    document.querySelector('.alias').style.display = 'flex'
    document.querySelector('.game-table').style.display = 'none'
    timer.innerHTML = gameTime.value
    randomNum = Math.round(Math.random()*words.items.length - 1)
    word.innerHTML = words.items[randomNum]

    let gameTimer = setInterval(()=>{
        if(Number(timer.innerHTML) > 0) timer.innerHTML = Number(timer.innerHTML) - 1
        else {
            clearInterval(gameTimer)
            endGame()
        }
    },1000)
})

trueAnswer.addEventListener('click',function() {
    randomNum = Math.round(Math.random()*words.items.length - 1)
    word.innerHTML = words.items[randomNum]
    if(currentTeam == 0) t1_count++
    else t2_count++ 
})

falseAnswer.addEventListener('click',function() {
    randomNum = Math.round(Math.random()*words.items.length - 1)
    word.innerHTML = words.items[randomNum]
    if(currentTeam == 0) t1_count--
    else t2_count-- 
})

function endGame() {
    document.querySelector('.game-table').style.display = 'flex'
    document.querySelector('.alias').style.display = 'none'   
    
    t1_value.innerHTML = t1_count
    t2_value.innerHTML = t2_count

    if(currentTeam == 0) currentTeam = 1
    else currentTeam = 0
}