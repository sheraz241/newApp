import React from "react";
import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
const SmartLoader = (props) => {
  const { isLoading, ...attributes } = props;

  console.log('isLoading------------------------------', isLoading)

  return (
    <Modal
      transparent
      animationType={"none"}
      visible={isLoading}
      onRequestClose={() => {
        console.log("Noop");
      }}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorHolder}>
          <ActivityIndicator
            animating={isLoading}
            size="large"
            color={"#0939ac"}
          />
        </View>
      </View>
    </Modal>
  );
};

export default SmartLoader;
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#00000040",
  },
  activityIndicatorHolder: {
    backgroundColor: "#FFFFFF",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
