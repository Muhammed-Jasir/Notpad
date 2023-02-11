import {
  Avatar,
  Box,
  Divider,
  Sheet,
  Typography,
  useColorScheme,
} from "@mui/joy";
import Image from "next/image";
// import { MdMinimize, MdOutlineClose } from "react-icons/md";
// import { VscChromeMaximize } from "react-icons/vsc";

type TitleBarProps = {
  title?: string;
};

export default function TitleBar({ title = "Untitled.txt" }: TitleBarProps) {
  const { mode, setMode } = useColorScheme();
  //   const actionBtns = [
  //     {
  //       icon: <MdMinimize />,
  //       onClick: () => {
  //         console.log("minimize");
  //       },
  //     },
  //     {
  //       icon: <VscChromeMaximize />,
  //       onClick: () => {
  //         console.log("maximize");
  //       },
  //     },
  //     {
  //       icon: <MdOutlineClose />,
  //       onClick: () => {
  //         console.log("close");
  //       },
  //     },
  //   ];

  return (
    <>
      <Sheet sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography padding={1} display="flex" alignItems="center">
          <Image
            style={{ marginRight: ".5rem" }}
            src="/assets/images/logo.png"
            alt={""}
            width={24}
            height={24}
          />
          {title} - Notepad
        </Typography>

        <Box sx={{ marginY: 0.5, marginX: 1 }}>
          <Avatar
            sx={{ borderRadius: 8 }}
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            MR
          </Avatar>
        </Box>

        {/* <Box>
          {actionBtns.map((btn, i) => (
            <Button
              key={i}
              color="neutral"
              variant="soft"
              sx={{
                borderRadius: 0,
                ":hover": {
                  bgcolor:
                    i == actionBtns.length - 1
                      ? "red"
                      : "rgba(var(--joy-palette-neutral-mainChannel) / 0.28)",
                },
              }}
              onClick={btn.onClick}
            >
              {btn.icon}
            </Button>
          ))}
        </Box> */}
      </Sheet>

      <Divider />
    </>
  );
}
