import 'dotenv/config';

import { app } from './app.js';

const port = Number(process.env.PORT ?? 5000);

if (!Number.isInteger(port) || port <= 0 || port > 65535) {
  throw new Error(`Invalid PORT configuration: ${process.env.PORT}`);
}

app.listen(port, () => {
  console.log(`SyncDoc server running at http://localhost:${port}`);
});