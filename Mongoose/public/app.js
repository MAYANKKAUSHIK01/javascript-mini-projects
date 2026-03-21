const deleteBtn =document.querySelectorAll(".delete");

deleteBtn.forEach(form=>{
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        if(confirm("Do YOu Want To Delete This massage ?")){
            form.submit();
        }
    })
})