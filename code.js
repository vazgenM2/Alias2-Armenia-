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
    // names: ['Հովհաննես Թումանյան'],
    items: ['աթոռ','սեղան','պահարան','ծաղկաման','բազկաթոռ','բազմոց','մահճակալ','լուսամփոփ','աստիճան','գիրք','տետր','մատիտ',
    'կազմ','սրիչ','ծաղիկ','մոխրաման','ծխախոտ','ձեռք','մատ','շախմատ','շաշկի','մազ','վարս','նկար','պատկեր','տուփ','արկղ',
    'անձեռոցիկ','ծունկ','ոտք','կոճակ','զգես','տաբատ','կոշիկ','հող','աչք','հոնք','ճակատ','շրթունք','քիթ','ականջ','հիմք','արմատ',
    'կոդ','ցողուն','տանձ','դեղձ','ծիրան','բանան','արքայախնձոր','կիվի','կատու','շուն','փիղ','ձի','արքա','թագուհի','կայսր','տնկի',
    'հեռուստացույց','հեռախոս','պլանշետ','նոութբուք','տանկ','ինքնաթիռ','ուղղաթիռ','հյութ','սուրճ','զինանշան','դրոշ','հաշվիչ',
    'կրիա','վագր','առյուծ','ճանճ','աղվես','նավ','մեքենա','բույս','նապաստակ','բանալի','ուղի','ճանապարհ','մայրամուտ',
    'կորճատեւ','թեւ','հզոր','ուժ','ուշ','վաղ','առավոտ','երեկո','սիրտ','կյանք','ստամոքս','վարդ','մանուշակ','զարդ',
    'թեւնոց','վզնոց','վազել','կռահել','կլոր','ուղղանկյուն','քառակուսի','շրջան','շրջանակ','կող','կողակից','կից','վարորդ','հեռու','մոտակա',
    'թխկի','խնձորենի','երիցուկ','պատուհան','երաշտ','երգ','երաժշտություն','երգիչ','երգահան','պարել','պարուհի','հեծանիվ','այրուձի',
    'ժպիտ','Աստված','նվեր','պարգեւ','հասցե','հասցնել','կազմել','պլանավորել','ժամացույց','վերնաշապիկ','շապիկ','սիրուն','տգեղ',
    'բռնակ','կոտրել','թողնել','ազատ','ասել','բացատրել','թիմ','խաղ','ուշանալ','քաշել','թիվ','թվանշան','լեզու','եռալ','վոլեյբոլ','ֆուտբոլ',
    'առաջ','ընկեր','դուրս գալ','բացել','գերան','ինչ','պարզ','բարձ','գնալ','զբաղվել','հառաչել','թալիսման','խոհանոց','աշխատել','մայր',
    'հայր','ճամբար','մտածել','ավարտել','բարեւ','իհարկե','կներես','շահել','հաղթել','առավելություն','դիետա','գյուղ','հանել','համ',
    'հոտ','գույն','թոռ','ծոռ','երազ','կիրակի','շաբաթ','ուրբաթ','չորեքշաբթի','երեքշաբթի','երկուշաբթի','հինգշաբթի','ծեծել','մոռանալ',
    'իմանալ','սկիզբ','խառնել','հավ','աքլոր','ապացույց','մեղադրանք','հեռանալ','րոպե','ժամ','գրամ','կիլոգրամ','տարի','դար','վայրկյան',
    'մեղադրանք','դասամիջոց','սերիա','եթերաշրջան','լսել','ճիշտ','չեմպիոն','հարուստ','աղքատ','համեստ','ձու','ձվածեղ','ֆոն',
    'վատ','մանկապարտեզ','երեխա','շփվել','մատուցող','հիանալ','կանչել','ջուր','բաժակ','բռնել','կախիչ','ինքնասպան','ակնոց',
    'կնճիռ','հետաքրքիր','սենյակ','գովազդ','կաթ','կով','կերակուր','շենք','գնդակ','գորշ','մութ','մռայլ','մուկ','մկնիկ','ականջակալ',
    'մաստակ','դիմակ','գալ','փախնել','անտառ','ձողիկ','զբոսնել','մեջտեղ','միջավայր','արջ','գլուխ','ուտել','ատամ','լյարդ'],
    football: ['Ռեալ Մադրիդ','Բարսելոնա','Ատլետիկո Մադրիդ','Վալենսիա','Վիլիառեալ','Սեվիլիա','Էլչե','Խետաֆե','Ատլետիկ Բ','Լեվանտե',
    'Ռեալ Բետիս','Լա Լիգա','Էսպանյոլ','Սեգունդա','Դեպորտիվո','Պրիմիեռ Լիգա','Լիվեռպուլ','Ման Սիթի','Ման Յունայթեդ','Չելսի','Արսենալ',
    'Տոտենհեմ','Վեստ հեմ','Շեֆիլդ','Վեստ Բռոմ','Էվերտոն','Ֆուլհեմ','Սելտա Վիգո','Գռանադա','Ռեալ Բետիս','Օսասունա','Էիբառ','Հուեսկա',
    'Լեսթեռ Սիթի','Աստոն Վիլլա','Քրիստալ Փելաս','Նյուքասլ','Բառնլի','Վուլվերհեմպտոն','Բռայթոն','Լիդս Յունայթեդ','Ինտեռ','Միլան','Յուվենտուս',
    'Լացիո','Ռոմա','Նապոլի','Ատալանտա','Վեռոնա','Սամպդորիա','Սասուոլո','Ուդինեզե','Սպեցիա','Բենեվենտո','Պառմա','Բռոնտե',
    'Բոլոնիա','Ֆիորենտինա','Բավարիա','Լեյպցիգ','Վոլսբուրգ','Բայեռ 04','Բորուսիա Դորտմունդ','Այնտռախտ','Ֆռայբուրգ','Հոֆենհայմ','Գեռտա',
    'Կյոլն','Մայնց','Շալկե 04','Շտուտգարդ','Բորուսիա Մյունխենգլադբախ','ՊՍԺ','Լիոն','Մոնակո','Օլիմպիկ Մարսել','Նիցա','Այաքս',
    'ՊՍՎ','Ֆռայբուրգ','Փյունիկ','Ալաշկերտ','Նոահ','Արարատ Արմենիա','Սերիա Ա','Լիգա 1','Բունդեսլիգա','Լեո ՄԵսսի','Ռոնալդու','Նեյմառ',
    'Մ. Սալահ','Ս. Մանե',],
    // random: ['դուռ'],
}

let thems = Object.keys(words)
let randomThem = Math.floor(Math.random()*thems.length) 
let randomNum = Math.floor(Math.random()*words[thems[randomThem]].length)

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
    randomThem = Math.floor(Math.random()*thems.length)
    randomNum = Math.floor(Math.random()*words[thems[randomThem]].length)
    word.innerHTML = words[thems[randomThem]][randomNum]

    let gameTimer = setInterval(()=>{
        if(Number(timer.innerHTML) > 0) timer.innerHTML = Number(timer.innerHTML) - 1
        else {
            clearInterval(gameTimer)
            endGame()
        }
    },1000)
})

trueAnswer.addEventListener('click',function() {
    randomThem = Math.floor(Math.random()*thems.length)
    randomNum = Math.floor(Math.random()*words[thems[randomThem]].length)
    word.innerHTML = words[thems[randomThem]][randomNum]
    if(currentTeam == 0) t1_count++
    else t2_count++ 
})

falseAnswer.addEventListener('click',function() {
    randomThem = Math.floor(Math.random()*thems.length)
    randomNum = Math.floor(Math.random()*words[thems[randomThem]].length)
    word.innerHTML = words[thems[randomThem]][randomNum]
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