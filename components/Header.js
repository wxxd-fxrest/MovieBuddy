import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Header = () => {

    return (
        <View 
            style={{ 
                backgroundColor: "#003580",
                height: 65, 
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around" 
            }}>

            <Pressable 
                style={{ 
                    flexDirection: "row", 
                    alignItems: "center", 
                    borderColor: "white", 
                    borderWidth: 1, 
                    borderRadius: 20, 
                    padding: 8, 
                }}>
                <Ionicons name="bed-outline" size={24} color="white" />
                <Text 
                    style={{ 
                        marginLeft:8, 
                        fontSize: 15, 
                        fontWeight: "bold", 
                        color: "white" 
                    }}> Stays </Text>
            </Pressable>

            <Pressable 
                style={{ 
                    flexDirection: "row", 
                    alignItems: "center", 
                }}>
                <Ionicons name="ios-airplane-outline" size={26} color="white" />
                <Text 
                    style={{ 
                        marginLeft:8, 
                        fontSize: 15, 
                        fontWeight: "bold", 
                        color: "white" 
                    }}> Flights </Text>
            </Pressable>

            <Pressable 
                style={{ 
                    flexDirection: "row", 
                    alignItems: "center", 
                }}>
                <Ionicons name="car-outline" size={26} color="white" />
                <Text 
                    style={{ 
                        marginLeft:8, 
                        fontSize: 15, 
                        fontWeight: "bold", 
                        color: "white" 
                    }}> Car Rental  </Text>
            </Pressable>

            <Pressable 
                style={{ 
                    flexDirection: "row", 
                    alignItems: "center", 
                }}>
                <FontAwesome5 name="uber" size={26} color="white" />
                <Text 
                    style={{ 
                        marginLeft:8, 
                        fontSize: 15, 
                        fontWeight: "bold", 
                        color: "white" 
                    }}> Taxi </Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({});

export default Header; 