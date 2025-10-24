
function getNoteTemplate(index) {
  return `
    <p>
      <b>${allNotes.notesTitles[index]}</b><br>${allNotes.notes[index]}
      <button class="archivNote-btn left" onclick="moveNote(${index}, 'notes', 'archivNotes')">A</button>
      <button class="notetoTrash-btn right" onclick="moveNote(${index}, 'notes', 'trashNotes')">P</button>
    </p>`;
}

function getArchivNoteTemplate(index) {
  return `
    <p>
      <b>${allNotes.archivNotesTitles[index]}</b><br>${allNotes.archivNotes[index]}
      <button class="restore-btn left" onclick="moveNote(${index}, 'archivNotes', 'notes')">N</button>
      <button class="deleteNote-btn right" onclick="moveNote(${index}, 'archivNotes', 'trashNotes')">P</button>
    </p>`;
}

function getTrashNoteTemplate(index) {
  return `
    <p>
      <b>${allNotes.trashNotesTitles[index]}</b><br>${allNotes.trashNotes[index]}
      <button class="restore-btn left" onclick="moveNote(${index}, 'trashNotes', 'notes')">N</button>
      <button class="deleteNote-btn right" onclick="deleteNote(${index})">X</button>
    </p>`;
}