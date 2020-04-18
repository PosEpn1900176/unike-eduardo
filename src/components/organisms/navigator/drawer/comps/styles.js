import { StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';

const styles = StyleSheet.create({
  icon: { color: 'rgb(142, 20, 20)' },
  buttonClose: { width: 50, position: 'absolute', right: 10, top: 30 },
  alignCenter: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  animated: progress => {
    return {
      transform: [
        {
          translateX: Animated.interpolate(progress, {
            inputRange: [0, 1],
            outputRange: [-100, 0],
          }),
        },
      ],
    };
  },
});

export default styles;
