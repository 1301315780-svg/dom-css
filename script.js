console.log("Script started");

function changeStyle() {
    console.log("click");

    let p = document.getElementById("text");

    p.innerText = "The text has been changed";
    p.style.color = "beige";
    p.style.fontSize = "40px";
    p.style.border = "4px solid Green";
    p.style.backgroundColor = "green";
}

function resetStyle() {
    console.log("click");

    let p = document.getElementById("text2");
    
    p.innerText = "Wow W0w W0w Wow";
    p.style.color = "Red";

}