import { Request, Response } from "express";
import { db } from "../drizzle/database";
import { TodoTable } from "../drizzle/schema";
import { eq } from "drizzle-orm";

export const addTodo = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "Both Title and Description are required" });
    }

    await db.insert(TodoTable).values({
      title,
      description,
      status: false,
      createdat: new Date(),
      updatedat: new Date(),
    });

    res.status(201).json({ message: "Todo added successfully" });
  } catch (error) {
    console.error("Error adding todo:", error);
    res.status(500).json({ error: "Failed to add todo" });
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "invalid todo id!" });
    }

    const updatedTodo = await db
      .update(TodoTable)
      .set({
        status: true,
        updatedat: new Date(),
      })
      .where(eq(TodoTable.id, id))
      .returning();

    if (!updatedTodo.length) {
      return res.status(404).json({ error: "todo not found!" });
    }
    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ error: "Failed to update todo" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "invalid todo id!" });
    }

    const deletedTodo = await db
      .delete(TodoTable)
      .where(eq(TodoTable.id, id))
      .returning();

    if (!deletedTodo.length) {
      return res.status(404).json({ error: "todo not found!" });
    }

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Error deleting todo:", error);
    res.status(500).json({ error: "Failed to delete todo" });
  }
};

export const getAllTodos = async (req: Request, res: Response) => {
  try {
    const todos = await db.select().from(TodoTable);

    if (!todos.length) {
      return res.status(404).json({ error: "No todos found" });
    }
    res
      .status(200)
      .json({ message: "Todos retrieved successfully", data: todos });
  } catch (error) {
    console.error("Error retrieving todos:", error);
    res.status(500).json({ error: "Failed to retrieve todos" });
  }
};
