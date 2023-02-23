
(function () {
    const burgerButton = document.getElementById("burger");
    const navList = document.getElementById("nav-list");
    const lettersLink = document.getElementById("letters-link");
    const numbersLink = document.getElementById("numbers-link");
    const letters = document.getElementById("letters");
    const numbers = document.getElementById("numbers");


    burgerButton.addEventListener("click", (event) => {
        navList.classList.toggle("open")
        navList.classList.toggle("nav-hidden")
    })


    lettersLink.addEventListener("click", (event) => {
        letters.style.display = "block";
        numbers.style.display = "none"
        navList.classList.toggle("open")
        navList.classList.toggle("nav-hidden")
        event.preventDefault();
    })

    numbersLink.addEventListener("click", (event) => {
        numbers.style.display = "block";
        letters.style.display = "none"
        navList.classList.toggle("open")
        navList.classList.toggle("nav-hidden")
        event.preventDefault();
    })

    
            
    





})();