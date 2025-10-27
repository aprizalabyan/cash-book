"use client";

import React from "react";
import { Box, Grid } from "@mui/material";
import CardWidget from "@/components/base/card/Widget";
import { Wallet } from "@mui/icons-material";

const OverviewPage = () => {
  return (
    <Grid container direction="column" spacing={2} p={2}>
      <Grid container spacing={2}>
        <Grid container size={8}>
          <Grid container size={12}>
            <Grid size={6}>
              <CardWidget
                title="Widget 1"
                icon={<Wallet />}
                filter={<Box>Ini filter</Box>}
              >
                Item 1
              </CardWidget>
            </Grid>
            <Grid size={3}>
              <CardWidget title="Widget 2" icon={<Wallet />}>
                Item 2
              </CardWidget>
            </Grid>
            <Grid size={3}>
              <CardWidget title="Widget 3" icon={<Wallet />}>
                Item 3
              </CardWidget>
            </Grid>
          </Grid>
          <Grid size={12}>
            <CardWidget
              title="Widget 5"
              icon={<Wallet />}
              filter={<Box>Ini filter</Box>}
            >
              Item 5
            </CardWidget>
          </Grid>
        </Grid>
        <Grid container size={4}>
          <Grid size={12} height={360}>
            <CardWidget title="Widget 4" icon={<Wallet />}>
              Item 4
            </CardWidget>
          </Grid>
          <Grid size={12} height={280}>
            <CardWidget title="Widget 6" icon={<Wallet />}>
              Item 6
            </CardWidget>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={12}>
          <CardWidget title="Widget 7" icon={<Wallet />}>
            Item 7
          </CardWidget>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OverviewPage;
