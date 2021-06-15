const tabs = document.querySelectorAll(".team__info-teams__life");
const person = document.querySelectorAll(".team__info-teams__gallery-item-img");
const portret = document.querySelector(".team__info-photo__img");
const cards = document.querySelectorAll(".team__info-teams__gallery-item");

person.forEach((item) => {
    item.addEventListener("click", (e) => {
        tabs.forEach((element) => {
            element.classList.remove("active_person");
        });
        tabs[
            Array.from(person).indexOf(e.target) == tabs.length - 1 ?
            0 :
            Array.from(person).indexOf(e.target) + 1
        ].classList.add("active_person");

        const src = item.getAttribute("src");
        portret.setAttribute("src", src);
        cards.forEach((item) => {
            item.classList.add("active_person");
        });
        cards[Array.from(person).indexOf(e.target)].classList.remove("active_person");
    });
});