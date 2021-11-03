import { Button, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import React from "react";
import "../../css/main.css";

const Main = () => {
  return (
    <Box sx={{ flexGrow: 1, borderBottom: 1 }} p={3} className="main">
      <Grid container>
        <Grid
          item
          xs={12}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <h2>DASHBOARD</h2>
          <div>
            <Button variant="contained" size="small">
              Customize
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} mb={3}>
          <Typography sx={{ fontSize: 12 }} color="text.secondary">
            Welcome back!
          </Typography>
        </Grid>
        <Grid item xs={12} fontSize="12" mb={1} fontWeight="bold">
          Quick Status
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography sx={{ fontSize: 14 }} fontWeight="bold" gutterBottom>
                Total Bookings
              </Typography>
              <Typography sx={{ fontSize: 26 }} fontWeight="bold">
                23,435
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent display="flex" alignItems="center">
              <Typography sx={{ fontSize: 14 }} fontWeight="bold" gutterBottom>
                Total Bookings
              </Typography>
              <Typography sx={{ fontSize: 26 }} fontWeight="bold">
                23,435
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent display="flex" alignItems="center">
              <Typography sx={{ fontSize: 14 }} fontWeight="bold" gutterBottom>
                Total Bookings
              </Typography>
              <Typography sx={{ fontSize: 26 }} fontWeight="bold">
                23,435
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent display="flex" alignItems="center">
              <Typography sx={{ fontSize: 14 }} fontWeight="bold" gutterBottom>
                Total Bookings
              </Typography>
              <Typography sx={{ fontSize: 26 }} fontWeight="bold">
                23,435
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Main;
