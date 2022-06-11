import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import ButtonBasics from './list_items';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
   },
  header: {
    paddingtop: 10,
    paddingBottom: 5,
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    alignItems: 'center',
  },
  sectionHeader: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 280,
    paddingBottom: 5,
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#deb887',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})

const SectionListBasics = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header}>Beaches</Text>
        </View>
        <SectionList
          sections={[
            {title: 'Hawaii', data: [{'beach': 'Maui', 'likes': 0}, {'beach': 'Kauai', 'likes': 0}, {'beach':'Honolulu', 'likes': 0}]},
            {title: 'California', data: [{'beach': 'Malibu', 'likes': 0}, {'beach': 'Half Moon Bay', 'likes': 0}, {'beach': 'Laguna Beach', 'likes': 0}, {'beach': 'Monterey State Beach', 'likes': 0}]},
            {title: 'North Carolina', data: [{'beach': 'Outer Banks', 'likes': 0}]},
            {title: 'Virginia', data: [{'beach': 'Assateague Island', 'likes': 0}]},
            {title: 'Oregon', data: [{'beach': 'Cannon Beach', 'likes': 0}]},

          ]}
          renderItem={({item}) => <ButtonBasics name={item.beach} likes={item.likes}/>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}

        />
      </View>
    );
}

export default SectionListBasics;