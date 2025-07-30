import { useContext, useState, useEffect, useCallback } from "react";
import { TaskContext } from "./TaskContext";
import { AuthContext } from "./AuthContext";
import { getTasks, addTask, updateTask, deleteTask } from "../services/api";

const TaskProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const refreshTasks = useCallback(async () => {
    if (!user?.token) return;
    setLoading(true);
    try {
      const response = await getTasks(user.token);
      setTasks(response.data || []);
    } catch (err) {
      console.error("Ошибка загрузки задач:", err);
      setError("Ошибка загрузки задач");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    refreshTasks();
  }, [refreshTasks]);

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
