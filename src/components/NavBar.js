import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const NavBar = () => {
  return (
    <>
      <AppBar position="static" id="navBar" sx={{backgroundColor: '#212529', display: 'flex'}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Jeremy Jensen
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "right" },
              }}
            >
              <Button sx={{ my: 2, color: "white", display: "block", ":hover": { backgroundColor: '#516374'} }}>
                <Link href="/resume">Resume</Link>
              </Button>

              <Button sx={{ my: 2, color: "white", display: "block", ":hover": { backgroundColor: '#516374'} }}>
                <Link href="/projects">Projects</Link>
              </Button>

              <Button sx={{ my: 2, color: "white", display: "block", ":hover": { backgroundColor: '#516374'} }}>
                <Link href="/contact">Contact me</Link>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default NavBar;
