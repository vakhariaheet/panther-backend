import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Welcome to the API server of the Panther app!');
});

const PORT = 4040 || process.env.PORT;
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT} 🔥🔥🔥`);
});
