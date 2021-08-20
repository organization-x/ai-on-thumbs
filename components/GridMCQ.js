import React, { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

// grid of mcq clickable answers
// answers: array with 4 strings
// answer: correct answer as string
// handleAnswer: function called when answer is chosen.
//   passes object with props 'correct' and 'remAttempts' as parameter
// cols: # of choices per row
// attempts: how many attempts there are. default 100 for 'unlimited' attempts

export default function GridMCQ ({ style, answers, correctAnswer, handleChoice, cols = 2, attempts = 100 }) {
  // remaining attempts
  const [remAttempts, setRemAttempts] = useState(attempts)
  const [selected, setSelected] = useState('')

  // even width spacing taking 3px border into account
  const width = `${100 / cols - 1 / cols}%`

  const onTouch = (choice) => {
    if (remAttempts === 0) {
      return
    }

    setRemAttempts(remAttempts - 1)
    setSelected(choice)

    let correct = false
    if (choice === correctAnswer) {
      correct = true
    }
    handleChoice({ correct: correct, remAttempts: remAttempts })
  }

  const choices = answers.map((answer, index, array) => {
    return (
      <TouchableOpacity
        key={index.toString()}
        style={[styles.choice,
          {
            backgroundColor: answer === selected ? '#8279D4' : '#6357C9',
            width: width,
            borderColor: 'white',
            borderLeftWidth: (index % cols !== 0) ? 1 : 0, // left border if not 1st of row
            borderBottomWidth: (index < array.length - cols) ? 1 : 0 // bott border if not last 2
          }
        ]}
        onPress={() => onTouch(answer)}
      >
        <Text style={styles.choiceText}>{answer}</Text>
      </TouchableOpacity>
    )
  })

  return (
    <View style={[styles.choiceContainer, style]}>
      {choices}
    </View>
  )
}

const styles = StyleSheet.create({
  choiceContainer: {
    flex: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 5,
    overflow: 'hidden'
  },
  choice: {
    backgroundColor: '#6357C9',
    paddingVertical: 10
  },
  choiceText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'normal'
  }
})
