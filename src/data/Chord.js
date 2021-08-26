export const triadScaleOffsets = [0, 2, 4];

export const chordForPitchInScale = (scale, pitchIndexInScale) => {
  return triadScaleOffsets.map((triadOffset) => {
    const scaleIndex = (pitchIndexInScale + triadOffset) % scale.length;

    return scale[scaleIndex];
  });
};
