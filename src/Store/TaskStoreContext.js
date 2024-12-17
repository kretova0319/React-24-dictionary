import { createContext, useContext } from "react";
import { taskStore } from "./TaskStore";

const TaskStoreContext = createContext(null); //изначально значение контекста пустое

export const TaskStoreProvider = ({ children }) => {
  <TaskStoreContext.Provider value={{ taskStore }}>
    {children}
  </TaskStoreContext.Provider>;
};

// Создаем хук для прокидывания в компоненты доступа к example
export const useStore = () => useContext(TaskStoreContext);
