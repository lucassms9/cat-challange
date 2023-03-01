import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../consts/';
const { height } = Dimensions.get('window');
export default StyleSheet.create({
  card: {
    /* Setting the height according to the screen height, it also could be fixed value or based on percentage. In this example, this worked well on Android and iOS. */
    height: height - 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 16,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  image: {
    borderRadius: 16,
    flex: 1,
    width: '100%',
  },
  photoDescriptionContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    height: 48,
    position: 'absolute',
    width: '85%',
    bottom: 0,
    backgroundColor: '#fff',
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    paddingLeft: 16,
    paddingRight: 8,
  },

  text: {
    textAlign: 'center',
    fontSize: 20,
    color: colors.black,
  },
});
