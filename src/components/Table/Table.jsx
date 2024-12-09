import React, { useEffect } from "react";
// import { data } from "../../data";
import TableRow from "./TableRow";
import { useState } from "react";
import AddWord from "./AddWord";

function Table() {
  // Получаем с API список слов, загружаем на страницу
  const [words, setWords] = useState([]);

  useEffect(() => {
    getWords();
  }, []);

  const getWords = async () => {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const datatWords = await response.json();
    console.log(datatWords);
    setWords(datatWords);
  };

  // Удаляем слова по кнопке в таблице
  const deleteItem = (id) => {
    let newListWords = words.filter((word) => word.id !== id);
    setWords(newListWords);
  };
  console.log(words);

  return (
    <div>
      <AddWord />
      <table className="table">
        <caption>List of words</caption>
        <thead>
          <tr>
            <th>Слово</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
            <th>Тема</th>
            <th>Действие</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => {
            return (
              <TableRow key={word.id} rowData={word} handleDel={deleteItem} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
