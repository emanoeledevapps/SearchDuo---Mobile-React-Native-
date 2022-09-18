import { View, TouchableOpacity, Image } from 'react-native';
import {Entypo} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png'

export function Header() {
    const navigation = useNavigation();
    return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Entypo name='chevron-thin-left' size={30} color={THEME.COLORS.CAPTION_300}/>
        </TouchableOpacity>

        <Image source={logoImg} style={styles.logo}/>
        <View style={styles.right}/>
    </View>
  );
}