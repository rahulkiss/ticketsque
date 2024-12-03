import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { icons } from '../assert/image/image';

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
          <Image source={icons.searchicon} style={styles.icon} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Search;

const styles = StyleSheet.create({
  gradientBorder: {
    padding: 2, // Space for the gradient border
    borderRadius: 26, // Slightly larger than inner box radius
    marginTop: 20,
    marginHorizontal: 20,
  },
  box: {
    height: 48,
    borderRadius: 24, // Match the inner box's shape
    backgroundColor: '#1B1B1B', // Inner background color
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  search: {
    flex: 1, // Take up the remaining space
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
