import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const router = useRouter();

  const stories = [
    { id: '1', title: 'Ormanda Macera' },
    { id: '2', title: 'Uzay Kaşifi' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View>
      <Text style={styles.title}>Welcome to Talescape!</Text>
      <FlatList
        
        data={stories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.storyItem} 
            onPress={() => router.push(`/story?id=${item.id}`)}
          >
            <Text style={styles.storyTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      </View>
    </SafeAreaView>
    
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
    marginBottom: 20,
  },
  storyItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    margin: 10,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
