import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Главная страница</h1>
      <div className="books">
        <div className="book">
          <div className="book__image"></div>
          <p className="book__title">Книга 1</p>
        </div>
        <div className="book">
          <div className="book__image"></div>
          <p className="book__title">Книга 2</p>
        </div>
        <div className="book">
          <div className="book__image"></div>
          <p className="book__title">Книга 3</p>
        </div>
        <div className="book">
          <div className="book__image"></div>
          <p className="book__title">Книга 4</p>
        </div>
      </div>
    </div>
  );
};

const AddPage = () => {
  return (
    <div>
      <h2>Добавить книгу</h2>
      <Link to="/" style={{ marginBottom: 10, display: "block" }}>
        На главную
      </Link>
      <form action="">
        <input type="text" placeholder="Название книги" />
        <input type="text" placeholder="Описание книги" />
        <button type="submit">Создать</button>
      </form>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <h2>О компании</h2>
      <Link to="/" style={{ marginBottom: 10, display: "block" }}>
        На главную
      </Link>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/addbook" element={<AddPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
