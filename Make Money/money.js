(function () {

    const moneySection = document.getElementById("money")
    const makeMoney = document.getElementById("submitBtn");
    let total = 0;
    let totalValue = document.getElementById("total-value");



    makeMoney.addEventListener("click", () => {
        const howMany = +document.getElementById("input-box1").value;

        function remove(el) {
            var element = el;
            element.remove();
          }


        const radioButtons = document.getElementsByName('coin');
        let whichCoin;

        for (const radioButton of radioButtons) {
            if (radioButton.checked) {
                whichCoin = radioButton;
            }
        }

        if (whichCoin.value === "Quarter") {
            for (let i = 0; i < howMany; i++) {
                const quarter = document.createElement("img");
                quarter.setAttribute("src", "./images/pngfind.com-quarter-png-174755.png");
                quarter.setAttribute("onclick","this.remove()")
                quarter.classList.add("coin25");
                moneySection.append(quarter);
                total += 0.25;
            }
            console.log(whichCoin.value.length)


        } else if (whichCoin.value === "Nickel") {
            for (let i = 0; i < howMany; i++) {
                const nickel = document.createElement("img");
                nickel.setAttribute("src", "./images/pngfind.com-nickel-png-1441025.png");
                nickel.setAttribute("onclick","this.remove()")
                nickel.classList.add("coin5");
                moneySection.append(nickel);
                total += 0.05;
            }
            
        } else if (whichCoin.value === "Dime") {
            for (let i = 0; i < howMany; i++) {
                const dime = document.createElement("img");
                dime.setAttribute("src", "./images/2017-D_Roosevelt_dime_obverse_transparent.png");
                dime.setAttribute("onclick","this.remove()")
                dime.classList.add("coin10");
                moneySection.append(dime);
                total += 0.10;
            }
        } else if (whichCoin.value === "Penny") {
            for (let i = 0; i < howMany; i++) {
                const penny = document.createElement("img");
                penny.setAttribute("src", "./images/Penny-Copper-PNG.png");
                penny.setAttribute("onclick","this.remove()")
                penny.classList.add("coin1");
                moneySection.append(penny);
                total += 0.01;
            }
        } else {
            ""
        }

        totalValue.innerText = (`Total: ${total}`)

        

    })

})();