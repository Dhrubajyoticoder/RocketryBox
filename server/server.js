import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('Database Connection Error:', err));

app.post('/api/auth/register', (req, res) => {
  // Registration logic here
  res.status(200).json({ message: 'User registered successfully' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
