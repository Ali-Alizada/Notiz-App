function getNoteTemplate(idnex) {
  return `
    <p>
      <b>${notesTitles[idnex]}</b><br>${notes[idnex]}
      <button class="archivNote-btn left" onclick="notetoArchiv(${idnex})">A</button>
      <button class="notetoTrash-btn right" onclick="notetoTrash(${idnex})">P</button>
    </p>`;
}

function getArchivNoteTemplate(idnex) {
  return `
    <p>
      <b>${archivNotesTitles[idnex]}</b><br>${archivNotes[idnex]}
      <button class="restore-btn left" onclick="archivToNotes(${idnex})">N</button>
      <button class="deleteNote-btn right" onclick="archivToTrash(${idnex})">P</button>
    </p>`;
}

function getTrashNoteTemplate(idnex) {
  return `
    <p>
      <b>${trashNotesTitles[idnex]}</b><br>${trashNotes[idnex]}
      <button class="restore-btn left" onclick="trashToNotes(${idnex})">N</button>
      <button class="deleteNote-btn right" onclick="deleteNote(${idnex})">X</button>
    </p>`;
}