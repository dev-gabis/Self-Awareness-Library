import express from "express";
import { userRouter } from "./src/routes/user.router.js";
import { bookRatingRouter } from "./src/routes/bookRating.js";
import { bookRouter } from "./src/routes/book.js";

const app = express();

//middleware
app.use(express.json());

//rota criada
app.use(userRouter);
app.use(bookRatingRouter);
app.use(bookRouter);


const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Nosso app tá rodando na porta: http://localhost:${PORT}`);
});
