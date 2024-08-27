import express from 'express';
import { createMeal, getMeals, getMeal, updateMeal, deleteMeal } from '../controllers/mealController';

const router = express.Router();

router.post('/mealsCreate', createMeal);
router.get('/meals', getMeals);
router.get('/meals/:id', getMeal);
router.put('/meals/:id', updateMeal);
router.delete('/meals/:id', deleteMeal);

export default router;
