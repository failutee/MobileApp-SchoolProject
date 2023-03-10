import React, { useEffect } from 'react'
import { ActivityIndicator, Alert, BackHandler, StyleSheet, Text, View } from 'react-native';

import NetInfo from '@react-native-community/netinfo';


function LoaderScreen({ navigation }) {

  useEffect(() => {
    handleScreen(navigation);
  })

  return (
    <View style={styles.background}>
      <View>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
      <Text style={styles.text}>Trwa ładowanie aplikacji, oczekiwanie na połączenie internetowe i pobranie danych...</Text>
    </View>
  );
}

async function handleScreen(navigation) {
  while (true) {
    const networkState = await NetInfo.fetch();
    if (!networkState.isConnected) {
      continue;
    }

    try {
      const response = await fetch('http://192.168.0.2:8080/api/v1/person/getAllPersons', {
        method: 'GET'
      });

      const persons = await response.json();

      await new Promise(resolve => setTimeout(resolve, 2500)); // pretending to do something in background

      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'Data',
            params: { persons }
          }
        ]
      });

      break;

    } catch (error) {
      console.log("Data download failed")
    }

    // wait 5 sec
    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}


// function showErrorAlert() {
//   Alert.alert(
//     'Error',
//     'Próba pobrania danych nie powiodła się.',
//     [
//       {
//         text: 'Wyjdź',
//         onPress: () => {
//           BackHandler.exitApp();
//         },
//         style: 'cancel',
//       },
//     ],
//     { cancelable: false },
//   );
// }


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#2e3033",
    justifyContent: "center"
  },
  text: {
    color: "white",
    textAlign: "center",
    marginTop: 15
  }
});


export default LoaderScreen;