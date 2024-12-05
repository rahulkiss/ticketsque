import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SearchIcon from '../../assets/svg/SearchIcon.svg'

type SearchProps = {
  SearchTitle: string;
};

const Search = (props: SearchProps) => {
  return (
    <LinearGradient
    colors={['rgba(255, 255, 255, 0.25)', 'rgba(255, 255, 255, 0.07)']}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
      style={styles.gradientBorder}
    >
      <View style={styles.box}>
        <TextInput
          style={styles.search}
          placeholder={props.SearchTitle}
          placeholderTextColor="white"
        />
        <View>
          <SearchIcon />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Search;

const styles = StyleSheet.create({
  gradientBorder: {
    padding: 2, 
    borderRadius: 26, 
    marginTop: 20,
    marginHorizontal: 20,
  },
  box: {
    height: 48,
    borderRadius: 24, 
    backgroundColor: '#1B1B1B', 
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    flex: 1, 
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 24,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'white',
  },
});
