// Todos os controllers relacionados a rota de livro
import { livros } from "../database/booksDB.js";
import { Livro } from "../models/book.model.js"; // Certifique-se de que a classe Livro está exportada como 'Livro' e não 'book'

// Função para obter todos os livros
export const getBook = (req, res) => {
  res.status(200).send(livros);
};

// Função para adicionar um novo livro
export const postBook = (req, res) => {
  // Obtendo os dados do livro do corpo da requisição
  const postBook = req.body;

  // Formatando os dados do livro
  const dadoFormatadoLivro = new Livro(
    postBook.titulo,
    postBook.autor,
    postBook.descricao,
    postBook.razao
  );

  // Salvando o livro no banco de dados fictício
  book.push(dadoFormatadoLivro);

  // Enviando a resposta de sucesso
  res.status(201).send(`${dadoFormatadoLivro.titulo} foi criado com sucesso!`);
};