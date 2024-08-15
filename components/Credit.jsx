import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";


const Credit = ({ Name, Expiry }) => {
    return (
        <View>  
            <Text style={{alignSelf: 'flex-start', color: 'white', fontSize: 16, fontWeight: '600', margin: 5, paddingBottom:2}}>Credit Card</Text>
            <LinearGradient
                colors={["#252A32", "rgba(38, 43, 51, 0)"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.container}
            >
                <View style={styles.creditCard}>
                    <View style={styles.topContainer}>
                        <Image style={{size:30}} source={require('../assets/creditChip.png')} />
                        <Image style={{size:30, marginRight: 10}} source={require('../assets/creditLogo.png')} />
                    </View>
                    <View style={styles.creditNumberContainer}>
                        <Text style={{color: 'white', fontSize:17, letterSpacing:5,fontWeight:'600'}}>4580 0308 2976 0048</Text>
                    </View>
                    <View style={styles.creditInfo}>
                        <View>
                            <Text style={{color: '#AEAEAE', fontSize:12}}>Card Holder Name</Text>
                            <Text style={{color: 'white', fontSize:16, fontWeight:'700',letterSpacing:3, marginTop:3}}>{Name}</Text>
                        </View>
                        <View>
                            <Text style={{color: '#AEAEAE', fontSize:12}}>Expiry Date</Text>
                            <Text style={{color: 'white', fontSize:16, fontWeight:'400',letterSpacing:3, marginTop:3}}>{Expiry}</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}


export default Credit

const styles = StyleSheet.create({
    container: {
        width: 315, // Ensure this is 100% to take full width
        alignItems: 'center', // Center align items
        justifyContent: 'center', // Center justify content
        borderRadius: 15,
    },
    creditCard: {
        width: '100%', // Ensure the card takes full width
        height: 190, // Adjust height as needed
        padding: 10, // Add padding for inner spacing
        alignItems: 'center', // Center align items
        justifyContent: 'space-between', // Space between items
        padding:10,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    creditNumberContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    creditInfo: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
});
