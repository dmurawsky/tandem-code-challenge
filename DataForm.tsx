import React from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { AllMaths } from "./maths";
// import { firebaseUpdate } from "./firebase";

interface Props {
  maths: AllMaths
  dataIndex: number
}

const DataForm = ({ maths, dataIndex }: Props) => {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <View>
      <Text>{JSON.stringify(maths, null, 2)}</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default DataForm;
