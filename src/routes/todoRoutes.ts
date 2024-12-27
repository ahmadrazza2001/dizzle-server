import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../controllers/todoController";

const router = express.Router();

router.post("/addTodo", addTodo);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);
router.get("/getAllTodos", getAllTodos);

export default router;
