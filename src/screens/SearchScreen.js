import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <View>
      <Text>Search Screen</Text>
      <SearchBar
        searchTerm={searchTerm}
        onTermChange={newTerm => setSearchTerm(newTerm)}
        onTermSubmit={() => {}}
      />
      <Text>{searchTerm}</Text>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
