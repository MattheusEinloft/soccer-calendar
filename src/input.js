const readline = require('readline-sync');

const input = askAndReturnSearchTerm();

function askAndReturnSearchTerm() {
    return readline.question('Informe o time que voce gostaria de adicionar no Calendar: ');
}

module.exports = input;