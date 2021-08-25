const fs = require("fs");
const chalk = require('chalk')

const getNotes = () => console.log(loadNotes());

const addNotes = (title, body) => {
  const notes = loadNotes();
  console.log(notes);
  const duplicateNote = notes.find((note) => note.title === title)
  if (!duplicateNote) {
    console.log("title already taken");
  } else {
    notes.push({ title: title, body: body });
    saveNotes(notes);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.blue("Your Notes!"))
  for (note of notes) {
    console.log(note.title, note.body);
  }
}

const removeNotes = (title) => {
  let removed = false;
  const notes = loadNotes();
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].title === title) {
      notes.splice(i, 1);
      removed = true;
    }
  }
  if (removed) {
    console.log("Successfully Removed");
    saveNotes(notes);
  } else {
    console.log("No such note with this title");
  }
};

const saveNotes = (notes) => {
  const newJSON = JSON.stringify(notes);
  const writeFile = fs.writeFileSync("notes.json", newJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataString = dataBuffer.toString();
    const dataObject = JSON.parse(dataString);
    return dataObject;
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes
};
