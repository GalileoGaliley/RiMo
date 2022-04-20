// @ts-ignore
import React, {useEffect, useRef} from 'react';
import {View, Image, Dimensions, Animated, Easing, StyleSheet} from "react-native";
import {styles} from '../../Styles.js';

// @ts-ignore
import Portal from '../Static_images/portal.png';
const Preload = () => {
    const local_style = styles.preload
    let spinValue = new Animated.Value(0)
    Animated.timing(
        spinValue,
        {
            toValue: 1,
            duration: 5000,
            easing: Easing.linear
        }
    ).start()
    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })


    return (
        <Animated.View style={[{transform: [{rotate: spin}]},local_style.container]}>
            <Image style={local_style.image} source={Portal}/>
        </Animated.View>
    );
};

export default Preload;