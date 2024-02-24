import {
  Dialog,
  DialogContent,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  IconButton,
  Button,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import { useState, useCallback } from "react";

interface IProps {
  open: boolean;
  close: () => void;
}

export const AddAppliances = ({ open, close }: IProps) => {
  const [applianceType, setApplianceType] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setApplianceType(event.target.value as string);
  };

  return (
    <Dialog open={open} onClose={close}>
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          padding: 5,
        }}
        spacing={2}
      >
        <Typography variant="h4" fontWeight={600}>
          Add Appliance
        </Typography>
        <TextField fullWidth label="IP Address" variant="outlined" />
        <TextField fullWidth label="Appliance Name" variant="outlined" />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Appliances</InputLabel>
          <Select
            id="demo-simple-select"
            value={applianceType}
            label="Appliances"
            onChange={handleChange}
          >
            <MenuItem value={"light"}>Light</MenuItem>
            <MenuItem value={"ac"}>Fan / AC</MenuItem>
            <MenuItem value={"door"}>Door</MenuItem>
            <MenuItem value={"cctv"}>CCTV</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={close}>
          Save
        </Button>
      </Stack>
    </Dialog>
  );
};
