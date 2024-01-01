const { readFile, writeFile } = require('fs');


readFile('./content/first.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    const first = data;
    readFile('./content/second.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err)
            return
        }
        const second = data;
        writeFile(
            './content/fouth.txt', 
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(result);
            }
        )
    })
})