import PianoKey from "./PianoKey";
import "./Piano.css";

const Piano = ({ chords, onKeyPressed, onKeyReleased }) => {
  return (
    <div className="piano">
      {chords.map((chord, index) => (
        <div key={index} className="piano-key-container">
          <PianoKey
            label={chord}
            keyPressed={() => onKeyPressed(index)}
            keyReleased={() => onKeyReleased(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Piano;
