import { app as serverEn } from './server/en/server.mjs';
import { app as serverFr } from './server/fr/server.mjs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function run() {
  const port = process.env.PORT || 4000;
  const server = express();

  server.use((req, res, next) => {
    if (req.path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
    next();
  });

  server.use('/fr', express.static(path.join(__dirname, 'browser/fr')));
  server.use('/fr', serverFr());
  server.use('/en', express.static(path.join(__dirname, 'browser/en')));
  server.use('/en', serverEn());

  server.get('*', (req, res) => {
    if (req.path.startsWith('/fr')) {
      res.sendFile(path.join(__dirname, 'browser/fr/index.html'));
    } else {
      res.sendFile(path.join(__dirname, 'browser/en/index.html'));
    }
  });

  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}/en`);
  });
}

run();
