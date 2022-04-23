import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { PageTitle } from '../../../components/PageTitle'
import { ListComunity } from '../components/ListComunity'
import { SearchBar } from '../components/SearchBar'

export const CommunityScreen = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <PageTitle title="Red de emprendedores"/>
        <SearchBar />
        <ListComunity />
      </ScrollView>
    </SafeAreaView>
  )
}
