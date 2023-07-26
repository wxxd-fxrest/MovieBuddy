import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect } from "react";
import { Alert, Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import {REACT_APP_TMDB_API_KEY} from '@env';

const API_BASE_URL = 'https://api.themoviedb.org/3';

const HomeScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: "Movie Buddy",
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

    const getPopularMovies = async () => {
        try {
            // 'http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=N&title="엘리멘탈"&ServiceKey=${REACT_APP_TMDB_KEY}'
            const response = await fetch(`${API_BASE_URL}/movie/popular?api_key=${REACT_APP_TMDB_API_KEY}&language=ko-KR&page=1`);
        
            if (!response.ok) {
                throw new Error('네트워크 응답이 올바르지 않습니다.');
            }
        
            const data = await response.json();
            const movieList = data.results;
            console.log(movieList);
            return movieList;
        } catch (error) {
            console.error('영화를 가져오는 중 오류 발생:', error);
            return [];
        }
    };

    useEffect(() => {
        getPopularMovies();
    }, []);



    return (
        <>
            <View>
                <Header />
                <Text> Home </Text>   
        
            </View>
        </>
    )
};

const styles = StyleSheet.create({});

export default HomeScreen; 