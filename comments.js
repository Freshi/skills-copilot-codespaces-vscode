// Create an express server
const express = require('express');
const app = express();

// Import the comment model
const Comment = require('../models/comment');

// Create a comment
app.post('/comments', (req, res) => {
    // Create a new comment
    const newComment = new Comment({
        text: req.body.text,





