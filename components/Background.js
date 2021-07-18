import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default function Background({ children, style }) {
    return (
        <SafeAreaView style={[styles.background, style]}>
            {children}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    background: {
      flex: 1,
      maxWidth: '100%',
      width:"100%",
      backgroundColor: "#F3F3F3",
      alignItems:"center",
      marginTop: Platform.OS === "android" ? getStatusBarHeight() : 0,
    }
});