const fs = require('fs')
const getNotes = function (){
    return "Your notes..."
}

const addNotes = function(title, body) {
    const notes = loadNotes();
    console.log(notes)
   const duplicateNotes = notes.filter(() => {
       return notes.title === title
   })
   if (duplicateNotes){
    console.log("title already taken")
   }
   else{
    notes.push({title: title, body: body})

    saveNotes(notes);
   }
}

const saveNotes = function (notes) {
    const newJSON = JSON.stringify(notes);
    const writeFile = fs.writeFileSync('notes.json', newJSON);
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataString = dataBuffer.toString();
        const dataObject = JSON.parse(dataString);
        return dataObject;
    } catch (e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
}