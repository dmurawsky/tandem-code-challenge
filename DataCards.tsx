import React from "react";
import { StyleSheet, View } from "react-native";
import { AllMaths } from "./maths";
import { Text, Card, Layout } from '@ui-kitten/components';

interface DataCardProps {
  value: number | string
  title: string
}

interface DataCardsProps {
  maths: AllMaths
}

const DataCard = ({ value, title }: DataCardProps) => (
  <Card style={styles.card}>
    <Text category='h6'>{value}</Text>
    <Text style={{ color: "#888" }}>{title}</Text>
  </Card>
);

const DataCards = ({ maths }: DataCardsProps) => (
  <View style={styles.container}>
    <Layout style={styles.layout} level='1'>
      <DataCard value={maths.mean.toFixed(2)} title="Mean" />
      <DataCard value={maths.median} title="Median" />
    </Layout>
    <Layout style={styles.layout} level='1'>
      <DataCard value={maths.standardDeviation.toFixed(2)} title="Std Dev" />
      <DataCard value={maths.mode.join(', ')} title="Mode" />
    </Layout>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  card: {
    marginVertical: 5,
    width: '48%'
  },
  layout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default DataCards;
