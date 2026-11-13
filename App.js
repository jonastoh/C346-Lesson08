
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Picker } from '@react-native-picker/picker';

// Question component
const Question = ({ number, picture, answer, setAnswer }) => {
  return (
    <View style={styles.questionCard}>
      <Text style={styles.questionNumber}>
        QUESTION {number}
      </Text>

      <Image source={picture} style={styles.image} />

      <Text style={styles.questionText}>
        Which player is this?
      </Text>

      <View style={styles.pickerBox}>
        <Picker
          selectedValue={answer}
          onValueChange={(value) => setAnswer(value)}
        >
          <Picker.Item label="Select a player..." value="" />
          <Picker.Item label="Lionel Messi" value="Messi" />
          <Picker.Item label="Cristiano Ronaldo" value="Ronaldo" />
          <Picker.Item label="Neymar Jr" value="Neymar" />
        </Picker>
      </View>
    </View>
  );
};

export default function App() {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const checkAnswers = () => {
    let score = 0;

    if (answer1 === 'Messi') score++;
    if (answer2 === 'Ronaldo') score++;
    if (answer3 === 'Neymar') score++;

    Alert.alert(
      'Quiz Results',
      'You got ' + score + ' out of 3 correct answers!'
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Text style={styles.title}>
          FOOTBALL PLAYER QUIZ
        </Text>
        <Text style={styles.subtitle}>
          Can you recognise all 3 players?
        </Text>
      </View>

      <ScrollView>
        <Question
          number={1}
          picture={require('./img/messi.jpg')}
          answer={answer1}
          setAnswer={setAnswer1}
        />

        <Question
          number={2}
          picture={require('./img/ronaldo.jpg')}
          answer={answer2}
          setAnswer={setAnswer2}
        />

        <Question
          number={3}
          picture={require('./img/neymar.jpg')}
          answer={answer3}
          setAnswer={setAnswer3}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={checkAnswers}
        >
          <Text style={styles.buttonText}>
            SUBMIT ANSWERS
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },

  header: {
    backgroundColor: '#142D4E',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    color: '#DCE7F3',
    textAlign: 'center',
  },

  questionCard: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#D8E1EC',
    alignItems: 'center',
  },

  questionNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2474B5',
  },

  image: {
    width: '100%',
    height: 220,
  },

  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#142D4E',
    textAlign: 'center',
  },

  pickerBox: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#C8D4E0',
    backgroundColor: '#F7FAFC',
  },

  button: {
    backgroundColor: '#2474B5',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
