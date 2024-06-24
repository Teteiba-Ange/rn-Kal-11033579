import React from 'react';
import { View, Text, StyleSheet, Switch, SafeAreaView, Image } from 'react-native';

 import { useTheme } from '../ThemeContext';

export default function SettingsScreen() {
    const { isDarkTheme, toggleTheme } = useTheme();
    const styles = createStyles(isDarkTheme);
 return (
        
        <View style={styles.settingsContainer}>
            <Text style={[styles.title, isDarkTheme && styles.darkTitle]}>Settings</Text>
            <View style={styles.settingsContent}>
            <View style={styles.settingsInfoContainer}>
                <View style={styles.infoContainer}>
                <Text style={[styles.language, isDarkTheme && styles.darkText]}>Language</Text>
                <Image style={styles.arrow} source={require('../assets/arrow.png')} />
                </View>
                <View style={styles.infoContainer}>
                <Text style={[styles.language, isDarkTheme && styles.darkText]}>My Profile</Text>
                <Image style={styles.arrow} source={require('../assets/arrow.png')} />
                </View>
                <View style={styles.infoContainer}>
                <Text style={[styles.language, isDarkTheme && styles.darkText]}>Contact Us</Text>
                <Image style={styles.arrow} source={require('../assets/arrow.png')} />
                </View>
                <View style={styles.infoContainer}>
                <Text style={[styles.language, isDarkTheme && styles.darkText]}>Change Password</Text>
                <Image style={styles.arrow} source={require('../assets/arrow.png')} />
                </View>
                <View style={styles.infoContainer}>
                <Text style={[styles.language, isDarkTheme && styles.darkText]}>Privacy Policy</Text>
                <Image style={styles.arrow} source={require('../assets/arrow.png')} />
                </View>
            </View>
            </View>
            <View style={styles.option}>
            <Text style={isDarkTheme ? styles.theme : styles.lightText}>Theme</Text>
            <Switch
                style={styles.toggleSwitch}
                onValueChange={toggleTheme}
                value={isDarkTheme}
            />
            </View>
        </View>
        
    );
    }
    const createStyles = (isDarkTheme) => StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
            backgroundColor: 'white',
        },
        darkContainer: {
            backgroundColor: '#0A0115',
        },
        settingsContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            position: 'relative',
            bottom: 20,
        },
        title: {
            position: 'relative',
            fontSize: 22,
            fontWeight: '600',
            marginBottom: 16,
            bottom: 40,
        },
        darkTitle: {
            color: 'white',
        },
        settingsContent: {
            width: '100%',
            marginBottom: 16,
        },
        settingsInfoContainer: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 8,
            width: '100%',
        },
        infoContainer: {
            width: '100%',
            bottom: 60,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 8,
            borderBottomWidth: 0.17,
            borderBottomColor:  isDarkTheme ? '#212128' : '#EAE8E8',
            padding: 30,
        },
        language: {
            position: 'absolute',
            fontSize: 16,
            fontWeight: '600',
            left: 20,
            top: 30,
            color: 'black',
        },
        darkText: {
            color: 'white',
        },
        theme: {
            position: 'absolute',
            fontSize: 24,
            fontWeight: '600',
            left: 20,
            color: 'white',
        },
        arrow: {
            position: 'absolute',
            width: 14,
            height: 14,
            top: 35,
            right: 20,
            tintColor: isDarkTheme ? 'white' : 'black',
        },
        option: {
            width: '100%',
            position: 'relative',
            bottom: 100,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 8,
        },
        lightText: {
            position: 'absolute',
            fontSize: 24,
            fontWeight: '600',
            left: 20,
        },
        toggleSwitch: {
            position: 'absolute',
            right: 20,
        },
        });