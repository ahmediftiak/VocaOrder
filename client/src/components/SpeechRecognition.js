import React, { useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

import micImage from "../images/icons8-microphone-50.png"
import micMuteImage from "../images/icons8-mute-50.png"
import reloadImage from "../images/icons8-rotate-left-50.png"

const VoiceRecord = ({ setVoiceQuery }) => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    useEffect(() => setVoiceQuery(transcript), [transcript])

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div class="container">
            <h6>{listening ? "listening ON" : "listening OFF"}</h6>
            <p>click on the voice icon to get your food menu</p>
            {/* <input type="text" value={transcript} /> */}
            <div class="row">
                <div class="col-sm">
                    <img src={micImage} onClick={SpeechRecognition.startListening} alt="micImage" />
                </div>
                <div class="col-sm">
                    <img src={micMuteImage} onClick={SpeechRecognition.stopListening} alt="micMuteImage" />
                </div>
                <div class="col-sm">
                    <img src={reloadImage} onClick={resetTranscript} alt="reloadImage" />
                </div>
            </div>
        </div>
    );
};
export default VoiceRecord;