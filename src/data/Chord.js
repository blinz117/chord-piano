import { scaleForPitch, ScaleType } from "./Scale";

export const triadScaleOffsets = [0, 2, 4];

export const chordForPitchInScale = (scale, pitchIndexInScale) => {
  return triadScaleOffsets.map((triadOffset) => {
    const scaleIndex = (pitchIndexInScale + triadOffset) % scale.length;

    return scale[scaleIndex];
  });
};

const chordSuffixesForScaleType = (scaleType) => {
  switch (scaleType) {
    case ScaleType.MAJOR:
      return ["", "m", "m", "", "", "m", "dim"];
    case ScaleType.MINOR:
      return ["m", "dim", "", "m", "m", "", ""];
    default:
      throw new Error("Unexpected scale type");
  }
};

export const getChordNamesForScale = (scaleRootPitch, scaleType) => {
  const scale = scaleForPitch(scaleRootPitch, scaleType);
  return chordSuffixesForScaleType(scaleType).map((suffix, index) => {
    const chordRootPitch = scale[index];
    return chordRootPitch + suffix;
  });
};
