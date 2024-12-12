let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
let header = document.querySelector('.header-2');
menu.addEventListener("click",() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.addEventListener("scroll",() => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 150){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
});
window.addEventListener("scroll",() => {
    let header = document.querySelector('.header-2');
    header.classList.toggle("sticky",window.scrollY > 0);
})

let countDate = new Date('oct 30, 2025 00:00:00').getTime();

function countDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) /(hour));
    let m = Math.floor((gap % (hour)) /(minute));
    let s = Math.floor((gap % (minute)) /(second));

    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(() => {
    countDown();
},1000);



// let cartBtn = document.querySelector(".fas fa-shopping-cart");
// cartBtn.addEventListener("click", () => {
    
// });



// // scroll to top button 

// const scrollElement = document.createElement("div");
// scrollElement.classList.add("scrollTop-style");
// scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;

// const footerElem = document.querySelector(".footer");
// footerElem.after(scrollElement);