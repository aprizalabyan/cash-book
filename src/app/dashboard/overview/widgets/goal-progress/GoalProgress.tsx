import React, { useRef } from "react";
import { Box } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import GoalCard, { IGoalCardProps } from "./GoalCard";

const d_items: IGoalCardProps[] = [
  { title: "Buy a Car", saved: 4_200_000, goal: 320_000_000, percent: 20 },
  { title: "Emergency Fund", saved: 21_000_000, goal: 30_000_000, percent: 70 },
  { title: "Vacation", saved: 8_500_000, goal: 20_000_000, percent: 42 },
  { title: "New Laptop", saved: 5_000_000, goal: 15_000_000, percent: 33 },
];

const GoalProgress = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  // const [atStart, setAtStart] = useState(true);
  // const [atEnd, setAtEnd] = useState(false);

  // const updateButtons = useCallback(() => {
  //   const el = trackRef.current;
  //   if (!el) return;
  //   const eps = 2;
  //   setAtStart(el.scrollLeft <= eps);
  //   setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - eps);
  // }, []);

  // useEffect(() => {
  //   updateButtons();
  //   const el = trackRef.current;
  //   if (!el) return;
  //   const onScroll = () => updateButtons();
  //   const onResize = () => updateButtons();
  //   el.addEventListener("scroll", onScroll, { passive: true });
  //   window.addEventListener("resize", onResize);
  //   return () => {
  //     el.removeEventListener("scroll", onScroll);
  //     window.removeEventListener("resize", onResize);
  //   };
  // }, [updateButtons]);

  // const scrollByPage = (dir: -1 | 1) => {
  //   const el = trackRef.current;
  //   if (!el) return;
  //   el.scrollBy({ left: dir * (el.clientWidth + gap), behavior: "smooth" });
  // };

  return (
    <Box position="relative">
      {/* <IconButton
        aria-label="Sebelumnya"
        onClick={() => scrollByPage(-1)}
        disabled={atStart}
        sx={{
          position: "absolute",
          left: 0,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "background.paper",
          boxShadow: 1,
          "&:disabled": { opacity: 0.4 },
          zIndex: 1,
        }}
      >
        <ChevronLeft />
      </IconButton> */}

      <Box
        ref={trackRef}
        sx={{
          display: "flex",
          gap: "12px",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          py: 1,
        }}
      >
        {d_items.map((it, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              width: "100%",
              paddingLeft: "8px",
              scrollSnapAlign: "start",
            }}
          >
            <GoalCard {...it} />
          </Box>
        ))}
      </Box>

      {/* <IconButton
        aria-label="Berikutnya"
        onClick={() => scrollByPage(1)}
        disabled={atEnd}
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          bgcolor: "background.paper",
          boxShadow: 1,
          "&:disabled": { opacity: 0.4 },
          zIndex: 1,
        }}
      >
        <ChevronRight />
      </IconButton> */}
    </Box>
  );
};

export default GoalProgress;
