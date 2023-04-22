import * as React from "react";
import { View } from "react-native";
import { styles } from "../styles";
import SearchButton from "../components/SearchButton";

export default function Home() {
  return (
    <View style={styles.home}>
      <SearchButton style={styles} />
    </View>
  );
}
