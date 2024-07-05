import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { Avatar, View, Text, AvatarProps, Button } from "react-native-ui-lib";
import Ionicons from "@expo/vector-icons/Ionicons";

const alex = () => {
  const [text, setText] = useState();
  let example = {
    title: "Alex",
    size: 48,
    backgroundColor: "red",
    source: {
      uri: "https://randomuser.me/api/portraits/women/24.jpg",
    },
    badgeProps: { size: 14, borderWidth: 0, backgroundColor: "green" },
    badgePosition: "TOP_RIGHT" as AvatarProps["badgePosition"],
  };
  return (
    <SafeAreaView className="bg-white flex-1 flex-row justify-center font-rubik">
      <View className="bg-white m-4 flex flex-col justify-center items-center gap-4 w-full">
        <View className="text-6xl  w-full flex flex-col justify-center items-center relative color-purple-50 tracking-wide ">
          <Text className="text-2xl tracking-widest">hello 👋🏼 i'm</Text>
          <Text className="font-bold text-[40vw]  aspect-auto ">alex</Text>
          <Text className="tracking-widest text-xl">from @readysetpack</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default alex;

const styles = StyleSheet.create({});
