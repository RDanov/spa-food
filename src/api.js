import { API_URL } from './config';

const getMealByID = async (mealID) => {
    const response = await fetch(API_URL + 'lookup.php?i=' + mealID);
    return await response.json();
};

const getAllCategories = async () => {
    console.log(API_URL);
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
};

const getFilterCategory = async (catName) => {
    const response = await fetch(API_URL + 'filter.php?c=' + catName);
    return await response.json();
};

export { getAllCategories, getFilterCategory, getMealByID};
