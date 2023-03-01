import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type OverlayLabelProps = {
  label: string;
  color: string;
};

const OverlayLabel = ({ label, color }: OverlayLabelProps) => (
  <View style={[styles.overlayLabel, { borderColor: color }]}>
    <Text style={[styles.overlayLabelText, { color }]}>{label}</Text>
  </View>
);

export default OverlayLabel;

const styles = StyleSheet.create({
  overlayLabel: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
  },
  overlayLabelText: {
    fontSize: 25,
    textAlign: 'center',
  },
});
