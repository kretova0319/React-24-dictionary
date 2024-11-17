import React from "react";
import { data } from "../../data";
import TableRow from "./TableRow";
import { useState } from "react";

function Table() {
  const [items, setItems] = useState(data);

  const deleteItem = (id) => {
    let newListItems = items.filter((word) => word.id !== id);
    setItems(newListItems);
  };
  console.log(items);

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
