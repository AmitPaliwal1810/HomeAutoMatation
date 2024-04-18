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
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const handleLogin = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        const { response }: any = await fetch("http://localhost:8080/log-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
        localStorage.setItem("token", response?.token);
      } catch (error) {
        console.log(error);
      }
      router.push("/dashboard?applianceName=light");
    },
    [email, password, router]
  );

  const handleSignUp = useCallback(
    async (e: any) => {
      e.preventDefault();
      try {
        const { response }: any = await fetch(
          "http://localhost:8080/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
              name,
            }),
          }
        );
        localStorage.setItem("token", response?.token);
      } catch (error) {
        console.log(error);
      }
      router.push("/dashboard?applianceName=light");
    },
    [router, email, password, name]
  );

  return (
    <Dialog open={open} onClose={close}>
      <DialogContent>
        <Stack
          component={"form"}
          onSubmit={title === "Log-In" ? handleLogin : handleSignUp}
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h4" fontWeight={800}>
            {title}
          </Typography>
          <Stack alignItems="center" spacing={2}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {title === "Sign-Up" && (
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          <Button variant="contained" type="submit">
            {title}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
