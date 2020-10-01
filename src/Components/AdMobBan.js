import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { AdMobBanner } from 'expo-ads-admob'

const AdMobBan = () => {

    //State------------------------------------------------------

    //Context----------------------------------------------------

    //Functions--------------------------------------------------

    //Show-------------------------------------------------------

    return (
        <>
            <Text style={styles.adText}>
                ad
            </Text>

            <View style={styles.adStyle}>
                <AdMobBanner
                    bannerSize='smartBannerPortrait'
                    adUnitID='ca-app-pub-8611757228555808/8683103982'
                    servePersonalizedAds={true}
                    onDidFailToReceiveAdWithError={(error) => console.log({ error })}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    adStyle: {
        backgroundColor: '#565661',
        marginBottom: 20,
        borderTopWidth: 3,
        borderTopColor: '#565661',
        borderBottomWidth: 3,
        borderBottomColor: '#565661',
    },
    adText: {
        color: '#565661',
        marginLeft: 10,
        fontSize: 15,
        fontFamily: 'Kailasa-Bold'
    }
})

export default AdMobBan;