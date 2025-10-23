let notesTitles = ["Aufgaben", "Einkauf"];
let notes = ["Banane kaufen", "Milch besorgen"];
let archivNotes = [];
let archivNotesTitles = [];
let trashNotes = [];
let trashNotesTitles = [];

function init() {
  getFromLocalStorage();
  renderNotes();
  renderTrashNotes();
  renderArchivNotes();
}

function saveData() {
  let noteTitleRef = document.getElementById("note-title");
  let noteInputRef = document.getElementById("note-input");
  let titleValue = noteTitleRef.value.trim();
  let noteValue = noteInputRef.value.trim();

  if (titleValue !== "" && noteValue !== "") {
    notesTitles.push(titleValue);
    notes.push(noteValue);
  }

  saveToLocalStorage();
  renderNotes();
  renderTrashNotes();
  renderArchivNotes();
  noteTitleRef.value = "";
  noteInputRef.value = "";
}

function saveToLocalStorage() {
  localStorage.setItem("notesTitles", JSON.stringify(notesTitles));
  localStorage.setItem("notes", JSON.stringify(notes));
  localStorage.setItem("archivNotes", JSON.stringify(archivNotes));
  localStorage.setItem("archivNotesTitles", JSON.stringify(archivNotesTitles));
  localStorage.setItem("trashNotes", JSON.stringify(trashNotes));
  localStorage.setItem("trashNotesTitles", JSON.stringify(trashNotesTitles));
}

function getFromLocalStorage() {
  let storedTitles = localStorage.getItem("notesTitles");
  let storedNotes = localStorage.getItem("notes");
  let storedArchivNotes = localStorage.getItem("archivNotes");
  let storedArchivNotesTitles = localStorage.getItem("archivNotesTitles");
  let storedTrashNotes = localStorage.getItem("trashNotes");
  let storedTrashNotesTitles = localStorage.getItem("trashNotesTitles");

  notesTitles = storedTitles ? JSON.parse(storedTitles) : [];
  notes = storedNotes ? JSON.parse(storedNotes) : [];
  archivNotes = storedArchivNotes ? JSON.parse(storedArchivNotes) : [];
  archivNotesTitles = storedArchivNotesTitles ? JSON.parse(storedArchivNotesTitles) : [];
  trashNotes = storedTrashNotes ? JSON.parse(storedTrashNotes) : [];
  trashNotesTitles = storedTrashNotesTitles ? JSON.parse(storedTrashNotesTitles)  : [];
}

function renderNotes() {
  const content = document.getElementById("content");
  content.innerHTML = "";
  for (let idnex = 0; idnex < notes.length; idnex++) {
    content.innerHTML += getNoteTemplate(idnex);
  }
}

function renderArchivNotes() {
  const archiv = document.getElementById("archiv-note");
  archiv.innerHTML = "";
  for (idnex = 0; idnex < archivNotes.length; idnex++) {
    archiv.innerHTML += getArchivNoteTemplate(idnex);
  }
}

function renderTrashNotes() {
  const trash = document.getElementById("trash-note");
  trash.innerHTML = "";
  for (let idnex = 0; idnex < trashNotes.length; idnex++) {
    trash.innerHTML += getTrashNoteTemplate(idnex);
  }
}
// -------- Templates kann/soll hier rein ----------
function addNote() {
  const titleRef = document.getElementById("note-title");
  const noteRef = document.getElementById("note-input");
  // let title = titleRef.value.trim();
  // let note = noteRef.value.trim();

  // if (!note) return alert("Bitte gib eine Notiz ein!");

  // notes.push(note);
  // notesTitles.push(title || "Ohne Titel");
  // titleRef.value = "";
  // noteRef.value = "";
  renderNotes();
}

function notetoArchiv(idnex) {
  archivNotes.push(notes.splice(idnex, 1)[0]);
  archivNotesTitles.push(notesTitles.splice(idnex, 1)[0]);
  renderNotes();
  renderArchivNotes();
  saveToLocalStorage();
}

function notetoTrash(idnex) {
  trashNotes.push(notes.splice(idnex, 1)[0]);
  trashNotesTitles.push(notesTitles.splice(idnex, 1)[0]);
  renderNotes();
  renderTrashNotes();
  saveToLocalStorage();
}

function archivToNotes(idnex) {
  notes.push(archivNotes.splice(idnex, 1)[0]);
  notesTitles.push(archivNotesTitles.splice(idnex, 1)[0]);
  renderNotes();
  renderArchivNotes();
  saveToLocalStorage();
}

function archivToTrash(idnex) {
  trashNotes.push(archivNotes.splice(idnex, 1)[0]);
  trashNotesTitles.push(archivNotesTitles.splice(idnex, 1)[0]);
  renderNotes();
  renderArchivNotes();
  renderTrashNotes();
  saveToLocalStorage();
}

function trashToNotes(idnex) {
  notes.push(trashNotes.splice(idnex, 1)[0]);
  notesTitles.push(trashNotesTitles.splice(idnex, 1)[0]);
  renderNotes();
  renderTrashNotes();
  saveToLocalStorage();
}

function deleteNote(idnex) {
  trashNotes.splice(idnex, 1);
  trashNotesTitles.splice(idnex, 1);
  renderNotes();
  renderTrashNotes();
  saveToLocalStorage();
}

