import { useState } from 'react'
import { Link, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, Text, ScrollView, Dimensions, Alert, Image } from 'react-native'

import { images } from '../../constants'
// import { createUser } from '../../lib/appwrite'
import { CustomButton, FormField } from '../../components'
import { createUser } from '../../lib/appwrite'
// import { useGlobalContext } from '../../context/GlobalProvider'

const SignUp = () => {
  // const { setUser, setIsLogged } = useGlobalContext()

  const [isSubmitting, setSubmitting] = useState(false)
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const errorTranslations = {
    'AppwriteException: Invalid `password` param: Password must be between 8 and 265 characters long, and should not be one of the commonly used password.':
      'Ошибка: Пароль должен быть от 8 до 265 символов и не должен быть одним из часто используемых паролей.',
    'AppwriteException: Rate limit for the current endpoint has been exceeded. Please try again after some time.':
      'Превышен предел скорости для текущей конечной точки. Пожалуйста, повторите попытку через некоторое время.',
    'AppwriteException: Invalid `email` param: Value must be a valid email address':
      'неверный параметр «email»: значение должно быть действительным адресом электронной почты.'
  }
  const submit = async () => {
    if (form.username === '' || form.email === '' || form.password === '') {
      Alert.alert('Error', 'Please fill in all fields')
    }

    setSubmitting(true)
    try {
      // createUser()
      const result = await createUser(form.email, form.password, form.username)
      setUser(result)
      setIsLogged(true)

      router.replace('/home')
    } catch (error) {
      console.log(0, error.message)
      const errorMessage = errorTranslations[error.message] || error.message
      Alert.alert('Ошибка', errorMessage)
      // Alert.alert('Error', error.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6"
          style={{
            minHeight: Dimensions.get('window').height - 100
          }}
        >
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign Up to Aora
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
          />

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
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
