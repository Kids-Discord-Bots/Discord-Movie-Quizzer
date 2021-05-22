const start = document.getElementById("start-button")
const video_c = document.getElementById("video-container")
const video = document.getElementById("video")
const video_sol = document.getElementById("video-solution")

start.addEventListener("click", async function () {
    start.children[0].setAttribute("class", "visually-hidden")
    start.children[1].setAttribute("class", "visible")
    start.children[2].setAttribute("class", "spinner-grow spinner-grow-sm visible")
    const progress = await get_progress()
    console.log("Progress: " + progress)




})