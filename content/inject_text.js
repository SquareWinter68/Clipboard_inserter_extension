function add_div(text_, counter){
    const elem = document.getElementById("container");
    const new_div = document.createElement("div");
    new_div.id = counter;
    new_div.classList.add("text-line");
    new_div.innerHTML = `<p>${text_}</p>`;
    elem.append(new_div)
    console.log(text_);
}

function add_text_line(){
    navigator.clipboard.readText().then((clip_text) => {
        add_div(clip_text, browser.storage.local.get("counter"))
        console.log(clip_text);
    });
}

add_text_line();