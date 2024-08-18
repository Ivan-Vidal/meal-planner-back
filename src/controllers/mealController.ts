import { Request, Response } from 'express';
import { Database } from 'sqlite';

export const createMeal = async (req: Request, res: Response) => {
  const { day, mealType, recipes, portions, notes } = req.body;
  const db = (req as any).db;

  try {
    const result = await db.run(
      `INSERT INTO meals (day, mealType, recipes, portions, notes) VALUES (?, ?, ?, ?, ?)`,
      [day, mealType, recipes, portions, notes]
    );

    res.status(201).json({
      id: result.lastID,
      day,
      mealType,
      recipes,
      portions,
      notes,
    });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getMeals = async (req: Request, res: Response) => {
  const db = (req as any).db;

  try {
    const meals = await db.all(`SELECT * FROM meals`);
    res.status(200).json(meals);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const getMeal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const db = (req as any).db;

  try {
    const meal = await db.get(`SELECT * FROM meals WHERE id = ?`, [id]);

    if (meal) {
      res.status(200).json(meal);
    } else {
      res.status(404).json({ error: "Refeição não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const updateMeal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { day, mealType, recipes, portions, notes } = req.body;
  const db = (req as any).db;

  try {
    const result = await db.run(
      `UPDATE meals SET day = ?, mealType = ?, recipes = ?, portions = ?, notes = ? WHERE id = ?`,
      [day, mealType, recipes, portions, notes, id]
    );

    if (result.changes > 0) {
      res.status(200).json({ id, day, mealType, recipes, portions, notes });
    } else {
      res.status(404).json({ error: "Refeição não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export const deleteMeal = async (req: Request, res: Response) => {
  const { id } = req.params;
  const db = (req as any).db;

  try {
    const result = await db.run(`DELETE FROM meals WHERE id = ?`, [id]);

    if (result.changes > 0) {
      res.status(204).send(); // No Content
    } else {
      res.status(404).json({ error: "Refeição não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};
