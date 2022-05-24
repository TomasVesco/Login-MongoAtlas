import app from './app.js';
import atlas from './config/Atlas/AtlasCFG.js';

import {} from 'dotenv/config';

const PORT = 8080;

app.listen( PORT, () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
    console.log('Conectándose con Atlas:', atlas);
});