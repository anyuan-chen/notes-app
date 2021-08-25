const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Remove the note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function() {
        console.log("List all note")
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Read a note')
    }
})

yargs.parse()