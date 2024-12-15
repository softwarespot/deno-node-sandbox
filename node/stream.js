import { parse } from 'querystring';
import * as readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
});

rl.on('line', (line) => {
    console.log(JSON.parse(line));
});

rl.on('close', () => {
    console.log('Processing was completed');
});

process.on('SIGINT', function () {
    console.log('CTRL+C was intercepted');
    process.exit(0);
});
