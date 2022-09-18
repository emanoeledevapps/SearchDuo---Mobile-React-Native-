import { View, Modal, ModalProps, Text, TouchableOpacity, ToastAndroid } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps{
    discord: string;
    onClose: () => void;
}

export function DuoMatch({discord, onClose,...rest}: Props) {
    async function handleCopyDiscordToClipboard(){
        await Clipboard.setStringAsync(discord);
        ToastAndroid.show('Discord copiado para a área de transferência!', ToastAndroid.LONG)
    }

    return (
        <Modal 
            animationType='fade'
            transparent
            statusBarTranslucent
            {...rest}
        >
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity
                    onPress={onClose}
                    style={styles.iconClose}
                >
                    <MaterialIcons name='close' size={25} color={THEME.COLORS.CAPTION_500}/>
                </TouchableOpacity>

                <MaterialCommunityIcons name='check-circle-outline' size={64} color={THEME.COLORS.SUCCESS} />

                <Heading
                    title='Let`s Play!'
                    subtitle='Agora é só começar a jogar!'
                    style={{alignItems: 'center', marginTop: 20}}
                />
                <Text style={styles.label}>
                    Adicione no discord
                </Text>
                <TouchableOpacity
                    onPress={handleCopyDiscordToClipboard}
                    style={styles.btnDiscord}
                >
                    <Text style={styles.discord}>
                        {discord}
                    </Text>
                </TouchableOpacity>
                
            </View>
        </View>
        </Modal>
    );
}