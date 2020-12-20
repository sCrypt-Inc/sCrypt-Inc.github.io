function didClickBuild(link) {
    if (!link) { return false  }

    const data = link.dataset || {};
    const img = data.img;

    if (!img) { return false }

    const filepath = "/static/img/code/" + img;

    const imageNode = document.querySelector(".examples img.screenshot");
    const screenshotLink = document.querySelector(".examples .screenshot-link");
    const seeCodeNode = document.querySelector(".examples .see-code");

    const oldActive = document.querySelector(".examples a.active");
    if (oldActive) {
        oldActive.classList.remove("active");
    }

    link.classList.add("active");
    imageNode.src = filepath;

    screenshotLink.href = link.href;
    seeCodeNode.href = link.href;
    seeCodeNode.innerHTML = "See " + link.innerHTML + " code";

    return false;
}

function getNumExamples() {
    return $(".examples .example").length;
}

// this should be a jQuery 1-liner but spent 20 mins on it and got better things to do....
function getActiveExampleIndex() {
    const examples = $(".examples .example");
    let idx = 0;
    for (const example of examples) {
        if (example.classList.contains('active')) {
            return idx;
        }
        idx++;
    }

    return -1;
}

function didClickNextBuild() {
    const num = getNumExamples() - 1;
    const idx = getActiveExampleIndex();
    if (idx === -1) { return }
    if (idx >= num) {
        didClickBuild($(".examples .example").get(0));
    } else {
        didClickBuild($(".examples .example").get(idx + 1));
    }
}

function didClickPreviousBuild() {
    const num = getNumExamples() - 1;
    const idx = getActiveExampleIndex();
    if (idx === -1) { return }
    if (idx <= 0) {
        didClickBuild($(".examples .example").get(num));
    } else {
        didClickBuild($(".examples .example").get(idx - 1));
    }
}
