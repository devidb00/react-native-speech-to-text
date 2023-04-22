import { StyleSheet } from "react-native";

BORDER_RADIUS = 190;
BACKGROUND_COLOR = "#0A0E1E";

export const styles = StyleSheet.create({
  home: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BACKGROUND_COLOR,
  },
  searchAnimation: {
    width: BORDER_RADIUS,
    height: BORDER_RADIUS,
    borderColor: "white",
    borderRadius: BORDER_RADIUS,
  },
});
