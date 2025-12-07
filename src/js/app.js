import './mygift.js'
import './courses.js'

const sideNav = document.querySelectorAll(".side-nav .side-nav-1")
const subSideNav = document.querySelector(".sub-side-nav")
const subSideNavList = document.querySelectorAll(".sub-side-nav li")
const menu = document.querySelector("#menu")
const aSide = document.querySelector("aside")
const main = document.querySelector("main")
const mainSections = document.querySelectorAll("main section")
const load = document.querySelector("#load")
const toolsSections = document.querySelectorAll("main #tools .cards .card")
const btnToolsSections = document.querySelectorAll("main #tools-video .cards .card>button")
const btnCourses = document.querySelector("#home .cards .card-2>button")


setTimeout(() => {
    load.classList.add("active")
}, 3000);


const obj = {
    home: "home",
    gift: "my-gift",
    tools: "tools",
    toolsVideo: "tools-video",
    courses: "courses",
}

btnCourses.addEventListener("click", (e) => {
    e.stopPropagation()
    displayContainer(btnCourses.getAttribute("data-key"))
    sideNav.forEach(item => {
        if (item.getAttribute("data-key") == "tools") {
            item.classList.add("active");
        }else{
            item.classList.remove("active")
        }
    })
    // console.log(btnCourses.getAttribute("data-key"))
})



function displayContainer(key) {
    if (key in obj) {
        mainSections.forEach(item => item.classList.contains("display") ? item.classList.remove("display") : null)
        // console.log(main.querySelector(`#${obj[key]}`));
        main.querySelector(`#${obj[key]}`).classList.add("display")
        // console.log(main.querySelector(`#${obj[key]}`));
        // console.log(key, mainSections, obj[key]);

    }
}

for (let element of toolsSections) {
    element.addEventListener("click", (e) => {
        e.stopPropagation()

        displayContainer(element.getAttribute("data-key"))
        // console.log(element.getAttribute("data-key"));

    })
}
for (let element of btnToolsSections) {
    element.addEventListener("click", (e) => {
        e.stopPropagation()

        // console.log(element.getAttribute("data-key"));
        displayContainer(element.getAttribute("data-key"))

    })
}

for (let element of sideNav) {
    element.addEventListener("click", (e) => {
        e.stopPropagation()
        sideNav.forEach(item => item.classList.remove("active"))
        element.classList.add(("active"))

        displayContainer(element.getAttribute("data-key"))
        // console.log(element.getAttribute("data-key"));

        aSide.classList.contains("side") ? aSide.classList.remove("side") : null
        main.classList.contains("full") ? main.classList.remove("full") : null
        
        if (element.parentElement.lastElementChild.nodeName.toLocaleLowerCase() == 'ul') {
            // main.classList.contains("full") ? main.classList.remove("full") : null
            element.parentElement.lastElementChild.classList.toggle("down")   
            element.parentElement.lastElementChild.classList.contains("down") ? 
            aSide.classList.add("side") : aSide.classList.remove("side")
        } else {
            subSideNav.classList.remove("down")
        }

    })
}

for (let element of subSideNavList) {
    element.addEventListener("click", (e) => {
        e.stopPropagation()
        subSideNavList.forEach(item => item.classList.remove("active"))
        element.classList.add(("active"))

    })
}

function hoverFunc() {
    aSide.classList.remove("side")
    main.classList.remove("full")
    subSideNav.classList.remove("down")
}


aSide.addEventListener("mouseenter", () => {
    aSide.classList.add("side")
    main.classList.add("full")
})

aSide.addEventListener("mouseleave", hoverFunc)

menu.addEventListener("click", (e) => {
    e.stopPropagation()
    if (main.classList.contains("full") && aSide.classList.contains("side")) {
        main.classList.remove("full")
        aSide.classList.remove("side")
        subSideNav.classList.remove("down")
        aSide.addEventListener("mouseleave", hoverFunc)
    } else {
        main.classList.add("full")
        aSide.classList.add("side")
        aSide.removeEventListener("mouseleave", hoverFunc)
    }
})


// CLICK MAIN
main.addEventListener("click", () => {
    subSideNav.classList.remove("down")
    aSide.classList.contains("side") ? aSide.classList.remove("side") : null
    main.classList?.remove("full")
})





