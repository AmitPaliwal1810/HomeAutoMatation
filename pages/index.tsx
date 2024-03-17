import { AuthDialog, CustomeCard, Navbar } from "@/src";
import { Stack } from "@mui/material";
import { useState, useCallback } from "react";

const index = () => {
  const [dialog, setDialog] = useState<{
    open: boolean;
    title: string | null;
  }>({
    title: null,
    open: false,
  });

  return (
    <>
      <AuthDialog
        open={dialog.open}
        close={() => setDialog({ open: false, title: null })}
        title={dialog.title}
      />
      <Stack
        sx={{
          height: "100vh",
          width: "100%",
          background: `url('/assets/background.png') no-repeat center `,
          backgroundSize: "cover",
        }}
      >
        <Navbar handleClick={setDialog} />
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={"100%"}
          width={"100%"}
        >
          <CustomeCard
            image={"/assets/2.svg"}
            text={"SMART HOME DEVICES for the Safe and Comfortable Life"}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default index;
