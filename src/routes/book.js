import { Router } from "express";
import { postBook, getBook } from "../controllers/books.controller.js";

const bookRouter = Router();

// Rota para obter todos os livros
bookRouter.get("/book/all", getBook);

// Rota para adicionar um novo livro
bookRouter.post("/book", postBook);

export { bookRouter };