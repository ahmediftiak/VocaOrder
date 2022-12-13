import React, {useEffect} from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

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
    // setVoiceQuery(transcript)
    return (
        <div>
            <p>Ritu Speak here... {listening ? "on" : "off"}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <br />
            <br />
            {/* <p>{transcript}</p> */}
            <input type="text" value={transcript} />
        </div>
    );
};
export default VoiceRecord;