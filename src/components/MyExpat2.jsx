import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";

import {
  Card,
  Fab,
  IconButton,
  MenuItem,
  TextField,
  FormControl,
  LinearProgress,
  CircularProgress,
  Grid,
  Tooltip,
  Badge,
  withStyles
} from "@material-ui/core";
import { Delete, VpnKeyOutlined } from "@material-ui/icons/";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUserOutlined";

import AddCircle from "@material-ui/icons/AddCircle";
import WorkOutline from "@material-ui/icons/WorkOutlineOutlined";
import Assignment from "@material-ui/icons/AssignmentOutlined";
import AccountBalance from "@material-ui/icons/AccountBalanceOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

import Context from "../context/Context";

const useStyles = makeStyles(() => ({
  add: {
    padding: "20px"
  },
  parent: {
    width: "100%",
    height: "100%",

    display: "flex",
    flexDirection: "column"
  },
  childTop: {
    padding: "8px 8px 8px 16px",
    backgroundColor: "rgba(255, 255, 255,0.85)"
  },

  "@keyframes blinker": {
    to: { transform: "scale(1.7)" }
  },
  childTopAnimated: {
    backgroundColor: "rgba(255, 255, 255,0.85)",
    padding: "8px 8px 8px 16px"
  },
  blinkText: {
    animationName: "$blinker",
    animationDuration: "1s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationDirection: "alternate-reverse"
  },
  childBottom: {
    padding: "8px",
    marginTop: "8px",
    flexGrow: "1",
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  },
  config: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  configTitle: {
    marginRight: "5px"
  },
  formControl: {
    width: "100%"
  },
  progressTitle: {
    marginTop: "10px",
    fontSize: "1rem",
    fontWeight: "bold"
  },
  select: {
    flexGrow: "1",
    marginBottom: "10px",
    marginRight: "10px"
  },
  selectflex: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    padding: "40px 0",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255,0.7)",
    "&:hover": {
      backgroundColor: "white"
    }
  },
  wrapperSelect: {
    padding: "40px 0",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },

  wrapper2: {
    padding: "41.5px 0",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255,0.3)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255,0.6)"
    }
  },
  wrapperNo: {
    padding: "41.5px 0",
    width: "300px",
    height: "300px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255,0.3)",

    "&:hover": {
      backgroundColor: "rgba(255, 255, 255,0.6)"
    }
  },

  fabProgress: {
    position: "absolute",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
    zIndex: 1
  },
  iconOnTop: {
    zIndex: 2
  },
  listTitle: {
    fontSize: "1.5rem",
    color: "white",
    textShadow:
      "grey 1px 0px 0px, grey 0.540302px 0.841471px 0px, grey -0.416147px 0.909297px 0px, grey -0.989993px 0.14112px 0px, grey -0.653644px -0.756803px 0px, grey 0.283662px -0.958924px 0px, grey 0.96017px -0.279416px 0px"
  },
  badge: {
    zIndex: "3"
  },
  displaycenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexGrow: "1"
  },
  reason: {
    fontSize: "0.9rem",
    fontStyle: "italic"
  }
}));

const BorderLinearProgress = withStyles({
  root: {
    height: 15,
    width: "97%",
    borderRadius: 20,
    backgroundColor: "rgba(255, 219, 122, 1)",
    margin: "10px 0"
  },
  bar: {
    borderRadius: 20,
    backgroundColor: "rgba(229, 170, 75, 1)"
  }
})(LinearProgress);

const MyExpat2 = () => {
  const classes = useStyles();

  //CONTEXT
  const { setShow_ADD_DESTINATION } = React.useContext(Context);
  const { setShow_DELETE_DESTINATION } = React.useContext(Context);
  const { focusList, setFocusList } = React.useContext(Context);
  const { destinations } = React.useContext(Context);
  const { destinationSelected, setDestinationSelected } = React.useContext(Context);
  const { arrayOfBadges } = React.useContext(Context);
  //-------------------------------

  // SELECTION DE LA DESTINATION
  const handleChange = (event) => {
    setDestinationSelected(event.target.value);
  };

  if (arrayOfBadges && destinationSelected && destinations) {
    return (
      <div className={classes.parent}>
        <Card className={classes.childTop} id="destination">
          <div className={classes.config}>
            <Typography className={classes.configTitle}>Ajouter une destination</Typography>
            <IconButton color="primary" onClick={() => setShow_ADD_DESTINATION(true)}>
              <AddCircle fontSize="medium" />
            </IconButton>
          </div>
          <FormControl className={classes.formControl}>
            <div className={classes.selectflex}>
              <TextField select value={destinationSelected} onChange={handleChange} className={classes.select}>
                {destinations.map((dest, index) => (
                  <MenuItem value={dest.id} key={index}>
                    {dest.country}, {dest.city} le {dest.arrival_date.substring(8, 10)}/
                    {dest.arrival_date.substring(5, 7)}/{dest.arrival_date.substring(0, 4)}
                  </MenuItem>
                ))}
              </TextField>

              <IconButton onClick={() => setShow_DELETE_DESTINATION(true)}>
                <Delete />
              </IconButton>
            </div>
          </FormControl>
          <div className={classes.progress}>
            <Typography color="primary" variant="p" className={classes.reason}>
              Raison du voyage: {destinations.filter((el) => el.id === destinationSelected)[0].reason}
              <br /> <br />
            </Typography>
            <Typography color="primary" variant="h5" className={classes.progressTitle}>
              {Math.round(arrayOfBadges && arrayOfBadges[0].global)}% des tâches effectuées
            </Typography>
            <BorderLinearProgress variant="determinate" color="secondary" value={arrayOfBadges[0].global} />
          </div>
        </Card>
        {/* deuxieme card */}
        <Card className={classes.childBottom}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h3" className={classes.listTitle}>
                Mes listes
              </Typography>
            </Grid>

            {arrayOfBadges.map((badge, index) => (
              <Grid item xs={4} key={index}>
                <Card className={focusList === index ? classes.wrapperSelect : classes.wrapper}>
                  <Badge badgeContent={arrayOfBadges[index].result} color="primary" className={classes.badge}>
                    <IconButton
                      className={classes.iconOnTop}
                      onClick={() => setFocusList(index)}
                      color={focusList === index ? "primary" : ""}
                    >
                      <Tooltip title={arrayOfBadges[index].type} placement="bottom">
                        {arrayOfBadges[index].type.includes("Santé") ? (
                          <FavoriteBorderIcon fontSize="large" />
                        ) : arrayOfBadges[index].type.includes("Logem") ? (
                          <VpnKeyOutlined fontSize="large" />
                        ) : arrayOfBadges[index].type.includes("Assur") ? (
                          <VerifiedUserIcon fontSize="large" />
                        ) : arrayOfBadges[index].type.includes("Admin") ? (
                          <Assignment fontSize="large" />
                        ) : arrayOfBadges[index].type.includes("Emploi") ? (
                          <WorkOutline fontSize="large" />
                        ) : arrayOfBadges[index].type.includes("Banque") ? (
                          <AccountBalance fontSize="large" />
                        ) : arrayOfBadges[index].type.includes("Démén") ? (
                          <LocalShippingOutlinedIcon fontSize="large" />
                        ) : arrayOfBadges[index].type.includes("adress") ? (
                          <ContactMailOutlinedIcon fontSize="large" />
                        ) : arrayOfBadges[index].type.includes("Docum") ? (
                          <DescriptionOutlinedIcon fontSize="large" />
                        ) : (
                          <PersonOutlineOutlinedIcon fontSize="large" />
                        )}
                      </Tooltip>
                    </IconButton>
                  </Badge>
                  <CircularProgress
                    color="secondary"
                    variant="static"
                    value={arrayOfBadges[index].percent}
                    size={70}
                    className={classes.fabProgress}
                  />
                </Card>
              </Grid>
            ))}

            <Grid item xs={4}>
              <Card className={classes.wrapper2}>
                <Tooltip title="Bientôt disponible" placement="bottom">
                  <Fab color="primary" aria-label="add">
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </div>
    );
  } else {
    return (
      <div className={classes.parent}>
        <Card className={classes.childTopAnimated} id="destination">
          <div className={classes.config}>
            <Typography>Ajouter une destination</Typography>
            <IconButton color="primary" onClick={() => setShow_ADD_DESTINATION(true)}>
              <AddCircle fontSize="medium" className={classes.blinkText} />
            </IconButton>
          </div>
        </Card>
        {/* deuxieme card */}
        <Card className={classes.childBottom} />
      </div>
    );
  }
};

export default MyExpat2;
