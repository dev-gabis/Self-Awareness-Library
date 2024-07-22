// src/routes/bookRating.router.js

import { Router } from "express";
import { getBookRatings, createBookRating } from "../controllers/BookRating.controller.js";

const bookRatingRouter = Router();

// Rota para obter todas as avaliações de livros
bookRatingRouter.get("/book-ratings", getBookRatings);

// Rota para criar uma nova avaliação de livro
bookRatingRouter.post("/book-ratings", createBookRating);

export { bookRatingRouter }