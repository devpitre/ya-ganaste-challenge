import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Bank } from "../../../../domain/entities/bank-entity";
import * as Animatable from "react-native-animatable";

interface Props {
  bank: Bank;
}

export default function BankListItem({ bank }: Props) {
  return (
    <Animatable.View style={styles.container} animation="slideInLeft">
      <Image
        source={{ uri: bank.url }}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.detail}>
        <Text style={styles.title}>{bank.bankName}</Text>
        <Text style={styles.description}>{bank.description}</Text>
      </View>
    </Animatable.View>
  );
}

const borderRadius = 16;

const styles = StyleSheet.create({
  container: {
    gap: 2,
    marginVertical: 12,
    marginHorizontal: 4,
    backgroundColor: "white",
    flex: 1,
    borderRadius,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
  },
  detail: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
  },
  title: {
    fontSize: 20,
    fontFamily: "InterBold",
  },
  description: {
    fontSize: 12,
    marginVertical: 4,
    color: "#A4A4A4",
    fontFamily: "Montserrat",
  },
});
