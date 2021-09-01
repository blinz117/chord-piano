import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link
} from "@material-ui/core";

const AboutDialog = ({ isOpen, close }) => {
  return (
    <Dialog onClose={close} aria-labelledby="about-dialog-title" open={isOpen}>
      <DialogTitle id="about-dialog-title">About</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Chord Piano is like a normal piano, but instead of playing individual
          notes, each key plays a chord.
        </DialogContentText>
        <DialogContentText>
          The chords shown are the{" "}
          <Link href="https://en.wikipedia.org/wiki/Triad_(music)">triads</Link>{" "}
          formed by the notes in the selected scale. This way, it's easy to play
          chords that are always in key!
        </DialogContentText>
        <DialogContentText>
          You can change the scale and the instrument to get different sounds.
        </DialogContentText>
        <DialogContentText>Enjoy!</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AboutDialog;
