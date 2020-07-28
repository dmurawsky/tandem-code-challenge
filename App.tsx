import React from "react";
import { StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Select,
  SelectItem,
  IndexPath,
} from "@ui-kitten/components";
import { onValue } from "./firebase";
import findMaths from "./maths";
import DataForm from "./DataForm";
import DataCards from "./DataCards";

interface Dataset {
  data: number[];
}

const TandemApp = () => {
  const [dataIndex, updateDataIndex] = React.useState<IndexPath | IndexPath[]>(
    new IndexPath(0)
  );
  const [datasets, updateDatasets] = React.useState<DataSet[]>([]);
  React.useEffect(() => {
    onValue("datasets", (val: Dataset[]) => updateDatasets(val));
  }, []);
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      {datasets.length > 0 && (
        <Layout style={styles.container} level="1">
          <Select
            style={styles.select}
            selectedIndex={dataIndex}
            value={`Day ${dataIndex.row + 1}`}
            onSelect={(index) => updateDataIndex(index)}
          >
            {datasets.map((_, i) => (
              <SelectItem key={`button${i}`} title={`Day ${i + 1}`} />
            ))}
          </Select>
          {!!datasets[dataIndex.row] && (
            <View>
              <DataCards maths={findMaths(datasets[dataIndex.row].data)} />
              <DataForm
                dataIndex={dataIndex.row}
                dataLength={datasets[dataIndex.row].data.length}
              />
            </View>
          )}
        </Layout>
      )}
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 320,
    minHeight: 128,
    margin: 35,
  },
  select: {
    marginVertical: 15,
  },
});

export default TandemApp;
