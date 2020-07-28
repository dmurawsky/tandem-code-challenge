import React from "react";
import { StyleSheet, View, Button } from "react-native";
import { onValue } from "./firebase";
import findMaths from "./maths";
import DataForm from './DataForm'

interface Dataset {
  data: number[];
}

const TandemApp = () => {
  const [dataIndex, updateDataIndex] = React.useState<number>(0);
  const [datasets, updateDatasets] = React.useState<DataSet[]>([]);
  React.useEffect(() => {
    onValue("datasets", (val: Dataset[]) => updateDatasets(val));
  }, []);
  return (
    <View style={styles.container}>
      {datasets.map((_, i) => <Button key={`button${i}`} color={i === dataIndex ? "#841584" : "#888"} title={`Day ${i + 1}`} onPress={() => updateDataIndex(i)} />)}
      {datasets[dataIndex] && <DataForm maths={findMaths(datasets[dataIndex].data)} dataIndex={dataIndex} dataLength={datasets[dataIndex].data.length} />}
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

export default TandemApp;