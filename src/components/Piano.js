import { Grid } from "@material-ui/core";
import PianoKey from "./PianoKey";
import "./Piano.css";

const Piano = ({ chords, onKeyPressed, onKeyReleased }) => {
  return (
    <Grid className="piano" container spacing={1} justifyContent="center">
      {chords.map((chord, index) => (
        <Grid item key={index} xs={1}>
          <PianoKey
            label={chord}
            keyPressed={() => onKeyPressed(index)}
            keyReleased={() => onKeyReleased(index)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Piano;
