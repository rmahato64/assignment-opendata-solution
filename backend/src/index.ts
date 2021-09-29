import * as cors from 'cors';
import * as express from 'express';
import * as dotenv from 'dotenv';
import { getAll } from './firebase';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.get('/', async (req, res) => {
    try {
        const data = await getAll();
        res.status(200).send(data);
    }
    catch (e) {
        res.status(400).send(e);
    };
});

// ===== BOOT =========================
app.listen(process.env.PORT, async () => {
    console.log(`App listening at http://127.0.0.1:${process.env.PORT}`);
});
module.exports = app;