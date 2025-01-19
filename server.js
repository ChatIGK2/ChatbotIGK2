const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from specific directories
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/docs', express.static(path.join(__dirname, 'docs')));

// Parse JSON bodies
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'chat.html'));
});

app.get('/language-select', (req, res) => {
    res.sendFile(path.join(__dirname, 'language-select.html'));
});

// API routes for documentation
app.get('/api/docs/:filename', (req, res) => {
    const { filename } = req.params;
    res.sendFile(path.join(__dirname, 'docs', filename));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Handle 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start server
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
        console.log(`Serving static files from:`);
        console.log(`- /assets`);
        console.log(`- /js`);
        console.log(`- /css`);
        console.log(`- /docs`);
    });
}

module.exports = app;
