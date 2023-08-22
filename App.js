import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar
} from 'react-native';
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotaionList from './src/components/QuotationList';
import QuotationItem from './src/components/QuotationList/QuotationItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <StatusBar
        backgroundColor="#f50d41"
        barStyle="light-content"
      />
      <CurrentPrice />
      <HistoryGraphic />
      <QuotaionList />
      <QuotationItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 40,
  },
});
