import React from "react";
import { data } from "../../data";
import TableRow from "./TableRow";

function Table() {
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
          {data.map((word) => {
            return <TableRow key={word.id} {...word} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
