import React, { useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { ActivityIndicator, Colors, FAB } from 'react-native-paper'
import axios from 'axios'
import RenderPieChart from '../components/RnderPieChart'
import TodaysCase from '../components/TodaysCase'
import AppTopBar from '../components/AppTopBar'
import WorldStatistics from '../components/WorldStatistics'



export default function HomeScreen({ navigation, route }) {

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchCovidData = () => {
    axios.get('https://corona.lmao.ninja/v2/countries/Bangladesh')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(err => {
        console.warn(err.message)
      })
  }

  useEffect(() => {
    fetchCovidData()
  }, [])

  return (
    <View style={styles.container}>
      <AppTopBar title="COVID BD" navigation={navigation} route={route} position="center" />

      {loading ?
        <View style={styles.activityIndicatorView}>
          <ActivityIndicator animating={true} size="large" color={Colors.red800} />
        </View>
        :
        <ScrollView refreshing={loading}
          onRefresh={() => { fetchCovidData() }}>

          <View>
            <RenderPieChart countryData={data} />
            <TodaysCase countryData={data} />
            {<WorldStatistics />}
          </View>
        </ScrollView>
      }
      <FAB
        style={styles.fab}
        small
        icon="refresh"
        onPress={() => { setLoading(true); fetchCovidData() }}
      />
    </View>
  )
}

const theme = {
  colors: {
    primary: '#10A881',
    accent: '#ffffff'

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  appbarTitle: {
    alignItems: 'center',
    marginLeft: 44
  },
  activityIndicatorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: "#fafafa"
  }

})
