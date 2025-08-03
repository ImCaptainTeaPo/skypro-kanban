import { useContext, useState, useEffect, useCallback } from "react";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";
import { getTasks, addTask, updateTask, deleteTask } from "../services/api";
const FAKE_TASKS = [
  {
    date: "2024-11-08T21:00:00.000Z",
    description: "kot)",
    status: "Без статуса",
    title: "Задача 49",
    topic: "Research",
    userId: "6421860c32e0301869fb3301",
    _id: "66e05a3ae10613d579117fc8456789",
  },
  {
    date: "2024-11-08T21:00:00.000Z",
    description: "kot)",
    status: "Без статуса",
    title: "Задача 49",
    topic: "Research",
    userId: "6421860c32e0301869fb3301",
    _id: "66e05a3ae10613d579117fc83453",
  },
  {
    date: "2024-11-08T21:00:00.000Z",
    description: "kot)",
    status: "Без статуса",
    title: "Задача 49",
    topic: "Research",
    userId: "6421860c32e0301869fb3301",
    _id: "66e05a3ae10613d579117fc83456543",
  },
  {
    date: "2024-11-08T21:00:00.000Z",
    description: "kot)",
    status: "Без статуса",
    title: "Задача 49",
    topic: "Research",
    userId: "6421860c32e0301869fb3301",
    _id: "66e05a3ae10613d579117fc8345675432567",
  },
  {
    date: "2024-11-08T21:00:00.000Z",
    description: "kot)",
    status: "Без статуса",
    title: "Задача 49",
    topic: "Research",
    userId: "6421860c32e0301869fb3301",
    _id: "66e05a3ae10613d579117fc85435676544",
  },
  {
    date: "2024-11-08T21:00:00.000Z",
    description: "kot)",
    status: "Нужно сделать",
    title: "Задача 49",
    topic: "Research",
    userId: "6421860c32e0301869fb3301",
    _id: "66e05a3ae10613d579117fc83334567898768",
  },
  {
    date: "2024-11-08T21:00:00.000Z",
    description: "kot)",
    status: "В работе",
    title: "Задача 49",
    topic: "Research",
    userId: "6421860c32e0301869fb3301434557954",
    _id: "66e05a3ae10613d579",
  },
  {
    date: "2024-11-08T21:00:00.000Z",
    description: "kot)",
    status: "В работе",
    title: "Задача 49",
    topic: "Research",
    userId: "6421860c32e0301869fb33015676545676545",
    _id: "66e05a3",
  },
  {
    date: "2024-11-08T21:00:00.000Z",
    description: "kot)",
    status: "В работе",
    title: "Задача 49",
    topic: "Research",
    userId: "6421860c32e0301869fb3301",
    _id: "66e05a3ae10613d579117fc833345670987896567",
  },
  {
    date: "2024-11-08T21:00:00.000Z",
    description: "kot)",
    status: "Тестирование",
    title: "Задача 49",
    topic: "Research",
    userId: "6421860c32e0301869fb3301",
    _id: "66e05a3ae10613d579117fc83334567098780987648",
  },
  {
    date: "2024-11-08T21:00:00.000Z",
    description: "kot)",
    status: "Готово",
    title: "Задача 49",
    topic: "Research",
    userId: "6421860c32e0301869fb3301",
    _id: "66e05a3ae10613d579117f098647897637865652",
  },
];

const TaskProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState(FAKE_TASKS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const refreshTasks = useCallback(async () => {
    try {
      const tasks = await getTasks(user.token);
      console.log("Ответ от API:", tasks);
      setTasks(tasks || []);
    } catch (err) {
      console.error("Ошибка загрузки задач:", err);
      setError("Ошибка загрузки задач");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user?.token) {
      refreshTasks();
    }
  }, [user, refreshTasks]);

  const handleAddTask = async (taskData) => {
    try {
      await addTask(user.token, taskData);
      refreshTasks();
    } catch (err) {
      console.error("Ошибка добавления задачи:", err);
    }
  };

  const handleUpdateTask = async (id, updatedData) => {
    try {
      await updateTask(user.token, id, updatedData);
      refreshTasks();
    } catch (err) {
      console.error("Ошибка обновления задачи:", err);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(user.token, id);
      refreshTasks();
    } catch (err) {
      console.error("Ошибка удаления задачи:", err);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        error,
        refreshTasks,
        addTask: handleAddTask,
        updateTask: handleUpdateTask,
        deleteTask: handleDeleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
