//Scroll The Links
let links = document.querySelectorAll(".main-nav li .lin");

links.forEach((link) => {
    link.addEventListener("click", (li) => {
        li.preventDefault();
        document.querySelector(`#${li.target.dataset.scroll}`).scrollIntoView({
            behavior: "smooth",
        });
        console.log();
    });
});

let theProgress = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let startStop = false;
window.onscroll = function() {
    if (window.scrollY >= section.offsetTop - 100) {
        theProgress.forEach((el) => {
            el.style.width = el.dataset.pro;
        });
    }

    if (window.scrollY >= stats.offsetTop) {
        if (!startStop) {
            countNumber();
        }
        startStop = true;
    }
};

// #.........................
let countDownData = new Date("Dec 31 , 2022 23:59:59").getTime();
// console.log(countDownData)

let counter = setInterval(() => {
    //get Data now
    let dataNow = new Date().getTime();
    //differnt date bettwen datanow and countDownData
    let dataDiff = countDownData - dataNow;

    //get Time Unites
    //get day
    let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
    let houres = Math.floor(
        (dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let mintes = Math.floor((dataDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconde = Math.floor((dataDiff % (1000 * 60 * 60)) / 1000);

    document.querySelector(".day").innerHTML = days;
    document.querySelector(".houres").innerHTML = houres;
    document.querySelector(".mintes").innerHTML = mintes;
    document.querySelector(".second").innerHTML = seconde;
    if (dataDiff < 0) {
        clearInterval(counter);
    }
}, 1000);

// #.........................
//Count The Number
let numberCount = document.querySelectorAll(".stats .box  > .number");
let stats = document.querySelector(".stats ");

function countNumber() {
    numberCount.forEach((e) => {
        let data = e.dataset.number;
        let counts = setInterval(function() {
            e.textContent++;
            if (e.textContent === data) {
                clearInterval(counts);
            }
        }, 1000 / data);
    });
}