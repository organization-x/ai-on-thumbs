import React from 'react'
import { StyleSheet, View } from 'react-native'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import FootPrint from '../components/FootPrint'
import MagnifyGlass from '../components/MagnifyGlass'

export default function Magnify() {
  return (
    <View>
      <MagnifyGlass
        src={require('../assets/normalpix.png')}
        magSrc={require('../assets/enlargpix.png')}>
      </MagnifyGlass>
    </View>
  );
};
