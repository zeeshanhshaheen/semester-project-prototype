import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface ReportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (value: string | number) => void;
  dialogType: 'report' | 'accuracy';
}

const ReportDialog: React.FC<ReportDialogProps> = ({
  isOpen,
  onClose,
  onSubmit,
  dialogType,
}) => {
  const [inputValue, setInputValue] = React.useState<string | number>('');

  const handleSubmit = () => {
    onSubmit(inputValue);
    onClose();
  };

  let dialogContent;
  if (dialogType === 'report') {
    dialogContent = (
      <TextField
        autoFocus
        margin='dense'
        id='report-reason'
        label='Reason for Reporting'
        type='text'
        fullWidth
        multiline
        rows={4}
        value={String(inputValue)}
        onChange={e => setInputValue(e.target.value)}
      />
    );
  } else if (dialogType === 'accuracy') {
    dialogContent = (
      <Box sx={{ width: 250 }}>
        <Typography id='input-slider' gutterBottom>
          Accuracy Rating
        </Typography>
        <Slider
          aria-labelledby='input-slider'
          value={typeof inputValue === 'number' ? inputValue : 0}
          onChange={(e, newValue) => setInputValue(newValue as number)}
          min={1}
          max={10}
          step={1}
        />
      </Box>
    );
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth='md'
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
    >
      <DialogTitle>
        {dialogType === 'report' ? 'Report Post' : 'Rate Accuracy'}
      </DialogTitle>
      <DialogContent>{dialogContent}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} color='primary'>
          Cancel
        </Button>
        <Button onClick={handleSubmit} color='primary'>
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ReportDialog;
