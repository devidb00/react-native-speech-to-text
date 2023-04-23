import * as React from "react";
import { styles } from "../styles";
import { Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SearchButton from "../components/SearchButton";

export default function Home({ router }) {
  const [active, setActive] = React.useState(false);
  return (
    <View style={styles.home}>
      {active && (
        <Pressable
          style={{
            width: 50,
            height: 50,
            position: "absolute",
            top: 50,
            left: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setActive(false)}
        >
          <AntDesign name="close" size={30} color="white" />
        </Pressable>
      )}
      <SearchButton
        router={router}
        actionnableButton={[active, setActive]}
        style={styles}
      />
    </View>
  );
}
