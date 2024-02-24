import {
  Dialog,
  DialogContent,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { useState, useCallback } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";

interface IProps {
  open: boolean;
  close: () => void;
  title: string | null;
}

export const AuthDialog = ({ open, close, title }: IProps) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleLogin = useCallback(() => {
    router.push("/dashboard");
  }, []);
  const handleSignup = useCallback(() => {
    router.push("/dashboard");
  }, []);
  return (
    <Dialog open={open} onClose={close}>
      <DialogContent>
        <Stack alignItems="center" spacing={2}>
          <Typography variant="h4" fontWeight={800}>
            {title}
          </Typography>
          <Stack alignItems="center" spacing={2}>
            <TextField fullWidth label="Email" variant="outlined" />
            {title === "Sign-Up" && (
              <TextField fullWidth label="Name" variant="outlined" />
            )}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <IconButton
                    disableFocusRipple
                    disableRipple
                    disableTouchRipple
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    <InputAdornment position="end">
                      {showPassword ? (
                        <RemoveRedEyeIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </InputAdornment>
                  </IconButton>
                ),
              }}
            />
          </Stack>
          <Button
            variant="contained"
            onClick={title === "Log-In" ? handleLogin : handleSignup}
          >
            {title}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
