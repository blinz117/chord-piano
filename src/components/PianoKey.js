import { Paper, Typography } from "@material-ui/core";
import "./PianoKey.css";

function PianoKey({ label, keyPressed, keyReleased }) {
  return (
    <Paper
      className="piano-key"
      elevation={2}
      onPointerDown={keyPressed}
      onPointerUp={keyReleased}
    >
      <Typography className="piano-key-label">{label}</Typography>
    </Paper>
  );
}

export default PianoKey;
