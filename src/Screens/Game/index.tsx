import {useEffect, useState} from 'react';
import { Text, Image, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { styles } from './styles';
import Background from '../../components/Background';
import { GameParams } from '../../@types/navigation';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { DuoCard, GameProp } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';

export function Game() {
    const route = useRoute();
    const game = route.params as GameParams;
    const [gameData, setGameData] = useState<GameProp[]>([]);
    const [discordSelected, setDisccordSelected] = useState('');

    useEffect(() => {
        fetch(`http://10.0.0.250:3333/games/${game.id}/ads`)
        .then(res => res.json())
        .then(data => {
        setGameData(data);
        })
    },[]);

    function getDiscordUser(adsId:string) {
        fetch(`http://10.0.0.250:3333/ads/${adsId}/discord`)
        .then(res => res.json())
        .then(data => {
            setDisccordSelected(data.discord);
        })
    }

    return (
    <Background>
    <SafeAreaView style={styles.container}>
      
        <Header/>
        <Image 
            source={{uri: game.bannerUrl}}
            style={styles.bannerGame}
        />
        <Heading 
            title={game.title}
            subtitle='Conecte-se para começar a jogar!'
        />

        <FlatList
            data={gameData}
            keyExtractor={item => item.id}
            renderItem={({item}) => <DuoCard data={item} onConnect={() => getDiscordUser(item.id)}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={[styles.contentList, gameData.length === 0 && {flex: 1, alignItems: 'center', justifyContent: 'center'}]}
            style={styles.containerList}
            ListEmptyComponent={() => (
                <Text style={styles.emptyListText}>
                    Não há anúncios publicados para esse jogo!
                </Text>
            )}
        />

        <DuoMatch
            visible={discordSelected.length > 0}
            discord={discordSelected}
            onClose={() => setDisccordSelected('')}
        />
    </SafeAreaView>
    </Background>
  ); 
}