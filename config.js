const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PmZmFKqY#LICZTJq9rysEIePiUQuTYSk7_g23TIspqbMw5ZnPcVg", // Add your session id
MONGODB: process.env.MONGODB || "mongodb+srv://nikhilbiju995:4ZbwWzKWLOwys3wt@cluster0.3gyuu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", // Add your mongodb url
};
