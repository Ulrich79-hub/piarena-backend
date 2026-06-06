const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors());

const PI_API_KEY = process.env.PI_API_KEY;

app.get('/', (req, res) => {
  res.json({ status: 'PiArena Backend OK' });
});

app.post('/approve', async (req, res) => {
  const { paymentId } = req.body;
  try {
    await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/approve`,
      {},
      { headers: { Authorization: `Key ${PI_API_KEY}` } }
    );
    res.json({ approved: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

app.post('/complete', async (req, res) => {
  const { paymentId, txid } = req.body;
  try {
    await axios.post(
      `https://api.minepi.com/v2/payments/${paymentId}/complete`,
      { txid },
      { headers: { Authorization: `Key ${PI_API_KEY}` } }
    );
    res.json({ completed: true });
  } catch(e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));    await axios.post(
      ${PI_API}/v2/payments/${paymentId}/complete,
      { txid },
      { headers: { Authorization: Key ${PI_API_KEY} } }
    );
    res.json({ completed: true });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(PiArena Backend running on port ${PORT}));
