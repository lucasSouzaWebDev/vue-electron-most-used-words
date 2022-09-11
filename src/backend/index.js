const { ipcMain } = require('electron')

const pathToRows = require('pathToRows')
const prepareData = require('prepareData')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths);

    pathToRows
        .then(rows => prepareData(rows))
        .then(words => console.log(words))
        .then(() => {
            event.reply('process-subtitles', [
                {
                    name: "you",
                    amount: 901,
                },
                {
                    name: "he",
                    amount: 853,
                },
                {
                    name: "she",
                    amount: 457,
                },
                {
                    name: "our",
                    amount: 687,
                },
                {
                    name: "i",
                    amount: 1234,
                },
            ])
        })


})