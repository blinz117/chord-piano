export const pitches = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B"
];

export const getPitchOffsetFromC = (pitch) =>
  pitches.findIndex((currentPitch) => pitch === currentPitch);
