import {} from 'dotenv/config';

import app from './app.js';
import atlas from './config/Atlas/AtlasCFG.js';

const args = process.argv.slice(2);

function param(p) {
    const index = args.indexOf(p);
    return args[index + 1];
}

const PORT = param('--port') || 8080;

app.listen( PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
    console.log('Conectándose con Atlas:', atlas);
});