import React from "react";
import Button from "../Button/Button";
import "./table.css";
import "../Button/button.module.css";

export default function TableRow({ english, transcription, russian, tags }) {
  return (
    <tr>
      <td>{english}</td>
      <td>{transcription}</td>
      <td>{russian}</td>
      <td>{tags}</td>
      <td>
        <Button text="Edit" color="btnBlue" />
        <Button text="Delete" color="btnRed" />
      </td>
    </tr>
  );
}
