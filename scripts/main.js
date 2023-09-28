//@ts-check

// Asks the user for their name and sets it as `text_element` text content.
function setUserName(text_element) {
    const name = prompt("Please enter your name.");
    if (!name) {
        setUserName(text_element);
    } else {
        localStorage.setItem("name", name);
        text_element.textContent = `Your Weather, ${localStorage.getItem(
            "name"
        )}`;
    }
}

const image = document.querySelector("img");
// Cycle through images by clicking on them.
image.onclick = () => {
    const src = image.getAttribute("src");

    if (src == "images/cloud.svg") {
        image.setAttribute("src", "images/sun.svg");
    } else {
        image.setAttribute("src", "images/cloud.svg");
    }
};

// Initialize the greeting with the user name.
const heading = document.querySelector("h1");
if (!localStorage.getItem("name")) {
    setUserName(heading);
} else {
    heading.textContent = `Your Weather, ${localStorage.getItem("name")}`;
}

document.querySelector("button").onclick = () => setUserName(heading);

document.URL.