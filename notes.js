const fs = require("fs");
const getNotes = function () {
  console.log(loadNotes());
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  console.log(notes);
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicateNotes.length !== 0) {
    console.log("title already taken");
  } else {
    notes.push({ title: title, body: body });
    saveNotes(notes);
  }
};

const removeNotes = function (title) {
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

const saveNotes = function (notes) {
  const newJSON = JSON.stringify(notes);
  const writeFile = fs.writeFileSync("notes.json", newJSON);
};

const loadNotes = function () {
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
  removeNotes: removeNotes
};
