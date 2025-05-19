const express = require('express');
const router = express.Router();

// Route for the homepage
router.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

// Route for truck parts listing
router.get('/parts', (req, res) => {
    // Here you would typically fetch parts from a database
    res.json([
        { id: 1, name: 'Brake Pad', price: 50, image: '/images/brake-pad.jpg' },
        { id: 2, name: 'Oil Filter', price: 20, image: '/images/oil-filter.jpg' },
        { id: 3, name: 'Air Filter', price: 30, image: '/images/air-filter.jpg' }
    ]);
});

// Export the router
module.exports = router;