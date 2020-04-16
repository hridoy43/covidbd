import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Appbar, Searchbar, Title, ActivityIndicator, Colors } from 'react-native-paper';
import CountryItemStats from '../components/CountryItemStats'
import axios from 'axios'
import Constants from 'expo-constants';

export default function GlobalScreen({ navigation }) {

  const [data, setData] = useState([])
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(true)

  const fetchCovidAllData = () => {
    axios.get('https://corona.lmao.ninja/countries')
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch(err => {
        Console.warn(err)
      })
  }

  useEffect(() => {
    fetchCovidAllData()
  }, [])

  const renderList = (item) => {
    return (
      <View>
        <CountryItemStats data={item} />
      </View >
    )
  }


  const filterData = (data) => {
    if (query) {
      let regexp = new RegExp(query.trim(), "i");
      return data.filter(item => item.country.match(regexp))
    }
    return data
  }


  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appbarHeader} statusBarHeight={Constants.statusBarHeight + 16} theme={theme}>
        <Title style={{ color: 'white' }}>GLOBAL UPDATE</Title>
        <Searchbar
          placeholder="Country"
          onChangeText={queryString => { setQuery(queryString) }}
          value={query}
        />
      </Appbar.Header>
      {loading ?
        <View style={styles.activityIndicatorView}>
          <ActivityIndicator animating={true} size="large" color={Colors.red800} />
        </View>
        :
        <View style={styles.contentContainer}>
          <FlatList
            data={filterData(data)}
            renderItem={({ item }) => {
              return renderList(item)
            }}
            keyExtractor={(item, index) => `${index}`}
            maxToRenderPerBatch={5}
            initialNumToRender={5}
            refreshing={loading}
            onRefresh={() => { setLoading(true); fetchCovidAllData() }}
          />
        </View>
      }
    </View >
  );
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
  appbarHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    margin: 5
  },
  itemHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  activityIndicatorView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
