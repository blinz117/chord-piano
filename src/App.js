import { Grid, Typography } from "@material-ui/core";
import PianoKey from "./components/PianoKey";
import { scaleForPitch } from "./data/Scale";
import "./styles.css";

export default function App() {
  const chords = ["C", "Dm", "Em", "F", "G", "Am", "Bdim"];
  const scale = scaleForPitch("E", "MINOR");
  console.log(scale);

  return (
    // TODO: Figure out font
    <>
      <div className="App">
        <Typography variant="h1">Chord Piano</Typography>
      </div>
      <Grid container spacing={1} justifyContent="center">
        {chords.map((chord) => (
          <Grid item key={chord} xs={1}>
            <PianoKey label={chord} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
