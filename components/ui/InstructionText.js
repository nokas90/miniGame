import { Text, View, StyleSheet } from "react-native"
import Colors from "../../constants/colors"

function InstructionText({children, style}) {
  return <View>
    <Text style={[styles.instructionText, style]}>{children}</Text>
  </View>
}


export default InstructionText

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    color: Colors.accent500,
    textAlign: 'center'
  },
})