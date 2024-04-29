import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function App() {
  return (
    <View className=" flex-1 justify-center items-center bg-white">
      <Text className=" text-3xl  font-pblack">Aora</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>
        Go to Profile
      </Link>
    </View>
  )
}

// import { StatusBar } from 'expo-status-bar'
// import { StyleSheet, Text, View } from 'react-native'
// import { Link } from 'expo-router'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Aora</Text>
//       <StatusBar style="auto" />
//       <Link href="/profile" style={{ color: 'blue' }}>
//         Go to Profile ggg
//       </Link>
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// })
