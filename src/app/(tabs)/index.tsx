import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

const index = () => {
  return (
    <SafeAreaView>
      <Redirect href={"/alex"} />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
