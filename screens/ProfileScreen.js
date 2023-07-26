import React, { useLayoutEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProfileScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Profile",
            headerStyle: {
                backgroundColor: "#394867", 
                height: 110,
                borderBottomColor: "transparent",
                shadowColor: "transparent",
            },
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "#F1F6F9",
            },
            headerRight: () => (
                <Ionicons name="notifications-outline" 
                    size={24} 
                    color="#F1F6F9" 
                    style={{ marginRight: 12 }}/>
            )
        })
    }, []); 

    return (
        <View>
            <Text> Profile </Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ProfileScreen; 