import { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper, { SwiperProps } from 'react-native-deck-swiper';

import Card from '../../components/Card';
import IconButton from '../../components/IconButton';
import OverlayLabel from '../../components/OverlayLabel';
import { colors } from '../../consts';

import CloseIcon from '../../icons/x.svg';
import HeartIcon from '../../icons/heart.svg';
import { listCats, CatItem, voting } from '../../services/cats';

const { height } = Dimensions.get('window');

export default function Home() {
  const useSwiper = useRef<Swiper<CatItem>>(null);

  const [items, setItems] = useState<CatItem[]>([]);

  const handleOnSwipedLeft = () => useSwiper.current?.swipeLeft();
  const handleOnSwipedRight = () => useSwiper.current?.swipeRight();

  const onSwipedLeft = (index: number) => {
    voting({
      image_id: items[index].image.id,
      value: -1,
    });
  };

  const onSwipedRight = (index: number) => {
    voting({
      image_id: items[index].image.id,
      value: 1,
    });
  };

  useEffect(() => {
    async function getItems() {
      const { data } = await listCats();
      setItems(data);
    }
    getItems();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <Swiper
          onSwipedLeft={onSwipedLeft}
          onSwipedRight={onSwipedRight}
          ref={useSwiper}
          animateCardOpacity
          containerStyle={styles.container}
          cards={items}
          renderCard={(card) => card && <Card card={card} key={card.id} />}
          cardIndex={0}
          backgroundColor="white"
          infinite
          animateOverlayLabelsOpacity
          overlayLabels={{
            left: {
              title: 'NOPE',
              element: <OverlayLabel label="NOPE" color={colors.nope} />,
              style: {
                wrapper: styles.overlayWrapper,
              },
            },
            right: {
              title: 'LIKE',
              element: <OverlayLabel label="LIKE" color={colors.like} />,
              style: {
                wrapper: {
                  ...styles.overlayWrapper,
                  alignItems: 'flex-start',
                  marginLeft: 30,
                },
              },
            },
          }}
        />
      </View>
      <View style={styles.buttonsContainerWrapper}>
        <View style={styles.buttonsContainer}>
          <IconButton icon={<CloseIcon />} onPress={handleOnSwipedLeft} />
          <IconButton onPress={handleOnSwipedRight} icon={<HeartIcon />} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.background,
  },
  swiperContainer: {
    height: height - 250,
  },
  buttonsContainerWrapper: {
    flex: 1,
    backgroundColor: colors.background,
  },
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: '15%',
    gap: 48,
  },
  copyright: {
    textAlign: 'center',
    fontSize: 10,
    color: 'black',
    paddingBottom: 20,
    fontFamily: 'Avenir',
  },
  overlayWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginLeft: -30,
  },
});
