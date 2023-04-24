import React, { useEffect } from "react";
import { MotiView } from "moti";
import { styles } from "../styles";
import { Pressable, View, StyleSheet, Button } from "react-native";
import * as Haptics from "expo-haptics";

export default function SearchButton() {
  return (
    <View style={styles.home}>
      {[...Array(5).keys()].map((index) => (
        <MotiView
          key={index}
          from={{ opacity: 0.3, scale: 0.3 }}
          animate={{ opacity: 0, scale: index }}
          transition={{
            type: "timing",
            duration: 1600,
            loop: true,
            repeatReverse: false,
          }}
          style={[StyleSheet.absoluteFillObject, styles.searchAnimation]}
        />
      ))}
      <Pressable style={styles.searchButton} />
    </View>
  );
}
