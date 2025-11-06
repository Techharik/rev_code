import express, { type Express, type Request, type Response } from 'express';

console.log('This is a TypeScript File Which I am using here');


const isDone: boolean = true;

type PersonType = {
    name: string,
    age: number
}

const Person: PersonType = {
    name: 'Hari',
    age: 20
}


const app: Express = express();

interface userBody {
    name: string, email: string
}
app.get("/", (req: Request<{}, {}, userBody>, res: Response) => {
    const { name, email } = req.body
    res.status(200).json({ message: name })
})


app.listen(3000, (err) => {
    if (err) throw err;
    console.log('Server is runining successfully')
})