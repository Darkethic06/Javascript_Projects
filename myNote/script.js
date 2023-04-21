let addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click',()=>{
    // console.log('clicked')

    let addText = document.getElementById('addText')
    let notes = localStorage.getItem('notes')

    if(notes== null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes)
    }

    notesObj.push(addText.value)

    addText.value = ""
    localStorage.setItem('notes',JSON.stringify(notesObj))

    loadNotes()
})


function loadNotes(){

    let notesElem = document.getElementById('notes')
    let notes = localStorage.getItem('notes')

   if(notes== null){
        notesObj = []
    }else{
        notesObj = JSON.parse(notes)
    }

    html = ""

    notesObj.forEach((element,index) => {
        html +=`
        <div class="col-md-4">
            <div class="card my-2">
                <div class="card-body">
                    <h5 class="card-title">${index+1}</h5>
                    <p class="card-text">${element}</p>
                    <button class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        </div>
        ` 
    });

    notesElem.innerHTML = html

}