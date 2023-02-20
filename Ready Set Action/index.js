function main() {
    const growMe = document.getElementById("grow-me");
    growMe.classList.add("big");

    const shrinkMe = document.getElementById("shrink-me");
    shrinkMe.classList.remove("big");

    const lis = document.querySelectorAll("li");

    for (let li of lis) {
        console.log(li.innerText);
    };

    const fixLink = document.querySelector("a");
    fixLink.setAttribute("href", "https://www.example.com");
    fixLink.innerText = "somewhere";

    const hideMe = document.getElementById("hide-me");
    hideMe.style.display = "none";

    const showMe = document.getElementById("show-me");
    showMe.style.display = "block";

    const getName = document.getElementById("name").value;


    const welcome = document.querySelector("h1");
    welcome.innerText = (`Welcome ${getName}!`)
}