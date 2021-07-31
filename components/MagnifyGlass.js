import React, { useRef, useState } from 'react'
import {
  StyleSheet,
  View,
  Image,
  PanResponder,
  Animated,
  Text
} from 'react-native'

export default function MagnifyGlass({src, magSrc, mag=1}) {
  const [ zoomX, setZoomX ] = useState(0);
  const [ zoomY, setZoomY ] = useState(0);

  const pan = useRef(new Animated.ValueXY({x: 100, y: 200})).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: pan.x, dy: pan.y }
        ],
        {
          useNativeDriver: false,
          listener: (event, gesture) => {
            setZoomX(zoomX - gesture.moveX);
            setZoomY(zoomY - gesture.moveY);
          }
        }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  const dragListener = (event, gesture) => {
    console.log(event.nativeEvent.locationX);
  };

  const panStyle = { transform: [{ translateX: pan.x }, { translateY: pan.y }] };
  const zoomImgDimension = {
    width: 300 * mag,
    height: 400 * mag,
    top: zoomY,
    left: zoomX
    // transform: [
    //   { translateX: pan.x },
    //   { translateY: pan.y }
    // ]
  };

  return (
    // component container
    <View style={styles.magContainer}>

      {/* background image */}
      <Image
        style={styles.normalImage}
        source={src}>
      </Image>

      {/* magnifying glass */}
      <Animated.View
        {...panResponder.panHandlers}
        style={[panStyle, styles.glass]}
      >
      {/* pseudo zoom image */}
        <Image
          {...panResponder.panHandlers}
          style={[styles.zoomImage, zoomImgDimension]}
          source={magSrc}>
        </Image>

      </Animated.View>
    </View>

  );
};

const circleRadius = 30;

const styles = StyleSheet.create({
  magContainer: {
    width: 300,
    height: 400,
    position: 'relative'
  },
  normalImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    zIndex: -1
  },
  zoomImage: {
    position: 'relative',
    resizeMode: 'cover',
    zIndex: 10
  },
  glass: {
    width: circleRadius * 2,
    height: circleRadius * 2,
    borderRadius: circleRadius,
    borderColor: 'white',
    borderWidth: 3,
    zIndex: 20,
    position: 'relative',
    overflow: 'hidden'
  }
});