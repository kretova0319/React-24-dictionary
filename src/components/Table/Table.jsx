import React from "react";
import { data } from "../../data";
import TableRow from "./TableRow";
import { useState } from "react";

function Table() {
  // Удаление строки по нажатию на кнопку - не работает.
  //в консоли id показывает и новый массив уменьшается
  // раз data передан items, то и мэпим мы items, а не data для TableRow
  const [items, setItems] = useState(data);

  const deleteItem = (id) => {
    // console.log(id);
    let newListItems = items.filter((word) => word.id !== id);
    setItems(newListItems);
    // console.log(newListItems);
  };

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
              <TableRow
                key={word.id}
                {...word}
                onClick={() => deleteItem(word.id)}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
