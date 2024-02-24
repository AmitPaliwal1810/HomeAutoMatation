import { Card, Stack, Box, Typography } from "@mui/material";

interface IProps {
  image: string;
  text: string;
}

export const CustomeCard = ({ image, text }: IProps) => {
  return (
    <Card
      sx={{
        height: "50%",
        width: "50vw",
        background: "rgba(217,217,217,50%)",
      }}
    >
      <Stack
        height={"100%"}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box
          component="img"
          src={image}
          sx={{
            height: "100%",
            width: "50%",
          }}
        />
        <Typography fontSize={28} flexWrap={"wrap"} fontWeight={800}>
          {text}
        </Typography>
      </Stack>
    </Card>
  );
};
