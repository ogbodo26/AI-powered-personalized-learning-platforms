const express = require('express');
const router = express.Router();
// simple in-memory lessons for quick demo
const lessons = [
  { _id: '1', title: 'Forces & Motion', level: 'beginner', exercises: [{ question: 'What is force?', choices:['Push','Color','Size'], answer:'Push' }]}
];
router.get('/', (req, res) => res.json(lessons));
module.exports = router;