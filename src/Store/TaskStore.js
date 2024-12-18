import { makeAutoObservable } from "mobx";

class TaskStore {
  words = [];
  isLoaded = true;
  newWord = {
    id: "",
    english: "",
    transcription: "",
    russian: "",
    tags: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  // Загружаем слова из API
  loadData = async () => {
    try {
      this.isLoaded = true;
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch words");
      }
      const data = await response.json();
      this.words = data;
    } catch (error) {
      console.error("Error fetching words:", error);
    } finally {
      this.isLoaded = false;
    }
  };

  // Добавляем новые слова
  handleAdd = async (e) => {
    e.preventDefault();
    try {
      // создаем данные для нового слова
      const wordToAdd = {
        id: Math.random().toString(),
        english: this.newWord.english,
        transcription: this.newWord.transcription,
        russian: this.newWord.russian,
        tags: this.newWord.tags,
      };

      // Добавляем новое слово в конец массива (words)
      this.words.push(wordToAdd);

      // Сбрасываем форму
      this.newWord = {
        id: "",
        english: "",
        transcription: "",
        russian: "",
        tags: "",
      };

      // отправляем запрос в API на добавление нового слова
      const response = await fetch(
        "http://itgirlschool.justmakeit.ru/api/words/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(wordToAdd),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add word");
      }
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  //Удаляем слова из таблицы
  handleDel = async (id) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete word");
      }
      // Удаляем слово из локального состояния
      this.words = this.words.filter((word) => word.id !== id);
    } catch (error) {
      console.error("Error deleting word:", error);
    }
  };

  //Редактируем и сохраняем слова (уже существующие в таблице)
  handleSave = async (value, id) => {
    try {
      const response = await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${id}/update`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            english: value.english,
            transcription: value.transcription,
            russian: value.russian,
            tags: value.tags,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to save word");
      }
    } catch (error) {
      console.error("Error saving word:", error);
    }
  };
}
export const taskStore = new TaskStore();
