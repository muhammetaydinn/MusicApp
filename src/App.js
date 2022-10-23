import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import music_data from './music_data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SongCard/SearchBar';
function App() {
  const [list, setList] = useState(music_data);
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };
  const renderSong = ({ item }) => (
    <SongCard song={item} />
  );
  const renderSeperator = ({}) => <View style={styles.seperator} />;
  
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {borderWidth: 1, borderColor: '#e0e0e0'},
});
