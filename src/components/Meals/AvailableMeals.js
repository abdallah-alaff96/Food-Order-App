import Cards from "../UI/Cards";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-http-1db30-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();

      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  // loading choice
  const loadingParagraph = <p className={classes.MealsLoading}>loading...</p>;
  // two choices to view
  const errorParagra = (
    <section>
      <p className={classes.MealsError}>{httpError}</p>
    </section>
  );
  const mealsListSection = (
    <section className={classes.meals}>
      <Cards>
        <ul>{mealsList}</ul>
      </Cards>
    </section>
  );
  const listToView = httpError ? errorParagra : mealsListSection;

  return isLoading ? loadingParagraph : listToView;
};

export default AvailableMeals;
