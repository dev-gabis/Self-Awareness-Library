
import { bookRatingsDB } from "../database/bookRating.js";

// Função para obter todas as avaliações de livros
export const getBookRatings = (req, res) => {
  res.status(200).send(bookRatingsDB);
};

// Função para criar uma nova avaliação de livro
export const createBookRating = (req, res) => {
  const { rating, description } = req.body;

  // Validação de dados
  if (!rating || !description || rating < 1 || rating > 5) {
    return res.status(400).send("Nota (1 a 5) e descrição são obrigatórios e a nota deve estar entre 1 e 5.");
  }

  // Criar nova avaliação
  const newBookRating = new BookRating(rating, description);
  bookRatingsDB.push(newBookRating);

  // Enviar resposta de sucesso
  res.status(201).send(`Avaliação com nota ${rating} foi criada com sucesso!`);
};