import { app as serverEn } from './server/en-US/server.mjs';
import { app as serverFr } from './server/fr-ca/server.mjs';
import path from "node:path";
import {fileURLToPath} from "node:url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory


const express = require('express');

function run() {
  const port = process.env.PORT || 4000;
  const server = express();


  server.use('/fr-ca', serverFr());
  server.use('/en-US', serverEn());
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
