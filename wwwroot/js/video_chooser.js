const path = "res/video/"
const videos = {
    "initiated" : false,
    "progress": -1,
    "num_of_files": -1,
    "sources": [],
    "solutions": []
}

function init_chooser() {
    console.log(paths)

    for (let i = 0; i < paths.length; i++) {
        const source = path + paths[i]
        videos.sources.push(source)

    }
    if (shuffle) {
        videos.sources = videos.sources.sort(() => Math.random() - 0.5)
    }
    for (let i = 0; i < paths.length; i++) {
        const sol = videos.sources[i].split("/")[2].split(".")[0]
        videos.solutions.push(sol.toString().replaceAll("-", " "))
    }

    videos.num_of_files = videos.sources.length
    videos.initiated = true
}

function get_next_video_path() {
    if (videos.initiated === false) return -3;

    videos.progress++
    if (videos.progress >= videos.num_of_files) return -2
    if (videos.progress < 0) return -1;
    post_solution(get_sol())

    return get_video_path()
}

let get_video_path = function () {
    return videos.sources[videos.progress]
}

let get_sol = function () {
    return videos.solutions[videos.progress]
}
