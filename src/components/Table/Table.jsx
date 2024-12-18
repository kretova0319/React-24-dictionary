import React, { useContext } from "react";
import TableRow from "./TableRow";
import { WordsContext } from "../../Context/WordsContext";
import Loader from "../Loader/Loader";
import AddWord from "./AddWord";
import ChangeTheme from "../../Context/ChangeTheme";

function Table() {
  const { items, handleDel, isLoaded, handleAdd, newWord, setNewWord } =
    useContext(WordsContext);

  return (
    <div>
      <ChangeTheme />
      <AddWord
        handleAdd={handleAdd}
        newWord={newWord}
        setNewWord={setNewWord}
      />

      <div>
        {isLoaded ? (
          <Loader />
        ) : (
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
              {items.map((word) => {
                return (
                  <TableRow
                    key={word.id}
                    rowData={word}
                    handleDel={() => handleDel(word.id)}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Table;
