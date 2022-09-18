import { View, Text, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { styles } from './styles';

export interface GameProp{
    hourEnd: string;
    hourStart: string;
    id: string;
    name: string;
    useVoiceChannel: boolean;
    weekDays: string[];
    yearsPlaying: number;
}

interface Props{
    data: GameProp;
    onConnect: () => void;
}

export function DuoCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>Nome</Text>
        <Text style={[styles.value, {color: 'white'}]} numberOfLines={1}>{data.name}</Text>

        <Text style={styles.label}>Tempo de jogo</Text>
        <Text style={[styles.value, {color: 'white'}]}>{data.yearsPlaying} Ano(s)</Text>

        <Text style={styles.label}>Disponibilidade</Text>
        <Text style={[styles.value, {color: 'white'}]}>{data.weekDays.length} Dias - {data.hourStart} até {data.hourEnd}</Text>

        <Text style={styles.label}>Chamada de áudio?</Text>
        <Text style={[styles.value, {color: data.useVoiceChannel ? 'green' : 'red'}]}>{data.useVoiceChannel ? 'Sim' : 'Não'}</Text>

        <TouchableOpacity
            style={styles.button}
            onPress={onConnect}
        >   
            <MaterialCommunityIcons name='discord' size={25} color='#fff'/>
            <Text style={styles.txtBtn}>Conectar</Text>
        </TouchableOpacity>
    </View>
  );
}