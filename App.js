/* eslint-disable prettier/prettier */
import { NativeBaseProvider,View } from "native-base";
import React from 'react';
import Test from './src/Test';
export default function App() {
  return (
    <NativeBaseProvider>
      <View>
        <Test />
      </View>
    </NativeBaseProvider>
  );
}
