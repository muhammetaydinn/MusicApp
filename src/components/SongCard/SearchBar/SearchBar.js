import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import styles from "./SearchBar.styles";
const SearchBar = props => {
    
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={props.onSearch}
          style={styles.textInput}
          placeholder="Search... "
        />
      </View>
    );
}

export default SearchBar;