import { Text, View } from "react-native";
import Svg, { Path } from "react-native-svg"

export default class SvgProvider {
  static SVG_vector = ({ width = 18, height = 18, stroke = "#F5EDFD" }) => {
    return (

      <Svg width={width} height={height} viewBox="0 0 18 18" fill="none">
        <Path
          d="M8.4375 15.75L1.6875 9L8.4375 2.25M2.625 9H16.3125"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>

    );
  };
}