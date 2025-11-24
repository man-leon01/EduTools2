import './mygift.js'

const sideNav = document.querySelectorAll(".side-nav .side-nav-1")
const subSideNav = document.querySelector(".sub-side-nav")
const subSideNavList = document.querySelectorAll(".sub-side-nav li")
const menu = document.querySelector("#menu")
const aSide = document.querySelector("aside")
const main = document.querySelector("main")


for (let element of sideNav) {
    element.addEventListener("click", (e) => {
        e.stopPropagation()
        sideNav.forEach(item => item.classList.remove("active"))
        element.classList.add(("active"))
        element.parentElement.lastElementChild.nodeName.toLocaleLowerCase() == 'ul' ?
            element.parentElement.lastElementChild.classList.toggle("down"):
            subSideNav.classList.remove("down")
    })
}

for (let element of subSideNavList) {
    element.addEventListener("click", (e) => {
        e.stopPropagation()
        subSideNavList.forEach(item => item.classList.remove("active"))
        element.classList.add(("active"))

    })
}

menu.addEventListener("click", (e) => {
    e.stopPropagation()
    main.classList.toggle("full")
    aSide.classList.toggle("side")
})


// CLICK MAIN
main.addEventListener("click", () => {
    subSideNav.classList.remove("down")
    aSide.classList.contains("side") ? aSide.classList.remove("side") : null
    main.classList?.remove("full")

})





