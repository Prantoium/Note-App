showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
  let addTxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");

  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);

  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
    
    showNotes();
    
});
function showNotes() {
  let notes = localStorage.getItem("notes");

  if (notes === null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach((element, index) => {
    html += `<div class="noteCard my-2 mx-2" style="width: 18rem;">
 
  <div class="card-body">
    <h5 class="card-title">Note ${index + 1}</h5>
    <p class="card-text">${element}</p>
    <button id="${index}" class="btn btn-primary" onclick="deleteNotes(this.id)">Delete note</button>
  </div>
</div>`;
  });
  let noteElement = document.getElementById("notes");
    if (notesObj.length !== 0) {
      noteElement.innerHTML = html;
   
  } else {
     noteElement.innerHTML = `Nothing to show! Use "Add your Note" section above to add notes.`;
  }
}

function deleteNotes(index) {
   
     let notes = localStorage.getItem("notes");

     if (notes === null) {
       notesObj = [];
     } else {
       notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

let search = document.getElementById("srchTxt");
search.addEventListener("input", function () {
    let inputValue = search.value.toLowerCase();
    
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(element => {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputValue)) {
            element.style.display = "block";
        }
        else {
             element.style.display = "none";
        }
    });
})