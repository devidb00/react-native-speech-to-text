import { StyleSheet } from "react-native";

BORDER_RADIUS = 190;
BACKGROUND_COLOR = "#0A0E1E";

export const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: BACKGROUND_COLOR,
  },
  searchAnimation: {
    width: BORDER_RADIUS,
    height: BORDER_RADIUS,
    borderColor: "white",
    borderRadius: BORDER_RADIUS,
    borderWidth: 2,
    backgroundColor: "lightblue",
    position: "absolute",
    top: 335,
    left: 110,
  },
  searchButton: {
    backgroundColor: "lightblue",
    minHeight: 190,
    width: 190,
    borderRadius: 190,
  },
});
