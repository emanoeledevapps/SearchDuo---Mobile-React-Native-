import { useEffect, useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Background from '../../components/Background';
import logoImg from '../../assets/logo-nlw-esports.png';
import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import {useNavigation} from '@react-navigation/native';

import { styles } from './styles';

export function Home() {
  const navigation = useNavigation();
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch('http://10.0.0.250:3333/games')
    .then(res => res.json())
    .then(data => {
      setGames(data);
    })
  },[]);

  function handleScreenGame({id, title, bannerUrl}: GameCardProps){
    navigation.navigate('game', {id, title, bannerUrl});
  }

  return (
    <Background>
    <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo}/>
        <Heading
            title="Encontre seu duo!"
            subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={item => item.id}
          renderItem={({item}) => <GameCard data={item} onPress={() => handleScreenGame(item)}/>}
          horizontal={true}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />
    </SafeAreaView>
    </Background>
  );
}