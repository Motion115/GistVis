import express from 'express';
import { promises as fs } from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.VITE_API_PORT || 52003;

app.use(cors());
app.use(express.json());

const LABEL_FILE_PATH = path.join(__dirname, '../static/test/relabel.json');

app.get('/api/labels', async (req, res) => {
  try {
    const data = await fs.readFile(LABEL_FILE_PATH, 'utf-8');
    res.json(JSON.parse(data));
  } catch (error) {
    console.error('Error reading label file:', error);
    res.status(500).json({ error: 'Error reading label data' });
  }
});

app.post('/api/labels/:index', async (req, res) => {
  try {
    const index = parseInt(req.params.index);
    const { types } = req.body;

    const data = JSON.parse(await fs.readFile(LABEL_FILE_PATH, 'utf-8'));
    
    if (index < 0 || index >= data.length) {
      return res.status(400).json({ error: 'Invalid index' });
    }

    data[index] = {
      ...data[index],
      candidateTypes: types
    };

    await fs.writeFile(LABEL_FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    
    res.json({ success: true });
  } catch (error) {
    console.error('Error saving label:', error);
    res.status(500).json({ error: 'Error saving label data' });
  }
});

app.listen(port, () => {
  console.log(`Label server running at http://localhost:${port}`);
});