import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { alpha, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typed from "react-typed";
import ControlledCarousel from "../../aboutUs/ControlledCarousel";

const Hero = () => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  return (
    <>
      {/* <ControlledCarousel /> */}
      <img
        className="aboutimage"
        src="https://element502.com/wp-content/uploads/2017/01/about-post.jpg"
        alt=""
      />
      <Grid container spacing={4} className="mainpage">
        <Grid item container xs={2} md={20} alignItems={"center"}>
          <Box
            data-aos={isMd ? "fade-right" : "fade-up"}
            paddingLeft={isMd && 2}
            p={1}
          >
            {/* <Box marginBottom={2}>
              <Typography
                variant="h4"
                color="text.primary"
                sx={{ fontWeight: 700 }}
              >
                Think opel <br />
                Think{" "}
                <Typography
                  color={"primary"}
                  component={"span"}
                  variant={"inherit"}
                  sx={{
                    background: `linear-gradient(180deg, transparent 82%, ${alpha(
                      theme.palette.secondary.main,
                      0.3
                    )} 0%)`,
                  }}
                >
                  <Typed
                    strings={[
                      "Software",
                      " Talent development",
                      "Farm Solutions",
                    ]}
                    typeSpeed={100}
                    loop={true}
                  />
                </Typography>
              </Typography>
            </Box> */}
            <Box marginBottom={3}>
              <h4
                className="mainpage"
                variant="h6"
                component="p"
                color="text.secondary"
              >
                We started out to solve the logistics problem involved in the
                exotic produce market which was being supplied to both HORECA
                and retail customers from farmers in the hills. The traders used
                to get it to Bangalore on pre order with a good margin. For the
                end customer the source was not known and the traders were not
                aware of the method of growing and if any pesticides were
                applied on the produce which was being consumed RAW in the form
                of salads, wraps and garnishing. In addition to that, getting
                fresh produce from source to consumers was also challenging due
                to supply chain constraints. Since most of the produce is grown
                in traditional soil method, the produce would get soiled and
                repeated washing and processing them yielded only 60-70% of the
                edible/usable produce. Add the shipping cost to it and packaging
                to keep the produce fresh, it would only make it a costly and
                challenging affair by the time the produce was ready for
                consumption. NOWA farms identified the most modern method of
                precision farming using HYDROPONICs technique to grow exotic
                produce, specifically the salad vegetables, to be consumed in
                RAW, for the URBAN consumers. We setup our first farm in 2017 on
                a leased half acre plot in the city to grow leafy greens and
                salad vegetables. We used the NFT method to grow leafy greens,
                and coco peat based method to grow bell peppers, cucumbers,
                cherry tomatoes and other herbs. Over the last 5 years in this
                domain, we have established around 12 acres of soilless farms
                around 3 cities and offer turnkey solutions to setup and operate
                Hydroponics, Aquaponics and Aeroponics farms with good return on
                investment.
                {/* <br />
                            Lorem ipsum dolor sit amet. */}
              </h4>
            </Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              alignItems={{ xs: "stretched", sm: "flex-start" }}
            >
              {/* <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth={isMd ? false : true}
                        >
                            Start now
                        </Button> */}
              {/* <Box
                            component={Button}
                            variant="outlined"
                            color="primary"
                            size="large"
                            marginTop={{ xs: 2, sm: 0 }}
                            marginLeft={{ sm: 2 }}
                            fullWidth={isMd ? false : true}
                        >
                            Learn more
                        </Box> */}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={"center"}
          justifyContent={"center"}
          xs={12}
          md={6}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {/* <Box
          component={LazyLoadImage}
          height={1}
          width={1}
          // src={'https://assets.maccarianagency.com/screenshots/dashboard.png'}
          alt="..."
          effect="blur"
          boxShadow={3}
          borderRadius={2}
          maxWidth={600}
          sx={{
            filter: theme.palette.mode === "dark" ? "brightness(0.7)" : "none",
          }}
        /> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Hero;
