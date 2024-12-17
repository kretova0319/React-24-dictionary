import { useState } from "react";

const useValidation = () => {
  //Состояние, которое выводит текст об ошибке
  const [inputErrorText, setInputErrorText] = useState({
    english: "",
    transcription: "",
    russian: "",
    tags: "",
  });
  // Состояние, которое отлавливает ошибки
  const [isInputError, setIsInputError] = useState({
    english: false,
    transcription: false,
    russian: false,
    tags: false,
  });
  // Кнопка Save активна или нет
  const [isDisabled, setIsDisabled] = useState(false);

  function validateField(nameField, valueField) {
    if (valueField === "") {
      setIsInputError({ ...isInputError, [nameField]: true });
      setInputErrorText({ ...inputErrorText, [nameField]: "Field is empty" });
    } else {
      switch (nameField) {
        case "english":
          if (valueField.match(/^[а-яА-ЯёЁ0-9]+$/)) {
            setIsInputError({ ...isInputError, [nameField]: true });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "Use only english letters",
            });
          } else {
            setIsInputError({ ...isInputError, [nameField]: false });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "",
            });
          }
          break;
        case "transcription":
          if (valueField.match(/^[а-яА-ЯёЁ0-9]+$/)) {
            setIsInputError({ ...isInputError, [nameField]: true });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "Use only transcription symbols",
            });
          } else {
            setIsInputError({ ...isInputError, [nameField]: false });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "",
            });
          }
          break;
        case "russian":
          if (valueField.match(/^[a-zA-Z0-9]+$/)) {
            setIsInputError({ ...isInputError, [nameField]: true });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "Use only russian letters",
            });
          } else {
            setIsInputError({ ...isInputError, [nameField]: false });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "",
            });
          }
          break;
        case "tags":
          if (valueField.match(/^[а-яА-ЯёЁ0-9]+$/)) {
            setIsInputError({ ...isInputError, [nameField]: true });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "Use only english letters",
            });
          } else {
            setIsInputError({ ...isInputError, [nameField]: false });
            setInputErrorText({
              ...inputErrorText,
              [nameField]: "",
            });
          }
          break;
        default:
          // Дефолтная обработка для новых полей
          setIsInputError({ ...isInputError, [nameField]: false });
          setInputErrorText({ ...inputErrorText, [nameField]: "" });
          break;
      }
    }
  }
  return {
    inputErrorText,
    isInputError,
    isDisabled,
    setIsDisabled,
    validateField,
  };
};
export default useValidation;
