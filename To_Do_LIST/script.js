const inputText=document.getElementById("input-box");
const listItem =document.getElementById("list_container");

function addTask(){
    if(inputText.value === ''){
        alert("You Must Enter the Task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputText.value;
        listItem.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
            inputText.value='';
        saveList();
}

listItem.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveList();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveList();
    }
},false);


function saveList(){
    localStorage.setItem("data",listItem.innerHTML);
}

function showData(){
    listItem.innerHTML=localStorage.getItem("data");
}
showData();