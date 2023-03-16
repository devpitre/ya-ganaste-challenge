import { View, Text } from "react-native";
import React from "react";

interface Props {
  error: string;
}

export default function Error({ error }: Props) {
  return (
    <View>
      <Text>{error}</Text>
    </View>
  );
}
