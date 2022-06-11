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
            {title: 'Hawaii', data: ['Maui', 'Kauai', 'Honolulu']},
            {title: 'Florida', data: ['Destin', 'Sanibel Island', 'Clearwater Beach', 'Naples', 'Miami Beach']},
            {title: 'California', data: ['Malibu', 'Half Moon Bay', 'Laguna Beach', 'Monterey State Beach']},
            {title: 'North Carolina', data: ['Outer Banks']},
            {title: 'Virginia', data: ['Assateague Island']},
            {title: 'Oregon', data: ['Cannon Beach']},

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}

        />
      </View>
    );
}

export default SectionListBasics;