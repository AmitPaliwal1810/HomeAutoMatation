import { AddAppliances } from "@/src";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type ApplianceType = {
  name: string;
  img: string;
  active: boolean;
};

type Appliances = {
  light: ApplianceType[];
  ac: ApplianceType[];
  door: ApplianceType[];
  cctv: ApplianceType[];
};

const appliancesData = [
  {
    name: "Light",
    query: "light",
  },
  {
    name: "Fan / AC",
    query: "ac",
  },
  {
    name: "Digital Door Lock",
    query: "door",
  },
  {
    name: "CCTV",
    query: "cctv",
  },
];

const light = [
  {
    name: "Bed Room light",
    img: "../assets/bulb.svg",
    active: false,
  },
];
const ac = [
  {
    name: "Bed Room 1 AC",
    img: "../assets/ac.png",
    active: false,
  },
  {
    name: "Bed Room 2 AC",
    img: "../assets/ac.png",
    active: false,
  },
];
const door = [
  {
    name: "Main Door Lock",
    img: "../assets/door.png",
    active: false,
  },
];
const cctv = [
  {
    name: "Main Door",
    img: "../assets/cctv.png",
    active: false,
  },
  {
    name: "Roof",
    img: "../assets/cctv.png",
    active: false,
  },
  {
    name: "Cam 1",
    img: "../assets/cctv.png",
    active: false,
  },
];

const data = {
  light: light,
  ac: ac,
  door: door,
  cctv: cctv,
};

const index = () => {
  const router = useRouter();
  const { applianceName } = router.query;
  const [appliance, setAppliance] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const [showAddDialog, setShowAddDialog] = useState<boolean>(false);

  useEffect(() => {
    setAppliance(String(applianceName) ?? "light");
  }, [applianceName]);

  return (
    <>
      <AddAppliances
        open={showAddDialog}
        close={() => setShowAddDialog(false)}
      />
      <Stack direction="row" width="100%" height="100vh">
        <Box
          sx={{
            flexDirection: "column",
            width: "20%",
            maxHeight: "100vh",
            padding: 2,
            overflowY: "scroll",
            scrollbarWidth: "none",
            background: "#F6F5F5",
          }}
        >
          <Typography
            fontSize={24}
            fontWeight={900}
            sx={{
              textAlign: "center",
              marginY: 2,
            }}
          >
            Appliances Type
          </Typography>
          {appliancesData.map(({ name, query }, index) => (
            <CardActionArea
              key={index}
              onClick={() => {
                router.push({
                  pathname: "/dashboard",
                  query: {
                    applianceName: query,
                  },
                });
              }}
            >
              <Card
                sx={{
                  height: 60,
                  marginBottom: 1,
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                }}
              >
                <Typography
                  fontSize={"18px"}
                  fontWeight={800}
                  sx={{
                    textAlign: "left",
                  }}
                >
                  {name}
                </Typography>
              </Card>
            </CardActionArea>
          ))}
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            padding: 4,
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Typography fontSize={24} fontWeight={900}>
              Your Added Appliances
            </Typography>
            <Button variant="contained" onClick={() => setShowAddDialog(true)}>
              Add Appliance
            </Button>
          </Stack>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              padding: 4,
            }}
          >
            {(
              (data[appliance as keyof Appliances] as ApplianceType[]) || []
            ).map((x: ApplianceType, index: number) => (
              <CustomeCard
                key={index}
                data={x}
                active={active}
                setActive={setActive}
              />
            ))}
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default index;

const CustomeCard = ({ data, active, setActive }: any) => {
  return (
    <Card
      sx={{
        height: "220px",
        width: "200px",
        background: "#FBF9F1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardActionArea
        disableRipple
        disableTouchRipple
        onClick={() => setActive((prev: boolean) => !prev)}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Box
          component="img"
          src={data.img}
          alt="bulb"
          sx={{
            height: "80px",
            aspectRatio: "1",
          }}
        />
        <Typography fontSize={18} fontWeight={600}>
          {data.name}
        </Typography>
        <Box
          sx={{
            height: 12,
            width: 12,
            borderRadius: "50%",
            background: active ? "#C6DCBA" : "#A94438",
          }}
        />
      </CardActionArea>
    </Card>
  );
};
