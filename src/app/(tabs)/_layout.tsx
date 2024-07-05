import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/src/components/navigation/TabBarIcon";
import { Colors } from "@/src/constants/Colors";
import { useColorScheme } from "@/src/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
      initialRouteName="(tabs)/alex"
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "trips",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "airplane" : "airplane-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="alex"
        options={{
          title: "alex",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "happy" : "happy-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "cog" : "cog-outline"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
