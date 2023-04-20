const btn = document.querySelector("#btn");
const header = document.querySelector("#advice-id");
const advice = document.querySelector("#advice");
const APIurl = 'https://api.adviceslip.com/advice';
const btnToggle = document.querySelector(".toggle__switch");
const body = document.querySelector(".mode");
// Get the existing icon element
const icon = document.querySelector('.material-icons-outlined');
let isDarkMode;

const randomAdvice = async () => {
    const res = await fetch(APIurl, {cache: "no-cache"});
    const data = await res.json();
    // const {slip} = data; which leads to slip.id instead of long data.slip.id
    header.innerHTML = `advice # ${data.slip.id}`;
    advice.innerHTML = data.slip.advice;
    btnDisability();
    setTimeout(() => removeDisability(), 3000);
}

//Button disability for cashe purposes
const btnDisability = () =>{
    btn.classList.add("disable");
    btn.setAttribute("disabled","")
    btn.setAttribute(
        "title",
        "Sorry Mate 😓, You have to wait 3 seconds to click for the next advice");
}

const removeDisability = () => {
    btn.classList.remove("disable");
    btn.removeAttribute("disabled","")
    btn.removeAttribute("title");
}


// DARK MODE: his code is better
const darkModeChange = () =>{

  icon.textContent = isDarkMode ? 'light_mode' : 'dark_mode';

  if (isDarkMode) {
    icon.classList.add('light-mode');
  } else {
    icon.classList.remove('light-mode');
  }
}

const toggleToggleCheck = (e) => {
    const button = e.target.closest(".toggle__switch");

    const alreadyChecked = button.classList.contains("checked"); //true or false
    button.classList.toggle("checked");
    body.classList.toggle("day-mode");

    if (alreadyChecked) {
        button.setAttribute("aria-checked", false);
        isDarkMode = false;
        darkModeChange(isDarkMode);
    } else {
        button.setAttribute("aria-checked", true);
        isDarkMode = true;
        darkModeChange(isDarkMode);
    }
};


btnToggle.addEventListener("click", toggleToggleCheck);





// btnToggle.addEventListener("click", function(e){

//     const btnSwitch = e.target.closest(".toggle__switch");

//     if(!btnSwitch.classList.contains("checked")){
//         btnSwitch.classList.add("checked");
//         btnSwitch.setAttribute("aria-checked",true);
//     }else{
//         btnSwitch.classList.remove("checked");
//         btnSwitch.setAttribute("aria-checked",false)
//     }
// })



