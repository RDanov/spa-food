import {  useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFilterCategory } from "../api";
import Preloader from "../components/Preloader";
import MealList from "../components/MealList";

function Category() {
    const {name} = useParams();
    const [meals, setMeals] = useState([]);
    const {goBack} = useHistory();


    useEffect(() => {
        getFilterCategory(name).then((data) => 
            setMeals(data.meals));
    }, [name]);

    return (
        <>
             <button className="btn" onClick={goBack}>Go Back</button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export default Category;


