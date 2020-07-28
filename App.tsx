import React from "react";
import { StyleSheet } from "react-native";
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Layout,
  Select,
  SelectItem,
  IndexPath
} from '@ui-kitten/components';
import { onValue } from "./firebase";
import findMaths from "./maths";
import DataForm from './DataForm'
import DataCards from "./DataCards";

interface Dataset {
  data: number[];
}

const TandemApp = () => {
  const [dataIndex, updateDataIndex] = React.useState<IndexPath | IndexPath[]>(new IndexPath(0));
  const [datasets, updateDatasets] = React.useState<DataSet[]>([]);
  React.useEffect(() => {
    onValue("datasets", (val: Dataset[]) => updateDatasets(val));
  }, []);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container} level='1'>
        <Select
          style={styles.select}
          selectedIndex={dataIndex}
          value={`Day ${dataIndex.row + 1}`}
          onSelect={index => updateDataIndex(index)}>
          {datasets.map((_, i) => <SelectItem key={`button${i}`} title={`Day ${i + 1}`} />)}
        </Select>
        <DataCards maths={findMaths(datasets[dataIndex.row].data)} />
        {datasets[dataIndex.row] && <DataForm dataIndex={dataIndex.row} dataLength={datasets[dataIndex.row].data.length} />}
      </Layout>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
    margin: 35
  },
  select: {
    marginVertical: 15
  },
});

export default TandemApp;
