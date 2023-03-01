import React from 'react';
import { View, Text, Image, ImageSourcePropType } from 'react-native';
import { shape, string, number } from 'prop-types';
import styles from './styles';
import { colors } from '../../consts';
import { CatItem } from '../../services/cats';

const Card = ({ card }: { card: CatItem }) => {
    return (
        <View style={styles.card}>
          <Image style={styles.image} source={{uri:card?.image?.url}} resizeMode="cover" />
          <View style={styles.photoDescriptionContainer}>
            <View style={{ marginTop: 8 }}>
              <Text style={{ fontSize: 16, color: colors.black }}>{card?.name}</Text>
              <Text style={{ fontSize: 8, color: colors.gray, marginTop: 2 }}>
                Egypt
              </Text>
            </View>
      
            <View style={{ marginTop: 8 }}>
              <Text style={{ fontSize: 16, color: colors.black }}>{card?.affection_level}</Text>
            </View>
          </View>
        </View>
      );
}

export default Card;
