import { StyleSheet, Text, View } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

SplashScreen.preventAutoHideAsync()

const RooyLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf')
  })

  useEffect(() => {
    if (error) throw error

    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])

  if (!fontsLoaded) {
    return null
  }

  if (!fontsLoaded && !error) {
    return null
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }} // убирает заголовок от путей
      />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="search" options={{ headerShown: false }} /> */}
    </Stack>
  )
}

export default RooyLayout
// import { StyleSheet, Text, View } from 'react-native'
// import { Slot } from 'expo-router'

// const RooyLayout = () => {
//   return (
//     <>
//       <Text>Header</Text>
//       <Slot />
//       <Text>Footer</Text>
//     </>
//   )
// }

// export default RooyLayout

// import { StyleSheet, Text, View } from 'react-native'
// const _layout = () => {
//   return (
//     <View style={styles.container}>
//       <Text>_layout</Text>
//     </View>
//   )
// }
// export default _layout
// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
