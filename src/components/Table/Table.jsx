import React, { useContext } from "react";
import TableRow from "./TableRow";
import { WordsContext } from "../Context/WordsContext";

function Table() {
  const { items, deleteItem } = useContext(WordsContext);

  return (
    <div>
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
              <TableRow key={word.id} rowData={word} handleDel={deleteItem} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
