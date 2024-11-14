import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import "./table.css";
import "../Button/button.module.css";

export default function TableRow({
  english,
  transcription,
  russian,
  tags,
  id,
  handlDel,
}) {
  const [isClicked, setIsClicked] = useState(false);
  const [valueEnglish, setValueEnglish] = useState(english);
  const [valueTranscription, setValueTranscription] = useState(transcription);
  const [valueRussian, setValueRussian] = useState(russian);

  function getValueEnglish(event) {
    const newValueEnglish = event.target.value;
    setValueEnglish(newValueEnglish);
  }

  function getValueTranscription(event) {
    const newValueTranscription = event.target.value;
    setValueTranscription(newValueTranscription);
  }

  function getValueRussian(event) {
    const newValueRussian = event.target.value;
    setValueRussian(newValueRussian);
  }

  const showInput = () => {
    setIsClicked(true);
  };

  const cancel = () => {
    setIsClicked(false);
  };

  return (
    <tr>
      {isClicked ? (
        <>
          <td>
            <input
              type="text"
              value={valueEnglish}
              onChange={getValueEnglish}
            />
          </td>
          <td>
            <input
              type="text"
              value={valueTranscription}
              onChange={getValueTranscription}
            />
          </td>
          <td>
            <input
              type="text"
              value={valueRussian}
              onChange={getValueRussian}
            />
          </td>
          <td>{tags}</td>
          <td className="table__btns">
            <Button text="Save" color="btnGreen" />
            <Button text="Cancel" color="btnBlue" handler={cancel} />
          </td>
        </>
      ) : (
        <>
          <td>{english}</td>
          <td>{transcription}</td>
          <td>{russian}</td>
          <td>{tags}</td>
          <td className="table__btns">
            <Button text="Edit" color="btnYellow" handler={showInput} />
            <Button text="Delete" color="btnRed" handler={handlDel} id={id} />
          </td>
        </>
      )}
    </tr>
  );
}
