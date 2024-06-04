import React from "react";
import { ClipPath, Defs, G, Line, Path, Rect, Svg } from "react-native-svg"

const MenueIcon = () => {
    return (
        <Svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_108_1081)">
                <Rect width="46" height="46" rx="8" fill="#FDFDFD" />
                <Line x1="13.8397" y1="16.1603" x2="32.8296" y2="16.1603" stroke="#747474" stroke-width="1.67938" stroke-linecap="round" />
                <Line x1="13.8397" y1="23.9113" x2="27.6623" y2="23.9113" stroke="#747474" stroke-width="1.67938" stroke-linecap="round" />
                <Line x1="13.8397" y1="31.6623" x2="32.8296" y2="31.6623" stroke="#747474" stroke-width="1.67938" stroke-linecap="round" />
            </G>
            <Rect x="0.45" y="0.45" width="45.1" height="45.1" rx="7.55" stroke="#B8B8B8" stroke-opacity="0.4" stroke-width="0.9" />
            <Defs>
                <ClipPath id="clip0_108_1081">
                    <Rect width="46" height="46" rx="8" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>


    )


}
export default MenueIcon;