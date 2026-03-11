const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("note") || "";
}

function updateNotes(){
    localStorage.setItem("note", notesContainer.innerHTML);
}

showNotes();

createBtn.addEventListener("click", function(){

    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");

    img.src = "images/delete.png";

    inputBox.appendChild(img);
    notesContainer.appendChild(inputBox);

    inputBox.focus();

    updateNotes();
});

notesContainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateNotes();
    }
});

notesContainer.addEventListener("keyup", ()=>{
    updateNotes();
});