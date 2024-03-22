import express from 'express'
import mongoose from 'mongoose'
// import notesModel from "./models/notesModel"

// import notesRouter from './router/notesRouter'

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

mongoose.connect(process.env.DB_URL)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));



const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: String,
    description: String,
});

const notesModel = mongoose.model('Notes', itemSchema);

// export default notesModel    

const notesRouter = express.Router();

// Get all items
notesRouter.get('/notes', async (req, res) => {
    try {
        const items = await notesModel.find();
        res.json(items);
    } catch (err) {
        res.json({ message: err });
    }
});

// Create an item
notesRouter.post('/notes', async (req, res) => {
    const item = new notesModel({
        title: req.body.title,
        description: req.body.description,
    });
    try {
        const newItem = await item.save();
        res.json(newItem);
    } catch (err) {
        res.json({ message: err });
    }
});

app.use('/api', notesRouter);

export default app
