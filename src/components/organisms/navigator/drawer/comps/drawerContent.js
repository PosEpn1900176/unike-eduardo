import React from 'react';
import { H3, Image, Button, Icon, Text, Content } from 'native-base';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';
import { ImageUser } from '../../../imageUser';
import { logo } from '../../../../../images';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

const DrawerContent = ({ progress, ...props }) => {
  const user = useSelector(state => state.user);
  console.log(user);

  const closeDrawer = () => {
    props.navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView {...props}>
      <Button transparent style={styles.buttonClose} onPress={closeDrawer}>
        <Icon name="close" />
      </Button>
      <View style={styles.alignCenter}>
        <View style={styles.image}>
          <ImageUser photo={user.Foto} />
        </View>
        <View>
          <Text>
            {user.Nome} {user.Sobrenome}
          </Text>
        </View>
      </View>
      <Animated.View style={styles.animated(progress)}>
        <DrawerItemList {...props} />
      </Animated.View>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
