import app from './app.js';
import atlas from './config/Atlas/AtlasCFG.js';

import {} from 'dotenv/config';

function param(p) {
    const index = process.argv.indexOf(p);
    return process.argv.slice(2)[index + 1];
}

const PORT = param('--port') || 8080;

app.listen( PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
    console.log('Conectándose con Atlas:', atlas);
});