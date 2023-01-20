import React, { useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import {
  Avatar,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import banner from "../assets/images/banner.jpg";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function SearchBanner() {

  const [subscribe, setSubscribe] = React.useState(false);

  const [inputtimeZone, setInputtimeZone] = useState("");
  const [inputSalary, setInputSalary] = useState("");

  const handleClicSubscribe = () => {
    setSubscribe(true);
  };

  const handleCloseSubscribe = () => {
    setSubscribe(false);
  };

  const navigate = useNavigate();

  const navigateSearch = () => {
    return navigate("/SearchPosting")
  }

  return (
    <div>
      <Box
        sx={{
          pt: 8,
          mt: 10,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            <Card>
              <div style={{ width: "100%", position: "relative" }}>
                <CardMedia
                  component="img"
                  image={banner}
                  title="Pancakes"
                  alt=""
                />
                <div
                  style={{
                    position: "absolute",
                    color: "black",
                    top: "30%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  Remote Works
                  <Stack direction="row" spacing={2} justifyContent="center">
                    <Paper
                      component="form"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: 300,
                        borderRadius: 5,
                        border: 1,
                      }}
                    >
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        inputProps={{ "aria-label": "search" }}
                      />
                      <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                        onClick={() => navigateSearch()}
                      >
                        <SearchIcon />
                      </IconButton>
                    </Paper>
                    <Avatar sx={{ m: 1, bgcolor: "rgb(255, 255, 255)" }}>
                      <IconButton>
                        <FilterAltIcon
                          onClick={handleClicSubscribe}
                          color="info"
                          fontSize="large"
                          sx={{ pt: 1 }}
                        />
                      </IconButton>
                    </Avatar>
                  </Stack>
                  <Box>
                    <Dialog
                      sx={{ flex: 1 }}
                      open={subscribe}
                      onClose={handleClicSubscribe}
                    >
                      <DialogTitle
                        sx={{
                          width: 600,
                          backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                              ? theme.palette.grey[200]
                              : theme.palette.grey[800],
                        }}
                      >
                        Filter
                      </DialogTitle>
                      <DialogContent sx={{ width: 600 }}>
                        <Grid container spacing={1}>
                          <Grid item xs={12} sm={12} md={6}>
                            <FormControl sx={{ mt: 2 }} fullWidth>
                              <InputLabel>Salary</InputLabel>
                              <Select
                                required
                                id="salary"
                                value={inputSalary}
                                label="Salary"
                                onChange={(event) =>
                                  setInputSalary(event.target.value)
                                }
                              >
                                <MenuItem value={40000}>
                                  + de 40 000 CAD{" "}
                                </MenuItem>
                                <MenuItem value={60000}>
                                  + de 60 000 CAD
                                </MenuItem>
                                <MenuItem value={80000}>
                                  + de 80 000 CAD
                                </MenuItem>
                                <MenuItem value={100000}>
                                  + de 100 000 CAD
                                </MenuItem>
                                <MenuItem value={120000}>
                                  + de 120 000 CAD
                                </MenuItem>
                                <MenuItem value={140000}>
                                  + de 140 000 CAD
                                </MenuItem>
                                <MenuItem value={160000}>
                                  + de 160 000 CAD
                                </MenuItem>
                                <MenuItem value={180000}>
                                  + de 180 000 CAD
                                </MenuItem>
                                <MenuItem value={200000}>
                                  + de 200 000 CAD
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </Grid>
                        <TextField
                          autoFocus
                          margin="dense"
                          id="job_title"
                          label="Job Title"
                          type="string"
                          fullWidth
                          variant="standard"
                        />

                        {/* <FormGroup sx={{ flexDirection: "row" }}>
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Contract"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Full time"
                          />
                          <FormControlLabel
                            control={<Checkbox />}
                            label="Part time"
                          />
                        </FormGroup> */}
                      </DialogContent>
                      <DialogActions
                        sx={{
                          width: 600,
                          backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                              ? theme.palette.grey[200]
                              : theme.palette.grey[800],
                        }}
                      >
                        <Button onClick={handleCloseSubscribe}>Cancel</Button>
                        <Button onClick={handleCloseSubscribe}>Save</Button>
                      </DialogActions>
                    </Dialog>
                  </Box>
                </div>
              </div>
            </Card>
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

export default SearchBanner;
