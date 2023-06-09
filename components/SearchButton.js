import React from "react";
import { MotiView } from "moti";
import { styles } from "../styles";
import { Pressable, View, StyleSheet } from "react-native";

export default function SearchButton({ router, actionnableButton }) {
  const [active, setActive] = actionnableButton;

  return (
    <View style={styles.home}>
      {[...Array(6).keys()].map((index) => (
        <MotiView
          key={index}
          from={{ opacity: 0.7, scale: 0.3 }}
          animate={{ opacity: 0, scale: index + 1 }}
          transition={{
            type: "timing",
            duration: 1500,
            loop: true,
            repeatReverse: false,
          }}
          style={[StyleSheet.absoluteFillObject, styles.searchAnimation]}
        />
      ))}
      <Pressable
        onPress={() => {
          setActive(false);
          router.push("/search");
        }}
        style={{
          backgroundColor: "white",
          height: 190,
          width: 190,
          borderRadius: 190,
        }}
      ></Pressable>
    </View>
  );
}
