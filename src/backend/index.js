const { ipcMain } = require('electron')

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths);

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