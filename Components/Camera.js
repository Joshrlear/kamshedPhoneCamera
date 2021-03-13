import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Button } from 'react-native'
import { Camera } from 'expo-camera'

export default function App() {
    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [ offset, setOffset ] = useState(null)


    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync()
          setHasPermission(status === 'granted')
        })()
    }, [])


    useEffect(() => {
        const {height, width} = Dimensions.get('window')
        const newWidth = height*(3/4)
        const widthOffset = -((newWidth-width)/2)
        setOffset(widthOffset)
    }, [hasPermission])


    if (hasPermission === null) {
        return <View />
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>
    }
    return (
        <View style={styles.container}>
        <Camera style={{
            position: 'absolute',
            flex: 1,
            top: 0,
            bottom: 0,
            left: offset,
            right: offset
        }} type={type}>
            <View style={styles.buttonContainer}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => console.log("you are gae")}>
                <Text style={styles.text}>Capture</Text>
            </TouchableOpacity>
            </View>
        </Camera>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column-reverse',
        margin: 20
    },
    button: {
        flex: .15,
        alignSelf: 'auto',
        alignItems: 'center',
        backgroundColor: 'blue',
        padding: '5px'
    },
    text: {
        fontSize: 18,
        color: 'white'
    },
})
