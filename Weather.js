import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", "#D39D38"],
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#00c6fb", "#66a6ff"],
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89f7fe", "#66a6ff"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00c6fb", "#005bea"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7de2fc", "#b9b6e5"],
  },
  Atmosphere: {
    iconName: "weather-hail",
    gradient: ["#89f7fe", "#66a6ff"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#fef253", "#ff7300"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#d7d2cc", "#304352"],
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4da0b0", "#d39d38"],
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
      <View style={styles.halfcontainer} />
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
});
