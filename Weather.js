import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
    title: "안개",
    subtitle: "안개가 짙습니다 운전을 조심하세요!",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373b44", "#4286f4"],
    title: "천둥번개",
    subtitle: "외출을 자제 하세요!",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89f7fe", "#66a6ff"],
    title: "이슬비",
    subtitle: "이슬비",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00c6fb", "#005bea"],
    title: "비",
    subtitle: "우산을 챙기세요!",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7de2fc", "#b9b6e5"],
    title: "눈",
    subtitle: "미끄러짐 주의!",
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89f7fe", "#66a6ff"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#fef253", "#ff7300"],
    title: "맑음",
    subtitle: "날씨가 맑아요!",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#d7d2cc", "#304352"],
    title: "흐림",
    subtitle: "구름이 있어 흐려요!",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
    title: "안개",
    subtitle: "안개가 짙습니다 운전을 조심하세요!",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
    title: "미세먼지",
    subtitle: "마스크를 꼭 챙기세요!",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
      // Button Linear Gradient
    >
      <StatusBar barStyle="light-content" />

      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={{ ...styles.halfcontainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Dust",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfcontainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  title: {
    color: "white",
    fontSize: "44",
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: "24",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
