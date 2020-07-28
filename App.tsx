import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { onValue } from "./firebase";
import findMaths, { AllMaths } from "./maths";
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
      {datasets[dataIndex] && <DataForm maths={findMaths(datasets[dataIndex].data)} dataIndex={dataIndex} />}
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
