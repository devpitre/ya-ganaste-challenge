import { Text, FlatList } from "react-native";
import React from "react";
import { Bank } from "../../../../domain/entities/bank-entity";
import BankListItem from "./BankListItem";

interface Props {
  banks: Bank[];
}

export default function BankList({ banks }: Props) {
  return (
    <FlatList
      data={banks}
      renderItem={({ item }) => <BankListItem bank={item} />}
      style={{ paddingHorizontal: 24, flex: 1 }}
    />
  );
}
