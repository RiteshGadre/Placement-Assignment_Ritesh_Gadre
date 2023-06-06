const express = require('express');
const app = express();

// Sample data for the posts
const posts = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' },
  { id: 3, title: 'Post 3' },
  // ... add more posts as needed
];

// Endpoint to send 20 posts
app.get('/post', (req, res) => {
  // Get the first 20 posts
  const twentyPosts = posts.slice(0, 20);
  
  res.json(twentyPosts);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
