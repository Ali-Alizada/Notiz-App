let allNotes = {
  notesTitles: ["Aufgaben", "Einkauf"],
  notes: ["Banane kaufen", "Milch besorgen"],
  archivNotesTitles: [],
  archivNotes: [],
  trashNotesTitles: [],
  trashNotes: [],
};

function moveNote(index, startKey, destinationKey) {
  allNotes[destinationKey].push(allNotes[startKey].splice(index, 1)[0]);
  allNotes[destinationKey + "Titles"].push(
    allNotes[startKey + "Titles"].splice(index, 1)[0]
  );

  renderNotes();
  renderArchivNotes();
  renderTrashNotes();
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("allNotes", JSON.stringify(allNotes));
}

function getFromLocalStorage() {
  const stored = JSON.parse(localStorage.getItem("allNotes"));
  if (stored) allNotes = stored;
}

function renderNotes() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  for (let index = 0; index < allNotes.notes.length; index++) {
    content.innerHTML += getNoteTemplate(index);
  }
}

function renderArchivNotes() {
  const archiv = document.getElementById("archiv-note");
  archiv.innerHTML = "";
  for (let index = 0; index < allNotes.archivNotes.length; index++) {
    archiv.innerHTML += getArchivNoteTemplate(index);
  }
}

function renderTrashNotes() {
  const trash = document.getElementById("trash-note");
  trash.innerHTML = "";
  for (let index = 0; index < allNotes.trashNotes.length; index++) {
    trash.innerHTML += getTrashNoteTemplate(index);
  }
}
// Templates kann hier rein!
function addNote() {
  const titleRef = document.getElementById("note-title");
  const noteRef = document.getElementById("note-input");
  let title = titleRef.value.trim();
  let note = noteRef.value.trim();

  if (!note) {
    return false;
  }
  allNotes.notes.push(note);
  allNotes.notesTitles.push(title || "Ohne Titel");

  titleRef.value = "";
  noteRef.value = "";
  saveToLocalStorage();
  renderNotes();

  return false; // verhindert Seitenreload
}

function deleteNote(index) {
  allNotes.trashNotes.splice(index, 1);
  allNotes.trashNotesTitles.splice(index, 1);
  renderTrashNotes();
  saveToLocalStorage();
}

function init() {
  getFromLocalStorage();
  renderNotes();
  renderArchivNotes();
  renderTrashNotes();
}
