import { FlatList, Image, RefreshControl, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'

// import useAppwrite from '../../lib/useAppwrite'
// import { getAllPosts, getLatestPosts } from '../../lib/appwrite'

import { SearchInput, Trending, EmptyState } from '../../components'
import { useState } from 'react'

const Home = () => {
  // const { data: posts, refetch } = useAppwrite(getAllPosts)
  // const { data: latestPosts } = useAppwrite(getLatestPosts)

  // console.log(11, posts)

  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = async () => {
    setRefreshing(true)

    setRefreshing(false)
  }
  // const onRefresh = async () => {
  //   setRefreshing(true)
  //   await refetch()
  //   setRefreshing(false)
  // }

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        // data={[]}
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <Text className="text-3xl text-slate-50">{item.id}</Text>
        )}
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
                  // resizeMode="contain"
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
