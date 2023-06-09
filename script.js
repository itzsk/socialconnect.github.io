var settingsMenu = document.querySelector(".settings-menu");
var darkBgn = document.getElementById("dark-bgn");

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menuj-height");
}
darkBgn.onclick = function(){
    darkBgn.classList.toggle("dark-bgn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light"){
    darkBgn.classList.remove("dark-bgn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
    darkBgn.classList.add("dark-bgn-on");
    document.body.classList.add("dark-theme");
}
else{
    localStorage.setItem("theme", "light");
}
