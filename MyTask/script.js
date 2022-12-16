showNotes();

let addBtn =  document.getElementById("addTask")

addBtn.addEventListener("click",function() {
    let addText = document.getElementById("taskText")
    let notes = localStorage.getItem("notes")

    if(notes == null ){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes);
    }


    notesObj.push(addText.value)
    localStorage.setItem("notes")

    addText.value = ""

    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes")
    if(notes == null){
        notesObj = []
    }else{
        notesObj= JSON.parse(notes)
    }
    html =""

    notesObj.forEach(element, index => {
        
    });
}