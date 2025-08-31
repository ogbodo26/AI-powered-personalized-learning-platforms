const axios = require('axios');
exports.explain = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'prompt required' });
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: 'OPENAI_API_KEY not set' });
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 400
    }, {
      headers: { Authorization: `Bearer ${apiKey}` }
    });
    const text = response.data.choices?.[0]?.message?.content || '';
    return res.json({ explanation: text });
  } catch (err) {
    console.error(err?.response?.data || err.message);
    return res.status(500).json({ error: 'AI service error' });
  }
};