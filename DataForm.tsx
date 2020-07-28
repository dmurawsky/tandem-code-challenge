import React from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import { AllMaths } from "./maths";
import { firebaseSet } from "./firebase";

interface Props {
  maths: AllMaths
  dataIndex: number
  dataLength: number
}

const DataForm = ({ maths, dataIndex, dataLength }: Props) => {
  const [value, onChangeText] = React.useState('');

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => onChangeText(text)}
        keyboardType="number-pad"
        value={value}
      />
      <Button title="Add" onPress={() => firebaseSet(`datasets/${dataIndex}/data/${dataLength}`, Number(value), () => onChangeText(''))} />
      <Text>{JSON.stringify(maths, null, 2)}</Text>
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
