import React from "react";
import { data } from "../../data";
import TableRow from "./TableRow";
import { useState } from "react";

function Table() {
  // Удаление строки по нажатию на кнопку
  //в консоли id показывает и новый массив уменьшается
  // раз data передан items, то и мэпим мы items, а не data для TableRow
  const [items, setItems] = useState(data);

  const deleteItem = (id) => {
    console.log("click");
    let newListItems = items.filter((word) => word.id !== id);
    console.log(newListItems);

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
            return <TableRow key={word.id} {...word} handleDel={deleteItem} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
