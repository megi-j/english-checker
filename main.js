let submit = document.querySelector('.submit');
let allCorrectAnswer = document.querySelectorAll('.secondAnswer');
let resultText = document.querySelector('.resultText');


submit.addEventListener('click', function(e){
    e.preventDefault();
    let correctAnswerArr = [];
    for(let i = 0; i < allCorrectAnswer.length; i++){
        if(allCorrectAnswer[i].checked){
            correctAnswerArr.push(allCorrectAnswer[i])
        } 
    }
    submit.disabled = true;
    resultText.innerHTML = "You have " + (correctAnswerArr.length / 8) * 100 + " % correct answers";
})