import React from "react";
import TableRow from "./TableRow";
import Loader from "../Loader/Loader";
import AddWord from "./AddWord";
import ChangeTheme from "../../Context/ChangeTheme";
import { observer } from "mobx-react-lite";
import { useStore } from "../../Store/TaskStoreContext";
import { useEffect } from "react";

const Table = observer(() => {
  const { taskStore } = useStore();

  useEffect(() => {
    taskStore.loadData();
  }, [taskStore]);

  return (
    <div>
      <ChangeTheme />
      <AddWord />

      <div>
        {taskStore.isLoaded ? (
          <Loader />
        ) : (
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
              {taskStore.words.map((word) => {
                return (
                  <TableRow
                    key={word.id}
                    rowData={word}
                    handleDel={() => taskStore.handleDel(word.id)}
                    handleSave={taskStore.handleSave}
                  />
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
});

export default Table;
