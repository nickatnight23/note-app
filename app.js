const chalk = require('chalk')
const { demandOption } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

//create add command
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
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list the information',
    handler: function () {
        console.log('list all notes')
    }
})

// create read command
yargs.command({
    command: 'read',
    describe: 'read the note',
    handler: function () {
        console.log('read the content')
    }
})

yargs.parse()





