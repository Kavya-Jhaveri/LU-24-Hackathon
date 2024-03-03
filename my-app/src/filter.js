import {View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import {db} from '../FirebaseConfig'
import {ref, onValue} from 'firebase/database'


const FetchData = () => {
    const [foodData, setFoodData] = useState([])
    useEffect(() => {
        const starCountRef = ref(db, '/foods');
        onValue(starCountRef, (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const newFoods = Object.keys(data).map((key) => ({
              id: key,
              ...data[key]
            }));
            console.log(newFoods);
            setFoodData(newFoods);
          } else {
            // Handle the case where there is no data at the reference
            console.log('No data available');
            setFoodData([]); // You might want to set the state to an empty array
          }
        }, (error) => {
          console.error('Failed to read data:', error);
        });
      }, []);
    return (
        <View style = {styles.container}>
            <Text style = {styles.header}>Realtime DB & EXPO</Text>
            {
                foodData.map((item, index) => {
                    return(
                        <View key = {index}>
                            <Text style = {styles.text}>{item.name}</Text>
                            <Text style = {styles.text}>{item.calories}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}
export default FetchData;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    header:{
        fontSize:30,
        textAlign:'center',
        marginTop:100,
        fontWeight:'bold'
    },
    text:{
        fontSize:20,
        textAlign:'center',
        marginTop:20
    }
});