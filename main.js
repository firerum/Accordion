const wrapper = document.querySelector(".para-wrapper");
const question = document.querySelectorAll(".question");
const title = document.querySelectorAll("h3");
const answer = document.querySelectorAll("p");

function userClickFAQ(e) {
    if (e.target.tagName == "DIV") {
        const show = e.target;
        show.classList.toggle("current");
    } else if (e.target.tagName == "H3") {
        const show = e.target.parentElement;
        show.classList.toggle("current");
    }
}

wrapper.addEventListener("click", userClickFAQ);
