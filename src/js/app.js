const sideNav = document.querySelectorAll(".side-nav .side-nav-1")
const subSideNav = document.querySelector(".sub-side-nav")
const subSideNavList = document.querySelectorAll(".sub-side-nav li")


for (let element of sideNav) {
    element.addEventListener("click", (e) => {
        sideNav.forEach(item => item.classList.remove("active"))
        element.classList.add(("active"))
        console.log(element);
        element.parentElement.lastElementChild.nodeName.toLocaleLowerCase() == 'ul' ?
            element.parentElement.lastElementChild.classList.toggle("down"):
            subSideNav.classList.remove("down")

        console.log(subSideNav);

    })
}

for (let element of subSideNavList) {
    element.addEventListener("click", (e) => {
        subSideNavList.forEach(item => item.classList.remove("active"))
        element.classList.add(("active"))

    })
}