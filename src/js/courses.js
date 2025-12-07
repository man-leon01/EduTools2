const coursesPython = [
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/psaDHhZ0cPs?si=1H1DYhDLeytdDzSK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/nvyX8JfoOWY?si=pnIKxDAN3qHe4B6P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/_AgUOsvMt8s?si=e2FrdlmxXDslmEf8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/kyxF5eH3Kic?si=QExC-DkZYSMV2PWZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/BrknhzrHm8w?si=u9qWHH5PKaklxBR6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/sgJt64iTOYM?si=z9GyIw13sE2rVY3S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
]

const displayVideo = document.querySelector("#courses .display-video")
const coursesLists = document.querySelectorAll("#courses .lists .list")


coursesLists.forEach(element =>{
    element.addEventListener("click", (e) => {
        e.stopPropagation()
        let num = parseInt(element.getAttribute("data-id"));
        coursesLists.forEach(item => item.classList.remove("active"))
        element.classList.add("active")
        displayVideo.innerHTML = coursesPython[num]
        // console.log(num);
    })
})