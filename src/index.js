const readline = require('readline-sync');

function start() {
    const content = {};

    content.searchTerm = askAndReturnSearchTerm();

    function askAndReturnSearchTerm() {
        return readline.question('Informe o time que voce gostaria de adicionar no Calendar: ');
    }

    console.log(content);
}

start();