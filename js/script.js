let random = document.getElementById("randomDate");
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let hard = document.getElementById("hard");
let monday = document.getElementById("1")
let tuesday = document.getElementById("2")
let wednesday = document.getElementById("3")
let thursday = document.getElementById("4")
let friday = document.getElementById("5")
let saturday = document.getElementById("6")
let sunday = document.getElementById("0")
let score = document.getElementById("score")
let correctSound = new Audio("audio/correct-answer.mp3");
let wrongSound = new Audio("audio/wrong-answer.wav");
let counter = 0
let startDate = new Date(2020, 0, 1)
let endDate = new Date(2020, 11, 31)
let easySelected = 1
let mediumSelected = 0
let hardSelected = 0
let tanggal;
let year;
let month;
let date;
let day = 0;

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}


function generateRandomDate(startDate, endDate){
    tanggal = randomDate(startDate, endDate)
    year = tanggal.getFullYear();
    month = tanggal.getMonth();
    date = tanggal.getDate();
    day = tanggal.getDay();
    let textMonth = ""
    switch(month){
        case 0: textMonth = "January";
            break;
        case 1: textMonth = "February";
            break;
        case 2: textMonth = "March";
            break;
        case 3: textMonth = "April";
            break;
        case 4: textMonth = "May";
            break;
        case 5: textMonth = "June"; 
            break;
        case 6: textMonth = "July";
            break;
        case 7: textMonth = "August";
            break;
        case 8: textMonth = "September";
            break;
        case 9: textMonth = "October";
            break;
        case 10: textMonth = "November";
            break;
        case 11: textMonth = "December";
            break;
        }
    random.textContent = date + " " + textMonth + " " + year;
    // console.log(day)
}

generateRandomDate(startDate,endDate)

easy.addEventListener("click", easyDate)
medium.addEventListener("click", mediumDate)
hard.addEventListener("click", hardDate)
monday.addEventListener("click",function(){
    if(day == 1){
        counter++
        score.textContent = counter
        let color = monday.style.backgroundColor
        monday.style.backgroundColor = "green"
        correctSound.play()
        setTimeout(() => {
            monday.style.backgroundColor = color;
        }, 200);
        if(easySelected == 1){
            easyDate()
        }else if(mediumSelected == 1){
            mediumDate()
        }else if(hardSelected == 1){
            hardDate()
        }
    }else{
        counter = 0
        score.textContent = counter
        wrongSound.play()
        let color = monday.style.backgroundColor
        let text = monday.textContent
        monday.style.backgroundColor = "red"
        monday.textContent = "WRONG"
        setTimeout(() => {
            monday.style.backgroundColor = color;
            monday.textContent = text ;
        }, 200);
    }
})
tuesday.addEventListener("click", function(){
    if(day == 2){
        counter++
        score.textContent = counter
        let color = tuesday.style.backgroundColor
        tuesday.style.backgroundColor = "green"
        correctSound.play()
        setTimeout(() => {
            tuesday.style.backgroundColor = color;
        }, 200);
        if(easySelected == 1){
            easyDate()
        }else if(mediumSelected == 1){
            mediumDate()
        }else if(hardSelected == 1){
            hardDate()
        }
    }else{
        counter = 0
        score.textContent = counter
        let color = tuesday.style.backgroundColor
        let text = tuesday.textContent
        wrongSound.play()
        tuesday.style.backgroundColor = "red"
        tuesday.textContent = "WRONG"
        setTimeout(() => {
            tuesday.style.backgroundColor = color;
            tuesday.textContent = text
        }, 200);
    }
})
wednesday.addEventListener("click", function(){
    if(day == 3){
        counter++
        score.textContent = counter
        let color = wednesday.style.backgroundColor
        wednesday.style.backgroundColor = "green"
        correctSound.play()
        setTimeout(() => {
            wednesday.style.backgroundColor = color;
        }, 200);
        if(easySelected == 1){
            easyDate()
        }else if(mediumSelected == 1){
            mediumDate()
        }else if(hardSelected == 1){
            hardDate()
        }
    }else{
        counter = 0
        score.textContent = counter
        let color = wednesday.style.backgroundColor
        let text = wednesday.textContent
        wrongSound.play()
        wednesday.style.backgroundColor = "red"
        wednesday.textContent = "WRONG"
        setTimeout(() => {
            wednesday.style.backgroundColor = color;
            wednesday.textContent = text
        }, 200);
    }
})
thursday.addEventListener("click", function(){
    if(day == 4){
        counter++
        score.textContent = counter
        let color = thursday.style.backgroundColor
        thursday.style.backgroundColor = "green"
        correctSound.play()
        setTimeout(() => {
            thursday.style.backgroundColor = color;
        }, 200);
        if(easySelected == 1){
            easyDate()
        }else if(mediumSelected == 1){
            mediumDate()
        }else if(hardSelected == 1){
            hardDate()
        }
    }else{
        counter = 0
        score.textContent = counter
        let color = thursday.style.backgroundColor
        let text = thursday.textContent
        wrongSound.play()
        thursday.style.backgroundColor = "red"
        thursday.textContent = "WRONG"
        setTimeout(() => {
            thursday.style.backgroundColor = color;
            thursday.textContent = text
        }, 200);
    }
})
friday.addEventListener("click", function(){
    if(day == 5){
        counter++
        score.textContent = counter
        let color = friday.style.backgroundColor
        friday.style.backgroundColor = "green"
        correctSound.play()
        setTimeout(() => {
            friday.style.backgroundColor = color;
        }, 200);
        if(easySelected == 1){
            easyDate()
        }else if(mediumSelected == 1){
            mediumDate()
        }else if(hardSelected == 1){
            hardDate()
        }
    }else{
        counter = 0
        score.textContent = counter
        let color = friday.style.backgroundColor
        let text = friday.textContent
        wrongSound.play()
        friday.style.backgroundColor = "red"
        friday.textContent = "WRONG"
        setTimeout(() => {
            friday.style.backgroundColor = color;
            friday.textContent = text
        }, 200);
    }
})
saturday.addEventListener("click", function(){
    if(day == 6){
        counter++
        score.textContent = counter
        let color = saturday.style.backgroundColor
        saturday.style.backgroundColor = "green"
        correctSound.play()
        setTimeout(() => {
            saturday.style.backgroundColor = color;
        }, 200);
        if(easySelected == 1){
            easyDate()
        }else if(mediumSelected == 1){
            mediumDate()
        }else if(hardSelected == 1){
            hardDate()
        }
    }else{
        counter = 0
        score.textContent = counter
        let color = saturday.style.backgroundColor
        let text = saturday.textContent
        wrongSound.play()
        saturday.style.backgroundColor = "red"
        saturday.textContent = "WRONG"
        setTimeout(() => {
            saturday.style.backgroundColor = color;
            saturday.textContent = text
        }, 200);
    }
})
sunday.addEventListener("click", function(){
    if(day == 0){
        counter++
        score.textContent = counter
        let color = sunday.style.backgroundColor
        sunday.style.backgroundColor = "green"
        correctSound.play()
        setTimeout(() => {
            sunday.style.backgroundColor = color;
        }, 200);
        if(easySelected == 1){
            easyDate()
        }else if(mediumSelected == 1){
            mediumDate()
        }else if(hardSelected == 1){
            hardDate()
        }
    }else{
        counter = 0
        score.textContent = counter
        let color = sunday.style.backgroundColor
        let text = sunday.textContent
        wrongSound.play()
        sunday.style.backgroundColor = "red"
        sunday.textContent = "WRONG"
        setTimeout(() => {
            sunday.style.backgroundColor = color;
            sunday.textContent = text
        }, 200);
    }
})

function easyDate(){
    easySelected = 1
    easy.style.border = "3px solid #1f3dff"
    mediumSelected = 0
    medium.style.border = "none"
    hardSelected = 0
    hard.style.border = "none"
    generateRandomDate(startDate, endDate)
}

function mediumDate(){
    easySelected = 0
    easy.style.border = "none"
    mediumSelected = 1
    medium.style.border = "3px solid #1f3dff"
    hardSelected = 0
    hard.style.border = "none"
    let startDate = new Date(2000, 0, 1)
    let endDate = new Date(2099, 11, 31)
    generateRandomDate(startDate, endDate)
}

function hardDate(){
    easySelected = 0
    easy.style.border = "none"
    mediumSelected = 0
    medium.style.border = "none"
    hardSelected = 1
    hard.style.border = "3px solid #1f3dff"
    let startDate = new Date(1600, 0, 1)
    let endDate = new Date(9999, 11, 31)
    generateRandomDate(startDate, endDate)
}
