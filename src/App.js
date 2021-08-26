import { Grid, Typography } from "@material-ui/core";
import PianoKey from "./components/PianoKey";
import { scaleForPitch, ScaleType } from "./data/Scale";
import { chordForPitchInScale } from "./data/Chord";
import "./styles.css";

export default function App() {
  const chords = ["C", "Dm", "Em", "F", "G", "Am", "Bdim"];

  const onKeyPressed = (index) => {
    const scale = scaleForPitch("C", ScaleType.MAJOR);

    const chord = chordForPitchInScale(scale, index);
    console.log(chord);
  };

  return (
    <>
      <div className="App">
        <Typography variant="h1">Chord Piano</Typography>
      </div>
      <Grid container spacing={1} justifyContent="center">
        {chords.map((chord, index) => (
          <Grid item key={index} xs={1}>
            <PianoKey label={chord} keyPressed={() => onKeyPressed(index)} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
