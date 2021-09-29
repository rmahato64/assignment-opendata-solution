import * as cors from 'cors';
import * as express from 'express';
import * as dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get('/', async (req, res) => {
    res.status(200).send("app is running");
});

// ===== BOOT =========================
app.listen(process.env.PORT, async () => {
    console.log(`App listening at http://127.0.0.1:${process.env.PORT}`);
});
module.exports = app;