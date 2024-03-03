import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { calculateBMR, calculateTDEE } from './suggestion';

let weight = 175; // Replace with actual weight in kilograms
let height = 69; // Replace with actual height in centimeters
let ageInYears = 30; // Replace with actual age in years
let gender = 'male'; // Replace with 'male' or 'female'
let activityLevel = 'moderate'; // Replace with 'sedentary', 'light', 'moderate', 'active', or 'veryActive'
let bmr = calculateBMR(weight, height, ageInYears, gender);
let tdee = calculateTDEE(bmr, activityLevel);

console.log("Your BMR is: " + bmr + " calories/day");
console.log("Your TDEE is: " + tdee + " calories/day");