import { pitches } from "./Pitch";

export const ScaleType = {
  MAJOR: "MAJOR",
  MINOR: "MINOR"
};

export const scaleForPitch = (pitch, scaleType) => {
  const rootPitchIndex = pitches.findIndex(
    (currentPitch) => currentPitch === pitch
  );

  // I could use a ternary, but a switch could support more scale types
  let pitchOffsets;
  switch (scaleType) {
    case ScaleType.MAJOR:
      pitchOffsets = majorScaleOffsetFromRoot;
      break;
    case ScaleType.MINOR:
      pitchOffsets = minorScaleOffsetFromRoot;
      break;
    default:
      throw new Error("Unknown scale type");
  }

  return pitchOffsets.map((offset) => {
    const pitchIndex = (rootPitchIndex + offset) % pitches.length;

    return pitches[pitchIndex];
  });
};

export const majorScaleOffsetFromRoot = [0, 2, 4, 5, 7, 9, 11];

export const minorScaleOffsetFromRoot = [0, 2, 3, 5, 7, 8, 10];
