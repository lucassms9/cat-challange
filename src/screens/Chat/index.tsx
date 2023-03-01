import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../consts';

export default function Chat() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>02</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  title: {
    fontSize: 160,
    color: '#BFBFC0',
  },
});
