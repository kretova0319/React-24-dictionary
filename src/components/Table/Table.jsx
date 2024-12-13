import React, { useEffect } from "react";
import TableRow from "./TableRow";
import { useState } from "react";
import AddWord from "./AddWord";

function Table() {
  // Состояние для изначального списка слов
  const [words, setWords] = useState([]);
  // Состояние для нового слова
  const [newWord, setNewWord] = useState({
    english: "",
    transcription: "",
    russian: "",
    tags: "",
  });

  // Получаем с API список слов, загружаем на страницу
  useEffect(() => {
    getWords();
  }, []);

  const getWords = async () => {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const datatWords = await response.json();
    setWords(datatWords);
  };

  // Удаляем слова по кнопке в таблице
  const deleteItem = (id) => {
    let newListWords = words.filter((word) => word.id !== id);
    setWords(newListWords);
  };

  //Добавляем новое слово
  const handleAdd = (e) => {
    e.preventDefault();
    const wordToAdd = {
      id: Math.random().toString(),
      english: newWord.english,
      transcription: newWord.transcription,
      russian: newWord.russian,
      tags: newWord.tags,
      // ...newWord, // так можно заменить предыдущие 4 строки
    };
    const newListWords = [wordToAdd, ...words];
    setWords(newListWords);
    setNewWord({ english: "", transcription: "", tags: "", russian: "" });
  };

  return (
    <div>
      <AddWord
        handleAdd={handleAdd}
        newWord={newWord}
        setNewWord={setNewWord}
      />
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
              <TableRow
                key={word.id}
                rowData={word}
                handleDel={() => deleteItem(word.id)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
