const menuBtn=document.querySelector(".navigation__toggle"),menuNav=document.querySelector(".navigation");menuBtn&&menuBtn.addEventListener("click",(e=>{e.preventDefault(),menuNav.classList.toggle("navigation--opened")})),document.querySelector(".no-js")&&document.querySelector(".no-js").classList.remove("no-js");