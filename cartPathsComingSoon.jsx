import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {Theme} from 'utils/Theme.util';
import AppText from 'components/AppText';
import {WrapperWithHeader} from 'components/Wrapper';
import styles from './styles';
import fonts from 'assets/fonts';

export default function CartPathsComingSoon({navigation}) {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Cart Paths',
      headerTitleStyle: {color: '#000', fontStyle: fonts.Raleway.Bold},
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Optional header wrapper */}
      {/* <WrapperWithHeader headerContainerStyle={styles.headerStyle}> */}

      <View style={styles.centerContent}>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/4076/4076549.png',
          }}
          style={styles.comingSoonImage}
        />
        <AppText style={styles.comingSoonTitle} weight="bold">
          Coming Soon!
        </AppText>
        <AppText style={styles.comingSoonSubtitle} weight="light">
          Our Cart Paths feature is on its way. Stay tuned!
        </AppText>
      </View>

      {/* </WrapperWithHeader> */}
    </View>
  );
}
