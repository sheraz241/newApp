import React from "react";
import { ClipPath, Defs, G, Path, Rect, Svg ,Circle} from "react-native-svg"

const EmailVerification = () => {
    return (
        <Svg width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle opacity="0.08" cx="55" cy="55" r="54.5" fill="#4BF1FC" stroke="#49F1FD" />
            <Circle opacity="0.15" cx="55" cy="55" r="47" fill="#49F1FD" />
            <Circle opacity="0.35" cx="55" cy="55" r="38" fill="#4CF0FC" />
            <Circle opacity="0.8" cx="55" cy="55" r="30" fill="#31EFFD" />
            <Path d="M52.3249 63.3078C52.1067 63.5272 51.8092 63.6497 51.5 63.6497C51.1909 63.6497 50.8934 63.5272 50.6752 63.3078L44.0882 56.7197C43.4045 56.036 43.4045 54.9277 44.0882 54.2452L44.913 53.4203C45.5967 52.7367 46.7039 52.7367 47.3875 53.4203L51.5 57.5328L62.6125 46.4203C63.2962 45.7367 64.4045 45.7367 65.087 46.4203L65.9119 47.2452C66.5955 47.9288 66.5955 49.0372 65.9119 49.7197L52.3249 63.3078Z" fill="#262626" />
        </Svg>


    )


}
export default EmailVerification;