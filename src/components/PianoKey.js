import { Paper, Typography } from "@material-ui/core";
import "./PianoKey.css";

function PianoKey({ label }) {
  return (
    <Paper
      className="piano-key"
      elevation={2}
      onPointerDown={(event) => console.log(label)}
    >
      <Typography className="piano-key-label">{label}</Typography>
    </Paper>
  );
}

export default PianoKey;
