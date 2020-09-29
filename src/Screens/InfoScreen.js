import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as StylingContext } from '../Context/StylingContext';

import Header from '../Components/Header';
import Spacer from '../Components/Spacer';
import ChangeColor from '../Components/ChangeColor';

const SCREEN_WIDTH = Dimensions.get('window').width

const InfoScreen = ({ navigation }) => {

    //Context---------------------------------------
    const { state: { FontColor } } = useContext(StylingContext)

    return (
        <>
            <ChangeColor />
            <View style={styles.wrapper}>
                <Header
                    title='INFO'
                    design='Home'
                    target={() => navigation.navigate('Home')}
                />

                <Spacer />
                <Spacer />
                <Spacer />

                <ScrollView style={styles.content}>
                    <Text style={[styles.Text, { color: FontColor, textShadowColor: FontColor }]}>
                        Randominator takes all the decision making out of your life. Simply create a list, fill it with items, then Randominate it! We'll randomly select the winner from your list and make the decision for you!
                    </Text>

                    <Spacer />
                    <Spacer />

                    <Text h4 style={[styles.SubHeader, { color: FontColor, textShadowColor: FontColor }]}>
                        Creating a List
                    </Text>

                    <Spacer />

                    <Text style={[styles.Text, { color: FontColor, textShadowColor: FontColor }]}>
                        To create a list, simply head to the home page (from here you can hit the icon that looks like a home in the top left). From there, select 'Create List', and enter a name for your list and start adding items to your list using the input fields (Don't worry you can edit all of this later). Add as many items as you'd like to your list! Don't forget to hit 'Save List' when you're done!
                    </Text>

                    <Spacer />
                    <Spacer />

                    <Text h4 style={[styles.SubHeader, { color: FontColor, textShadowColor: FontColor }]}>
                        Randominating
                    </Text>

                    <Spacer />

                    <Text style={[styles.Text, { color: FontColor, textShadowColor: FontColor }]}>
                        Filled out your list and ready to get your random solution? Head back to the home page (if you're not already there) and select the 'Randominate' button. Here you will see all of your saved lists, simply select the one that you want to randomly select from. Then sit back and wait for a winner! Don't like the randomly selected item? Simply hit the 'Try Again' button to reshuffle through the same list!
                    </Text>

                    <Spacer />
                    <Spacer />

                    <Text h4 style={[styles.SubHeader, { color: FontColor, textShadowColor: FontColor }]}>
                        Editing a List
                    </Text>

                    <Spacer />

                    <Text style={[styles.Text, { color: FontColor, textShadowColor: FontColor }]}>
                        Forgot to add something to your list, or did you add something you didn't mean to, or want to rename the list, or OR do you want to delete a certain list? Simply select the 'Edit Lists' button from the home page, and select the list you'd like to edit. From there you could delete individual items by selecting the trash can icon next to the item, add an item in the Add Item input, Edit List Name by selecting 'Edit List Name' button, or select the Delete List Button (don't forget to confirm the delete). Don't see the function or item your trying to edit? Don't forget to scroll down, it should be there!
                    </Text>

                    <Spacer />
                    <Spacer />

                    <Text h4 style={[styles.SubHeader, { color: FontColor, textShadowColor: FontColor }]}>
                        Rando Number
                    </Text>

                    <Spacer />

                    <Text style={[styles.Text, { color: FontColor, textShadowColor: FontColor }]}>
                        Sometimes you just need a random number. We get it, we like randomly selected numbers too! That's why we made a quick way to find random numbers. Simply select 'Rando Number' from the home screen. From there you can enter a minimum number and Maximum Number, then hit 'Randominate' and wait for us to finish Randominating. Don't really like your random number? Simply hit the 'Try Again' button to try the same range again!
                    </Text>

                    <Spacer />
                    <Spacer />
                    <Spacer />
                    <Spacer />
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#09090a'
    },
    content: {
        flex: 1,
        width: .9 * SCREEN_WIDTH,
        alignSelf: 'center'
    },
    SubHeader: {
        fontFamily: 'Kailasa-Bold',
        textShadowRadius: 15,
        textAlign: 'center'
    },
    Text: {
        fontFamily: 'Kailasa-Bold',
        textShadowRadius: 15,
        fontSize: 20
    }
})

export default InfoScreen;