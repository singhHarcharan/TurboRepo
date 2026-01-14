import express, { Request, Response } from 'express';
import { BACKEND_URL, VALUE} from "@repo/common"

const app = express();

app.get("/", (req: Request, res: Response) => {
    console.log(BACKEND_URL);
    console.log(VALUE);
    return res.json({
        "message": "Hello world"
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
}); 