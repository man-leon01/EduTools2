

const main = document.querySelector("main")
const giftName = document.querySelector("#my-gift-1")
const selectItem = document.querySelector(".select-item")
const selectItemSpan = document.querySelector(".select-item>span")
const selectItemSvg = document.querySelector(".select-item svg")
const select = document.querySelector(".select")
const selectItemList = select.lastElementChild.nodeName === 'UL' ? select.querySelector("ul") : div().lastElementChild;
const templatesImages = document.querySelectorAll(".templates img")
const inputBoxName = document.querySelector(".input-custom #name")
const inputBoxColor = document.querySelector(".input-custom #color")
const inputBoxRange = document.querySelector(".input-custom #range")

function div() {
    const ul = document.createElement("ul")
    select.appendChild(ul)
    return select
}


const fontsList = ["Science Gothic", "Bungee Spice", "Stack Sans Text", "Inter", "Dancing Script", "Pacifico", "Delius Unicase", "Sankofa Display", "Creepster", "Rubik Wet Paint", "Rubik Dirt", "Megrim", "Berkshire Swash", "Rock Salt", "Eater", "Montserrat", "Poppins", "Roboto"]


function listItem(item) {
    const li = document.createElement("li")
    li.style.fontFamily = item
    li.textContent = item.trim()
    li.addEventListener("click", () => {
        selectItemSpan.style.fontFamily = item
        giftName.style.fontFamily = item
        selectItemSpan.textContent = item
    })
    selectItemList.appendChild(li)
}

fontsList.forEach(listItem)

selectItem.addEventListener("click", (e) => {
    e.stopPropagation()
    selectItem.classList.toggle("active")
    selectItemSvg.classList.toggle("active")
    selectItemList.classList.toggle("active")
})


for (const element of templatesImages) {
    element.addEventListener("click", (e) => {
        e.stopPropagation()
        const pathImage = e.target.getAttribute("src").split("/").pop()
        giftName.style.background = `url('./src/images/${pathImage}')`
        giftName.style.backgroundPosition = `center`
    })
}

inputBoxName.addEventListener("input", (e) => {
    giftName.lastElementChild.textContent = e.target.value ? e.target.value : "Votre nom"

})

inputBoxColor.addEventListener("input", (e) => {
    giftName.style.color = e.target.value
})

inputBoxRange.addEventListener("input", (e) => {
    giftName.style.fontSize = `${parseInt(e.target.value)}px`
    // console.log(`${parseInt(e.target.value)}px`);
})




// CLICK MAIN
main.addEventListener("click", (e) => {
    e.stopPropagation()
    if (selectItem.classList.contains("active")) {
        selectItem.classList.remove("active")
        selectItemList.classList.remove("active")
        selectItemSvg.classList.remove("active")
    }
})