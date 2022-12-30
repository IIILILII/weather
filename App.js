import { StatusBar } from "expo-status-bar";
import Loading from "./Loading";
import { Alert } from "react-native";
import * as Location from "expo-location";
import React from "react";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "06c95afb42fe6032516f38081711ef29";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather,
      },
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
    });
  };
  getLocation = async () => {
    try {
      await Location.requestBackgroundPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you", "So Sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.round(temp)} condition={condition} />
    );
  }
}
{
  /* 37.785834 -122.406417 */
  /* https://api.openweathermap.org/data/2.5/weather?lat=37.785834&lon=-122.406417&appid=06c95afb42fe6032516f38081711ef29 */
}
