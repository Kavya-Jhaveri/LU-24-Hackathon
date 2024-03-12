// import {View, Text, StyleSheet } from 'react-native'
// import React, {useState, useEffect} from 'react'
// import {db} from '../FirebaseConfig'
// import {ref, onValue} from 'firebase/database'

export function calculateBMR(weight, height, age, gender) {
    let bmr;
    if (gender.toLowerCase() === 'male') {
        bmr = 66 + (6.23 * weight) + (12.7 * height) - (6.8 * age);
    } else {
        bmr = 655 + (4.35 * weight) + (4.7 * height) - (4.7 * age);
    }
    return bmr;
}
export function calculateTDEE(bmr, activityLevel) {
    const activityMultipliers = {
        'sedentary': 1.2,
        'light': 1.375,
        'moderate': 1.55,
        'active': 1.725,
        'veryActive': 1.9
    };

    return bmr * (activityMultipliers[activityLevel]);
}
//function gainMuscle() --> more protein, less sugar

// heuristic calculation for A* Search
function heuristic(foodsRemaining, targetProtein, targetCarbs, targetFat, targetSugar) {
    const remainingProtein = Math.max(targetProtein - foodsRemaining.protein, 0);
    const remainingCarbs = Math.max(targetCarbs - foodsRemaining.carbs, 0);
    const remainingFat = Math.max(targetFat - foodsRemaining.fat, 0);
    const remainingSugar = Math.max(targetSugar - foodsRemaining.sugar, 0);

    // remaining nutritional needs
    return remainingProtein + remainingCarbs + remainingFat + remainingSugar;
}

// basic A* seach algorithm
function ASearch(foods, targetProtein, targetCarbs, targetFat, targetSugar) {
    const initialState = { foods: [], protein: 0, carbs: 0, fat: 0, sugar: 0 };
    const openList = [{ state: initialState, cost: 0 }];
    const closedList = new Set();

    while (openList.length > 0) {
        openList.sort((a, b) => a.cost - b.cost);
        const { state, cost } = openList.shift();

        // check goal
        if (state.protein >= targetProtein &&
            state.carbs >= targetCarbs &&
            state.fat >= targetFat &&
            state.sugar >= targetSugar) {
            return state.foods;
        }

        for (const food of foods) {
            const newState = {
                foods: [...state.foods, food.name],
                protein: state.protein + food.protein,
                carbs: state.carbs + food.carbs,
                fat: state.fat + food.fat,
                sugar: state.sugar + food.sugar
            };

            const newCost = cost + 1 + heuristic(newState, targetProtein, targetCarbs, targetFat, targetSugar);

            // Add to open list if not already visited
            if (!closedList.has(JSON.stringify(newState))) {
                openList.push({ state: newState, cost: newCost });
                closedList.add(JSON.stringify(newState));
            }
        }
    }

    // no optimal choice found
    return null;
}