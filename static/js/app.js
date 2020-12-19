function didClickBuild(link) {
    if (!link) { return }

    const data = link.dataset || {};
    const img = data.img;

    if (!img) { return }

    const filepath = "/static/img/code/" + img;

    const imageNode = document.querySelector(".examples img");

    const oldActive = document.querySelector(".examples a.active");
    if (oldActive) {
        oldActive.classList.remove("active");
    }

    link.classList.add("active");
    imageNode.src = filepath;
    console.log(imageNode);
}
