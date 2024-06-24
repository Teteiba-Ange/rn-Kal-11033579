import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useTheme } from '../ThemeContext';

const transactions = [
    { id: '1', name: 'Apple Store', description: 'Entertainment', amount: '- $5.99', icon: require('../assets/apple.png') },
    { id: '2', name: 'Spotify', description: 'Music', amount: '- $12.99', icon: require('../assets/spotify.png') },
    { id: '3', name: 'Money Transfer', description: 'Transaction', amount: '$300', icon: require('../assets/moneyTransfer.png') },
    { id: '4', name: 'Grocery', description: 'Shopping', amount: '- $88', icon: require('../assets/grocery.png') },
];

export default function HomeScreen() {
    const { isDarkTheme } = useTheme();
    const styles = createStyles(isDarkTheme);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image style={styles.profileImage} source={require('../assets/RahKayy.jpg')} />
                <Text style={styles.welcomeText}>Welcome back,</Text>
                <Text style={styles.name}>Angela Acquah</Text>
                <View style={styles.searchContainer}>
                    <Image style={[styles.icons, { tintColor: isDarkTheme ? 'white' : 'black' }]} source={require('../assets/search.png')} />
                </View>
            </View>
            <View style={styles.paymentInfo}>
                <Image style={styles.creditCard} source={require('../assets/Card.png')} />
                <View style={styles.paymentOptionsContainers}>
                    {['send', 'recieve', 'loan', 'topUp'].map((item, index) => (
                        <View key={index} style={styles.paymentOptions}>
                            <View style={styles.iconsContainer}>
                                <Image style={[styles.icons, { tintColor: isDarkTheme ? 'white' : 'black' }]} source={require(`../assets/${item}.png`)} />
                            </View>
                            <Text style={styles.optionsText}>{item}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.transactionsContainer}>
                <Text style={styles.transactionText}>Transactions</Text>
                <Text style={{ color: 'blue' }}>See All</Text>
            </View>
            <FlatList
                data={transactions}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.transactions}>
                        <View style={styles.iconsContainer}>
                            <Image style={styles.icons} source={item.icon} />
                        </View>
                        <View style={styles.transactionDetails}>
                            <Text style={styles.transactionName}>{item.name}</Text>
                            <Text style={styles.transactionDescription}>{item.description}</Text>
                        </View>
                        <Text style={[styles.transactionAmount, { color: item.amount.includes('$') ? 'red' : (isDarkTheme ? 'white' : 'black') }]}>
                            {item.amount}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
}

const createStyles = (isDarkTheme) => StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: isDarkTheme ? '#0A0115' : '#ffffff',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 100,
        backgroundColor: '#FFFFFF',
    },
    welcomeText: {
        fontSize: 14,
        fontFamily: 'Poppins',
        opacity: 0.5,
        color: isDarkTheme ? 'white' : 'black',
    },
    name: {
        fontSize: 18,
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        color: isDarkTheme ? 'white' : 'black',
    },
    searchContainer: {
        width: 40,
        height: 40,
        backgroundColor: isDarkTheme ? '#1F1E2E' : '#F8F8F8',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    creditCard: {
        width: '100%',
        height: 150,
        marginTop: 20,
        resizeMode: 'contain',
    },
    paymentOptionsContainers: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
    },
    paymentOptions: {
        alignItems: 'center',
    },
    optionsText: {
        fontSize: 14,
        marginTop: 5,
        color: isDarkTheme ? 'gray' : 'black',
    },
    iconsContainer: {
        width: 50,
        height: 50,
        backgroundColor: isDarkTheme ? '#1F1E2E' : '#F8F8F8',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons: {
        width: 24,
        height: 24,
    },
    transactionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        marginTop: 20,
    },
    transactionText: {
        fontSize: 18,
        fontWeight: '600',
        color: isDarkTheme ? 'white' : 'black',
    },
    transactions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    transactionDetails: {
        flex: 1,
        marginLeft: 12,
    },
    transactionDescription: {
        fontSize: 12,
        fontWeight: '400',
        color: isDarkTheme ? 'lightgray' : 'gray',
    },
    transactionName: {
        fontSize: 16,
        fontWeight: '500',
        color: isDarkTheme ? 'white' : 'black',
    },
    transactionAmount: {
        fontSize: 16,
    },
});
