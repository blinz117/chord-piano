export const ChordActionType = {
  Start: "Start",
  Stop: "Stop"
};

const currentChordReducer = (chordIndex, action) => {
  switch (action.type) {
    case ChordActionType.Start:
      return action.chordIndex;
    case ChordActionType.Stop:
      return chordIndex === action.chordIndex ? null : chordIndex;
    default:
      return chordIndex;
  }
};

export default currentChordReducer;
