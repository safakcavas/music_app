import React, {useState} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import musicData from './src/songCards_data.json';
import SongCard from './src/components/SongCard/SongCard';
import SearchBar from './src/components/SearchBar/SearchBar';
function App() {
  const [list,setList]=useState(musicData);
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filteredList=musicData.filter(song=>{
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    }) ;
    setList(filteredList); 
  };
  return (
    <View style={styles.container}>
      <SearchBar onChange={handleSearch} />
      <FlatList
        keyExtractor={list => list.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
}

////// 15 dakika
export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {
    borderWidth: 1,
    borderColor: 'gray',
  },
});
