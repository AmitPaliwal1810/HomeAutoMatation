import { Stack, Typography, Button, Box } from "@mui/material";
import React, { Dispatch, SetStateAction, useCallback } from "react";

interface IProps {
  handleClick: Dispatch<
    SetStateAction<{
      open: boolean;
      title: string | null;
    }>
  >;
}

export const Navbar = ({ handleClick }: IProps) => {
  const handleLogin = useCallback(() => {
    handleClick({ open: true, title: "Log-In" });
  }, []);
  const handleSignup = useCallback(() => {
    handleClick({ open: true, title: "Sign-Up" });
  }, []);
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        background: "rgba(217,217,217,50%)",
        padding: 4,
      }}
    >
      <Box
        component="img"
        src={"/assets/logo.png"}
        alt="logo"
        sx={{
          height: "100%",
          aspectRatio: "16:9",
        }}
      />
      <Stack direction="row" spacing={4}>
        <Button variant="contained" onClick={handleLogin}>
          LogIn
        </Button>
        <Button variant="contained" onClick={handleSignup}>
          SignUp
        </Button>
      </Stack>
    </Stack>
  );
};
