import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../constants'
import { Redirect, router } from 'expo-router'
import { Image, ScrollView, Text, View } from 'react-native'
import CustomButton from '../components/CustomButton'

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView
        contentContainerStyle={{
          height: '100%'
        }}
      >
        <View className="w-full flex justify-center items-center h-full px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with{' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            {' '}
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}
// import { StatusBar } from 'expo-status-bar'

// import { Link } from 'expo-router'

// export default function App() {
//   return (
//     <View className=" flex-1 justify-center items-center bg-white">
//       <Text className=" text-3xl  font-pblack">Aora</Text>
//       <StatusBar style="auto" />
//       <Link href="/home" style={{ color: 'blue' }}>
//         Go to Home
//       </Link>
//     </View>
//   )
// }

// import { StatusBar } from "expo-status-bar";
// import { Redirect, router } from "expo-router";
// import { View, Text, Image, ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// import { images } from "../constants";
// import { CustomButton, Loader } from "../components";
// import { useGlobalContext } from "../context/GlobalProvider";

// const Welcome = () => {
//   const { loading, isLogged } = useGlobalContext();

//   if (!loading && isLogged) return <Redirect href="/home" />;

//   return (
//     <SafeAreaView className="bg-primary h-full">
//       <Loader isLoading={loading} />

//       <ScrollView
//         contentContainerStyle={{
//           height: "100%",
//         }}
//       >
//         <View className="w-full flex justify-center items-center h-full px-4">
//           <Image
//             source={images.logo}
//             className="w-[130px] h-[84px]"
//             resizeMode="contain"
//           />

//           <Image
//             source={images.cards}
//             className="max-w-[380px] w-full h-[298px]"
//             resizeMode="contain"
//           />

//           <View className="relative mt-5">
//             <Text className="text-3xl text-white font-bold text-center">
//               Discover Endless{"\n"}
//               Possibilities with{" "}
//               <Text className="text-secondary-200">Aora</Text>
//             </Text>

//             <Image
//               source={images.path}
//               className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
//               resizeMode="contain"
//             />
//           </View>

//           <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
//             Where Creativity Meets Innovation: Embark on a Journey of Limitless
//             Exploration with Aora
//           </Text>

//           <CustomButton
//             title="Continue with Email"
//             handlePress={() => router.push("/sign-in")}
//             containerStyles="w-full mt-7"
//           />
//         </View>
//       </ScrollView>

//       <StatusBar backgroundColor="#161622" style="light" />
//     </SafeAreaView>
//   );
// };

// export default Welcome;
