import { View, StyleSheet, Text } from 'react-native';
import {Calendar} from 'react-native-calendars';
import ButtonBasics from './calendar_icon';
// npm install --save react-native-calendars

const CurrCalendar = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.header}>Plan Your Visit</Text>
            </View>
            <Calendar
            markedDates={{
                '2022-06-12': {selected: true, marked: true, selectedColor: 'powderblue'}
              }}
            />
            <ButtonBasics />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 70,
        justifyContent: 'center',
    },
    header: {
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 40,
        fontWeight: 'bold',
        fontStyle: 'italic',
        backgroundColor: `powderblue`
    }
})

export default CurrCalendar;