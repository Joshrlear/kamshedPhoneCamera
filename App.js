import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Yim_Camera from './Components/Camera'

export default function App() {
  const [ cameraOpen, setCameraOpen ] = useState(false)

  
  const cameraClosedView = (setCameraOpen) => {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <Button title="Camera" onPress={() => setCameraOpen(true)}/>
      </View>
    )
  }
  const cameraOpenedView = (setCameraOpen) => {
    return <Yim_Camera props={setCameraOpen}/>
  }


  if (!cameraOpen) return cameraClosedView(setCameraOpen)
  else return cameraOpenedView(setCameraOpen)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
