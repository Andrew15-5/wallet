import Animated, { Extrapolate, interpolate, runOnJS, useAnimatedReaction, useAnimatedStyle } from 'react-native-reanimated';
import { useBottomTabBarHeight } from '$hooks/useBottomTabBarHeight';
import { usePagerView } from './hooks/usePagerView';
import FastImage from 'react-native-fast-image';
import { StyleSheet } from 'react-native';
import funny from '$assets/funny.json';
import { Haptics, ns } from '$utils';
import { memo } from 'react';

export const PageViewFunny = memo(() => {
  const tabBarHeight = useBottomTabBarHeight();
  const { pageOffset } = usePagerView();

  useAnimatedReaction(
    () => pageOffset.value,
    () => {
      if (pageOffset.value > 1.8 && pageOffset.value < 2) {
        runOnJS(Haptics.notificationSuccess)();
      }
    },
  );

  const funnyStyle = useAnimatedStyle(() => ({
    transform: [{ 
      translateX: pageOffset.value > 2 ? 50 : interpolate(
        pageOffset.value,
        [1.8, 1.9],
        [50, -80],
        Extrapolate.CLAMP
      )
    }]
  }));

  const imageUri = { uri: funny.image };

  return (
    <Animated.View style={[styles.funny, funnyStyle, { bottom: ns(16) + tabBarHeight }]}>
      <FastImage source={imageUri} style={styles.image} />
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  funny: {
    position: 'absolute',
    right: -80,
  },
  image: {
    width: ns(132),
    height: ns(132),
  },
});