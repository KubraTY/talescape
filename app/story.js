import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter  } from 'expo-router';

const StoryScreen = () => {
  const params = useLocalSearchParams();
  const { id } = params;
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Button title="Go Back" onPress={() => router.back()} /> 
      <Text style={styles.title}>Story ID: {id}</Text>
      <Text style={styles.content}>This is the content of story {id}.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default StoryScreen;
