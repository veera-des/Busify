// ───────── server.js ─────────
const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the Frontend folder
const frontPath = path.join(__dirname, '../Frontend'); // Adjust if needed
app.use(express.static(frontPath));

// Serve index.html as the root page
app.get('/', (_, res) => {
  res.sendFile(path.join(frontPath, 'index.html'));
});

// Start server
const PORT = 5000;
app.listen(PORT, () =>
  console.log(`🚀 Frontend served at http://localhost:${PORT}`)
);
