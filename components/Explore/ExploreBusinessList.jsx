import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import BusinessListCard from './BusinessListCard'

export default function ExploreBusinessList({businessList}) {
  return (
    <ScrollView showsVerticalScrollIndicator = {
      false
    }>
    <FlatList 
showsVerticalScrollIndicator ={false}
    data={businessList} 
    renderItem={({item , index})=>(
        <View>
<BusinessListCard business = {item}  key ={index} />
        </View>
    )}
     />
     <View style={{height : 250}}></View>
    </ScrollView>
  )
}