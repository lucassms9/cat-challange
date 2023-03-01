import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { StyleSheet } from 'react-native';
import { colors } from '../../consts';

type IconButtonProps = {
  onPress: () => void;
  icon: JSX.Element;
};
const IconButton = ({ onPress, icon }: IconButtonProps) => (
  <View testID="iconButtonContainer">
    <TouchableOpacity
      style={[styles.singleButton]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      {icon}
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  singleButton: {
    backgroundColor: colors.white,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.3,
    elevation: 1,
    padding: 15,
  },
});

export default IconButton;
