import { View, Text } from "react-native";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();

  return (
    <View>
      <Text
        style={{
          backgroundColor: "red",
          margin: 100,
          height: 100,
        }}
        onPress={() => {
          router.push("/search");
        }}
      >
        Settings
      </Text>
    </View>
  );
}
