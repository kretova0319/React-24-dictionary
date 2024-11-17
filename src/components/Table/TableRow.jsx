import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import "./table.css";
import "../Button/button.module.css";

export default function TableRow({ rowData, handleDel }) {
  const { id, english, transcription, russian, tags } = rowData;
  const [isClicked, setIsClicked] = useState(false);
  //Создаем 1 value вместо 3-х
  // const [valueEnglish, setValueEnglish] = useState(english);
  // const [valueTranscription, setValueTranscription] = useState(transcription);
  // const [valueRussian, setValueRussian] = useState(russian);
  const [value, setValue] = useState({
    id: id,
    english: english,
    transcription: transcription,
    russian: russian,
  });

  function handleChange(event) {
    setValue((prevValue) => {
      return { ...prevValue, [event.target.name]: event.target.value };
    });
  }

  const handleEdit = () => {
    setIsClicked((prevValue) => !prevValue);
  };

  const handleCancel = () => {
    setValue({ ...rowData });
    setIsClicked((prevValue) => !prevValue);
  };

  const handleSave = () => {
    setValue({ ...value });
    setIsClicked((prevValue) => !prevValue);
  };

  return (
    <tr>
      {isClicked ? (
        <>
          <td>
            <input
              type="text"
              name={"english"}
              value={value.english}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name={"transcription"}
              value={value.transcription}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="text"
              name={"russian"}
              value={value.russian}
              onChange={handleChange}
            />
          </td>
          <td>{tags}</td>
          <td className="table__btns">
            <Button text="Save" color="btnGreen" handler={handleSave} />
            <Button text="Cancel" color="btnBlue" handler={handleCancel} />
          </td>
        </>
      ) : (
        <>
          <td>{value.english}</td>
          <td>{value.transcription}</td>
          <td>{value.russian}</td>
          <td>{value.tags}</td>
          <td className="table__btns">
            <Button text="Edit" color="btnYellow" handler={handleEdit} />
            <Button text="Delete" color="btnRed" handler={handleDel} id={id} />
          </td>
        </>
      )}
    </tr>
  );
}
