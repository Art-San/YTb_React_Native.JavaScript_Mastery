import { Link, router } from 'expo-router'
import { Image, ScrollView, Text, View, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { CustomButton, FormField } from '../../components'
import { useState } from 'react'

import { getCurrentUser, signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'
import { errorSignIn } from './translationErr'
const SignIn = () => {
  const { setUser, setIsLogged } = useGlobalContext()
  const [isSubmitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const submit = async () => {
    if (form.email === '' || form.password === '') {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля')
      return
    }
    setSubmitting(true)

    try {
      await signIn(form.email, form.password)
      const result = await getCurrentUser()
      setUser(result)
      setIsLogged(true)

      Alert.alert('Success', 'Пользователь успешно вошел в систему')
      router.replace('/home')
    } catch (error) {
      console.log(0, 'SignIn Ошибка', error.message)

      const errorMessage = errorSignIn[error.message] || error.message
      Alert.alert('SignIn Ошибка', errorMessage)
      // Alert.alert('Error', error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full flex justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              У вас есть учетная запись?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Signup
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default SignIn

// import { useState } from 'react'
// import { Link, router } from 'expo-router'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import { View, Text, ScrollView, Dimensions, Alert, Image } from 'react-native'

// import { images } from '../../constants'
// import { CustomButton, FormField } from '../../components'
// import { getCurrentUser, signIn } from '../../lib/appwrite'
// import { useGlobalContext } from '../../context/GlobalProvider'

// const SignIn = () => {
//   const { setUser, setIsLogged } = useGlobalContext()
//   const [isSubmitting, setSubmitting] = useState(false)
//   const [form, setForm] = useState({
//     email: '',
//     password: ''
//   })

//   const submit = async () => {
//     if (form.email === '' || form.password === '') {
//       Alert.alert('Error', 'Please fill in all fields')
//     }

//     setSubmitting(true)

//     try {
//       await signIn(form.email, form.password)
//       const result = await getCurrentUser()
//       setUser(result)
//       setIsLogged(true)

//       Alert.alert('Success', 'User signed in successfully')
//       router.replace('/home')
//     } catch (error) {
//       Alert.alert('Error', error.message)
//     } finally {
//       setSubmitting(false)
//     }
//   }

//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <ScrollView>
//         <View
//           className="w-full flex justify-center h-full px-4 my-6"
//           style={{
//             minHeight: Dimensions.get('window').height - 100
//           }}
//         >
//           <Image
//             source={images.logo}
//             resizeMode="contain"
//             className="w-[115px] h-[34px]"
//           />

//           <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
//             Log in to Aora
//           </Text>

//           <FormField
//             title="Email"
//             value={form.email}
//             handleChangeText={(e) => setForm({ ...form, email: e })}
//             otherStyles="mt-7"
//             keyboardType="email-address"
//           />

//           <FormField
//             title="Password"
//             value={form.password}
//             handleChangeText={(e) => setForm({ ...form, password: e })}
//             otherStyles="mt-7"
//           />

//           <CustomButton
//             title="Sign In"
//             handlePress={submit}
//             containerStyles="mt-7"
//             isLoading={isSubmitting}
//           />

//           <View className="flex justify-center pt-5 flex-row gap-2">
//             <Text className="text-lg text-gray-100 font-pregular">
//               Don't have an account?
//             </Text>
//             <Link
//               href="/sign-up"
//               className="text-lg font-psemibold text-secondary"
//             >
//               Signup
//             </Link>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   )
// }

// export default SignIn
