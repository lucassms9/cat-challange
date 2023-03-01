import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';

import CatIcon from '../../icons/cat.svg';
import ChatIcon from '../../icons/chat.svg';
import UserIcon from '../../icons/user.svg';

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center' }}
          >
            {route.name === 'Home' && (
              <CatIcon fill={isFocused ? '#EC537E' : '#434141'} />
            )}
            {route.name === 'Chat' && (
              <ChatIcon stroke={isFocused ? '#EC537E' : '#434141'} />
            )}
            {route.name === 'Profile' && (
              <UserIcon stroke={isFocused ? '#EC537E' : '#434141'} />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 25,
    backgroundColor: '#fff',
    borderRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginHorizontal: width * 0.2,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
