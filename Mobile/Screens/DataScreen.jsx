import { useRoute } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';

function ShowDataScreen() {
    const route = useRoute();
    const persons = route.params?.persons;

    return (
        <SafeAreaView>
            <PersonsList persons={persons} />
        </SafeAreaView>
    );
}

function Person({ person }) {
    const birthDate = new Date(person.birthDate).toLocaleDateString('pl-PL', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
    });

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{person.personName}</Text>
            <Text style={styles.birthDate}>{birthDate}</Text>
            <Text style={styles.car}>{person.car}</Text>
        </View>
    );
}


function PersonsList({ persons }) {
    return (
        <ScrollView style={styles.list}>
            {persons.map((person) => (
                <Person key={person.personID} person={person} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 5,
        borderRadius: 10,
        elevation: 2,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    birthDate: {
        fontSize: 16,
        marginBottom: 5,
    },
    car: {
        fontSize: 16,
        color: "#666",
    },
});


export default ShowDataScreen;