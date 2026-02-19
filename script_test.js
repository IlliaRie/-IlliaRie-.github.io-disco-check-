let generateBth = document.getElementById("generate");
let first_dice = Math.floor(Math.random() * 5) + 1;
let second_dice = Math.floor(Math.random() * 5) + 1;
let check = document.getElementById("check");
let effect = document.getElementById("effects");
let skill = document.getElementById("skill-name");
let num = Math.floor(Math.random() * 23) + 1;
const skills = ["LOGIC", "ENCYCLOPEDIA", "RHETORIC", "DRAMA", "CONCEPTUALIZATION", "VISUAL CALCULUS",  
                "VOLITION", "INLAND EMPIRE", "EMPATHY", "AUTHORITY", "ESPRIT DE CORPS", "SUGGESTION",  
                "ENDURANCE", "PAIN THRESHOLD", "PHYSICAL INSTRUMENT", "ELECTROCHEMISTRY", "SHIVERS", "HALF LIGHT",  
                "HAND/EYE COORDINATION", "PERCEPTION", "REACTION SPEED", "SAVOIR FAIRE", "INTERFACING", "COMPOSURE" ];
const success_audio = new Audio('Assets/sound/check-success.mp3');
const failure_audio = new Audio('Assets/sound/check-failure.mp3');
    let portrait_img = document.getElementById("portrait");
    let dice_one_img = document.getElementById("dice_one");
    let dice_two_img = document.getElementById("dice_two");

function randomNum() {
    num = Math.floor(Math.random() * 23) + 1;
    first_dice = Math.floor(Math.random() * 5) + 1;
    second_dice = Math.floor(Math.random() * 5) + 1;
    portrait_img.src = "Assets/portaits/portrait_" + (num) + ".png";
    effect.style.backgroundImage = "url('Assets/check/check_spec.png')";
    check.innerText = "";
    check.style.backgroundImage = "none";
    dice_one_img.style.display = "none";
    dice_two_img.style.display = "none";
    generateBth.style.display = "none";
    skill.style.display = "none";

    if (((first_dice + second_dice) > 6)) {
        success_audio.currentTime = 0;
        success_audio.play();
    } else {
        failure_audio.currentTime = 0;
        failure_audio.play();
    }
    setTimeout(function() {changingstuff()}, 1000);
        
}

function changingstuff() {
    dice_one_img.src = "Assets/dice/notif-dice" + first_dice + ".png"; 
    dice_two_img.src = "Assets/dice/notif-dice" + second_dice + ".png"; 
    skill.innerText = skills[num-1];
    if (num < 7) {
        skill.style.backgroundImage = "url('Assets/skill/int.png')";
    } else if (num < 13) {
        skill.style.backgroundImage = "url('Assets/skill/psych.png')";
    } else if (num < 19) {
        skill.style.backgroundImage = "url('Assets/skill/phys.png')";
    } else {
        skill.style.backgroundImage = "url('Assets/skill/flex.png')";
    }
    dice_one_img.style.display = "flex";
    dice_two_img.style.display = "flex";
    generateBth.style.display = "flex";
    skill.style.display = "flex";
    if ((first_dice + second_dice) > 6) {
            check.innerText = "CHECK SUCCESS";
            check.style.backgroundImage = "url('Assets/skill/success.png')";
            effect.style.backgroundImage = "url('Assets/check/check_splat\ 3.png')";
        } else {
            check.innerText = "CHECK FAILURE";
            check.style.backgroundImage = "url('Assets/skill/fail.png')";
            effect.style.backgroundImage = "url('Assets/check/check_splat\ 3.5.png')";
        }
}


window.addEventListener("load", randomNum());
generateBth.addEventListener("click",randomNum);
