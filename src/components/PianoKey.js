import { Paper, Typography } from "@material-ui/core";
import { useState } from "react";
import "./PianoKey.css";

function PianoKey({ label, keyPressed, keyReleased }) {
  const [isPressed, setIsPressed] = useState(false);

  const onKeyPressed = () => {
    setIsPressed(true);
    keyPressed();
  };

  const onKeyReleased = () => {
    setIsPressed(false);
    keyReleased();
  };

  return (
    <Paper
      className="piano-key"
      elevation={isPressed ? 1 : 3}
      onPointerDown={onKeyPressed}
      onPointerUp={onKeyReleased}
      onPointerLeave={isPressed ? onKeyReleased : null}
    >
      <Typography className="piano-key-label">{label}</Typography>
    </Paper>
  );
}

export default PianoKey;
