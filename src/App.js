import {
  CircularProgress,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography
} from "@material-ui/core";
import { instruments } from "./data/Instrument";
import { scaleForPitch, ScaleType } from "./data/Scale";
import { chordForPitchInScale, getChordNamesForScale } from "./data/Chord";
import "./styles.css";
import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState
} from "react";
import Soundfont from "soundfont-player";
import PianoSettings from "./components/PianoSettings";
import "./components/PianoSettings.css";
import Piano from "./components/Piano";
import currentChordReducer, {
  ChordActionType
} from "./reducers/currentChordReducer";

const AppState = {
  Loading: "Loading",
  Ready: "Ready",
  Error: "Error"
};

const darkTheme = createTheme({
  palette: {
    type: "dark"
  }
});

export default function App() {
  const [state, setState] = useState(AppState.Loading);
  const audioContext = useMemo(() => new AudioContext(), []);
  const [instrumentName, setInstrumentName] = useState(instruments[0]);

  const [currentPlayingChordIndex, chordActionDispatch] = useReducer(
    currentChordReducer,
    null
  );

  const [scalePitch, setScalePitch] = useState("C");
  const [scaleType, setScaleType] = useState(ScaleType.MAJOR);

  const chords = getChordNamesForScale(scalePitch, scaleType); //["C", "Dm", "Em", "F", "G", "Am", "Bdim"];

  const instrumentRef = useRef(null);
  useEffect(() => {
    const loadInstrument = async () => {
      setState(AppState.Loading);
      instrumentRef.current = await Soundfont.instrument(
        audioContext,
        instrumentName
      );
      setState(AppState.Ready);
    };

    loadInstrument();
  }, [audioContext, instrumentName]);

  const playChord = useCallback(
    (chordIndex) => {
      if (instrumentRef.current === null) return;

      // Stop any playing notes to avoid overlap
      instrumentRef.current.stop();

      if (chordIndex === null) return;

      const scale = scaleForPitch(scalePitch, scaleType);

      const chord = chordForPitchInScale(scale, chordIndex);
      // console.log(chord);
      chord.forEach((pitch) => {
        instrumentRef.current.play(pitch + "4");
      });
    },
    [scalePitch, scaleType, instrumentRef]
  );

  useEffect(() => {
    playChord(currentPlayingChordIndex);
  }, [currentPlayingChordIndex, playChord]);

  const onKeyPressed = (index) => {
    chordActionDispatch({ chordIndex: index, type: ChordActionType.Start });
  };

  const onKeyReleased = (index) => {
    chordActionDispatch({ chordIndex: index, type: ChordActionType.Stop });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Typography variant="h1" className="page-title">
          Chord Piano
        </Typography>
        <PianoSettings
          scalePitch={scalePitch}
          setScalePitch={setScalePitch}
          scaleType={scaleType}
          setScaleType={setScaleType}
          instrumentName={instrumentName}
          setInstrumentName={setInstrumentName}
        />
        {state === AppState.Loading ? (
          <div>
            <Typography>Loading...</Typography>
            <CircularProgress />
          </div>
        ) : (
          <Piano
            chords={chords}
            onKeyPressed={onKeyPressed}
            onKeyReleased={onKeyReleased}
          />
        )}
      </div>
    </ThemeProvider>
  );
}
