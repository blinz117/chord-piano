import { Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import "./PianoKey.css";

function PianoKey({ label, keyPressed, keyReleased }) {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Paper
      className="piano-key"
      elevation={isPressed ? 1 : 3}
      onPointerDown={() => {
        setIsPressed(true);
        keyPressed();
      }}
      onPointerUp={() => {
        setIsPressed(false);
        keyReleased();
      }}
    >
      <Typography className="piano-key-label">{label}</Typography>
    </Paper>
  );
}

export default PianoKey;
