import { FlatList, Image, RefreshControl, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'

import useAppwrite from '../../lib/useAppwrite'

import { SearchInput, Trending, EmptyState, VideoCard } from '../../components'
import { useState } from 'react'
import { getAllPosts } from '../../lib/appwrite'

const Home = () => {
  // Унесли в отдельный хук
  // const [data, setData] = useState([])
  // const [isLoading, setIsLoading] = useState(true)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true)

  //     try {
  //       const response = await getAllPosts()
  //       setData(response)
  //     } catch (error) {
  //       console.log(0, 'Home', error.message)
  //       Alert.alert('Error', error.message)
  //     } finally {
  //       setIsLoading(false)
  //     }
  //   }
  //   fetchData()
  // }, [])

  const { data: posts, refetch } = useAppwrite(getAllPosts)
  // const { data: latestPosts } = useAppwrite(getLatestPosts)

  console.log(11, 'Home posts', posts)

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        // data={[]}
        // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="flex my-6 px-4 space-y-6">
            <View className="flex justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  JSMastery
                </Text>
              </View>

              <View className="mt-1.5">
                <Image
                  source={images.logoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                />
              </View>
            </View>

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>

              {/* <Trending posts={latestPosts ?? []} /> */}
              <Trending posts={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="Видео не найдено"
            subtitle="Видео еще не создано"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  )
}
export default Home
