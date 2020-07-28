import React from "react";
import { View, StyleSheet } from "react-native";
import { firebaseSet } from "./firebase";
import { Button, Input } from '@ui-kitten/components';


interface Props {
  dataIndex: number
  dataLength: number
}

const DataForm = ({ dataIndex, dataLength }: Props) => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.container}>
      <Input
        placeholder='Add new data'
        value={value}
        keyboardType="number-pad"
        onChangeText={text => onChangeText(text)}
      />
      <Button size="small" onPress={() => firebaseSet(`datasets/${dataIndex}/data/${dataLength}`, Number(value), () => onChangeText(''))}>Add</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

export default DataForm;
