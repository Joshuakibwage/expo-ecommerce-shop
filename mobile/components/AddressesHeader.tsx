import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function AddressesHeader() {
  return (
    <View className="px-6 pb-5 border-b border-surface flex-row items-center">
      <TouchableOpacity
        onPress={() => {
          if (typeof router.canGoBack === "function" ? router.canGoBack() : false) {
            router.back();
          } else {
            router.replace("/home");
          }
        }}
        className="mr-4 p-2"
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel="Back"
        accessibilityHint="Goes back to previous screen"
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons name="arrow-back" size={28} color="#FFFFFF" />
      </TouchableOpacity>
      <Text className="text-text-primary text-2xl font-bold">My Addresses</Text>
    </View>
  );
}