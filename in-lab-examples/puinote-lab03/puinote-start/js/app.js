const noteImageElement = document.querySelector('.notecard-thumbnail');
const noteTitleElement = document.querySelector('.note-title');
const noteBodyElement = document.querySelector('.note-body');

function updateElement() {
  console.log("running updateElement function.");

  noteImageElement.src = "assets/warhol-frog.png";
}

//add event listener
const submitButton = document.querySelector('#btn-submit');
submitButton.addEventListener('click', submitNote)
// the line above is the same as submitButton.onclick = submitNote

//function for event
function submitNote() {
  console.log("This is where we will grab input and then update the notecard.");

  const editorTitle = document.querySelector("#note-editor-title");
  const editorBody = document.querySelector("#note-editor-body");

  noteTitleElement.innerText = editorTitle.value;
  noteBodyElement.innerText = editorBody.value;

  console.log(editorTitle.value);
  console.log(editorBody.value);

  updateElement();
}
