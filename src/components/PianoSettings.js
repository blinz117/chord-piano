import { FormControl, MenuItem, Select, Typography } from "@material-ui/core";
import { instruments } from "../data/Instrument";
import { pitches } from "../data/Pitch";
import { ScaleType } from "../data/Scale";
import "./PianoSettings.css";

const PianoSettings = ({
  scalePitch,
  setScalePitch,
  scaleType,
  setScaleType,
  instrumentName,
  setInstrumentName
}) => {
  return (
    <div className="piano-settings">
      <div className="piano-setting-select">
        <Typography id="scale-label">Scale</Typography>
        <FormControl variant="outlined">
          <Select
            id="scale-pitch-select"
            value={scalePitch}
            onChange={(event) => setScalePitch(event.target.value)}
          >
            {pitches.map((pitch) => (
              <MenuItem key={pitch} value={pitch}>
                {pitch}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined">
          <Select
            id="scale-type-select"
            value={scaleType}
            onChange={(event) => setScaleType(event.target.value)}
          >
            <MenuItem value={ScaleType.MAJOR}>Major</MenuItem>
            <MenuItem value={ScaleType.MINOR}>Minor</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="piano-setting-select">
        <Typography>Instrument</Typography>
        <FormControl variant="outlined">
          <Select
            id="instrument-type-select"
            value={instrumentName}
            onChange={(event) => setInstrumentName(event.target.value)}
          >
            {instruments.map((instrument) => (
              <MenuItem key={instrument} value={instrument}>
                {instrument}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default PianoSettings;
