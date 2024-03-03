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

