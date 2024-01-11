// src/MealList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // I installed axios using 'npm i axios'

const MealList = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'
        );

        

        setMeals(response.data.meals);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div>
      <h1>Chicken Breast Meals</h1>
      <ul>
        {meals.map((meal) => (
          <div class="meal-m" key={meal.idMeal}>
            <div class="meals">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            {meal.strMeal}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default MealList;
