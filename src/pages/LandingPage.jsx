import React from 'react';
import { Container, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as LinkRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import fond from '../assets/marrakech.jpg';
import fond2 from '../assets/morocco.jpg';
import mobile1 from '../assets/mobile1.png';
import mobile2 from '../assets/mobile2.png';
import mobile3 from '../assets/mobile3.png';

import marrakech from '../assets/marrakech.jpg';
import bordeaux from '../assets/bordeaux.jpg';
import rabat from '../assets/rabat.jpg';
import LandingBar from '../components/LandingBar';
import DemoCarousel from '../components/AutoCarousel';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ForumIcon from '@material-ui/icons/Forum';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Footer from '../components/Footer';
import logo from '../assets/logo.png';
import Nora from '../assets/Nora.jpg';
import Yannick from '../assets/Yannick.jpg';

const useStyles = makeStyles(() => ({
  root: {
    margin: '0',
    minWidth: '100%',
    padding: 0
  },

  head: {
    zIndex: '0',
    maxWidth: '100%',
    padding: 0
    // position: 'absolute'
  },

  contain: {
    margin: '0',
    padding: '0',
    // minHeight: '100vh',
    maxWidth: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // background: 'rgba(229, 170, 75, 1)',
    zIndex: '1',
    position: 'absolute',
    left: '0',
    '@media (max-width:961px)': {
      position: 'relative',
      backgroundImage: `url("${fond}")`
    }
  },
  caroline: {
    minWidth: '100%',
    maxWidth: '100%',
    padding: '0',
    '@media (max-width:961px)': {
      display: 'none'
    }
  },
  container: {
    minWidth: '100%',
    minHeight: '100vh',
    margin: '0',
    padding: '0',
    backgroundColor: 'rgba(255, 252, 250)'
  },

  propos: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '100%',
    minHeight: '100vh',
    backgroundColor: '#1F2C30'
  },

  zonecentrale: {
    minWidth: '100%',
    minHeight: '80vh',
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '10%',
    alignItems: 'left',
    '& div': {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-around'
    }
  },
  buttons: {
    marginTop: '12%',
    '@media (max-width:961px)': {
      flexDirection: 'column',
      marginTop: '4%',
      diplay: 'flex',
      justifyContent: 'center'
    }
  },
  login: {
    width: '200px',
    height: '50px',
    '@media (max-width:961px)': {
      marginBottom: '2em'
    }
  },

  submit: {
    width: '200px',
    height: '50px'
  },
  boldText: {
    fontWeight: 'bold',
    maxWidth: '100%',
    wordBreak: 'normal',
    padding: '0 15%',
    marginBottom: '4%',
    marginTop: '1%',
    textAlign: 'justify',
    '@media (max-width:961px)': {
      maxWidth: '95%'
    }
  },
  card: {
    maxWidth: 345,
    backgroundColor: '#1F2C30',
    marginBottom: '20%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  frame: {
    marginBottom: '3%',
    width: '800px',
    height: '460px',
    '@media (max-width:961px)': {
      width: '95%',
      height: '180px'
    }
  },
  header: {
    display: 'flex',
    flexDirection: 'column'
  },
  titles: {
    marginBottom: '3%',
    marginTop: '3%'
  },
  descriptionImg: {
    backgroundImage: `url("${fond2}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  description: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width:961px)': {
      maxWidth: '100%'
    }
  },
  title: {
    fontWeight: 'bold',
    fontSize: '5em',
    marginBottom: '1%',
    marginTop: '2%',
    '@media (max-width:961px)': {
      fontSize: '2em',
      maxWidth: '95%'
    }
  },
  subTitle: {
    fontSize: '3em',
    '@media (max-width:961px)': {
      fontSize: '2em'
    }
  },
  titleBloc: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '3em',
    borderBottom: '10px solid #e2b439',
    marginBottom: '10%',
    marginTop: '2%',
    '@media (max-width:961px)': {
      fontSize: '2em',
      maxWidth: '95%'
    }
  },
  avatar: {
    color: 'white',
    height: '80px',
    width: '80px',
    marginLeft: '10%'
  },
  avatar1: {
    color: 'rgba(229, 170, 75, 1)',
    height: '80px',
    width: '80px'
  },
  subtitle: {
    color: '#fad65a',
    fontWeight: 'bold'
  },
  textBloc: {
    color: 'white',
    '@media (max-width:961px)': {
      fontSize: '0.8em'
    }
  },
  proposEquipe: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '100%',
    minHeight: '100vh',
    backgroundColor: 'white'
  },
  blocEquipe: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    '@media (max-width:961px)': {
      flexDirection: 'column',
      marginTop: '4%',
      alignItems: 'center'
    }
  },
  textEquipe: {
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '20px',
    paddingRight: '60px',
    '@media (max-width:961px)': {
      marginBottom: '30px',
      paddingRight: 0,
      paddingLeft: 0
    }
  },
  titleEquipe: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: '3em',
    borderBottom: '10px solid #e2b439',
    marginBottom: '10%',
    marginTop: '2%',
    '@media (max-width:961px)': {
      fontSize: '2em',
      maxWidth: '95%'
    }
  },
  avatarEquipe: {
    height: '200px',
    width: '200px',
    borderRadius: '50%',
    '@media (max-width:961px)': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  carousel: {
    maxHeigth: '4%',
    display: 'flex',
    justifyContent: 'center',
    '@media (max-width:961px)': {
      display: 'none'
    }
  },

  loginLinks: {
    '@media (max-width:961px)': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  border: {
    width: '5%',
    height: '100%',
    backgroundColor: '#ffd65b'
  },
  containImg: {
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    margin: '0',
    padding: '0'
  },
  under: {
    width: '70%',
    height: '10px',
    margin: '0 0 2% 0',
    backgroundColor: '#ffd65b'
  },
  history: {
    margin: '0',
    padding: '0 0 0 15%',
    maxWidth: '100%',
    textAlign: 'left'
  },
  logo: {
    width: '19%'
  },
  logoContain: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingRight: '15%'
  },
  titler: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '5em',
    marginBottom: '1%',
    marginTop: '2%',
    borderBottom: '10px solid #e2b439',
    '@media (max-width:961px)': {
      fontSize: '2em',
      maxWidth: '95%'
    }
  }
}));

function LandingPage() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Container className={classes.head}>
        <Container className={classes.contain}>
          <LandingBar />
          <Container className={classes.zonecentrale}>
            <Typography className={classes.titler}>MOBILITE AUTREMENT</Typography>
            <Typography className={classes.subTitle}>Entre France & Maroc</Typography>
            <div className={classes.buttons}>
              <Link
                underline="none"
                className={classes.loginLinks}
                component={LinkRouter}
                to="/login"
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  className={classes.login}
                >
                  Accès à mon espace
                </Button>
              </Link>
              <Link
                underline="none"
                className={classes.loginLinks}
                component={LinkRouter}
                to="/signup"
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  S'inscrire
                </Button>
              </Link>
            </div>
          </Container>
        </Container>
        <Container className={classes.caroline}>
          <DemoCarousel
            showArrows={false}
            showThumbs={false}
            width={'100%'}
            height={true}
            wireframe1={marrakech}
            wireframe2={bordeaux}
            wireframe3={rabat}
            showIndicators={false}
          />
        </Container>
      </Container>

      <Grid
        container
        spacing={0}
        justify="center"
        style={{
          minHeight: '60vh',
          marginTop: '1.5%',
          marginBottom: '30px',
          maxWidth: '100%'
        }}
      >
        <Grid container item xs={0} md={6} justify="center">
          <Container className={classes.containImg}>
            <Container className={classes.border}></Container>
            <Container className={classes.descriptionImg}></Container>
          </Container>
        </Grid>
        <Grid container item xs={12} md={6} justify="center">
          <Container className={classes.description}>
            <Container className={classes.logoContain}>
              <img className={classes.logo} src={logo} alt="" />
            </Container>
            <Container className={classes.history}>
              <Typography id="notreHistoire" className={classes.title}>
                Notre histoire
              </Typography>
            </Container>
            <Container className={classes.under}></Container>
            <Typography className={classes.boldText}>
              Une réelle volonté d'accompagner les diasporas, les bi- nationaux et les expatriés
              souhaitant s'installer entre la France et le Maroc pour une courte ou une longue
              durée. MOBEA sera la boite à outils idéale pour bien préparer votre mobilité entre les
              deux rives. Grâce à notre algorithme, notre application collaborative, vous permettra
              de préparer, organiser, communiquer, partager, networker, et surtout se faire de
              nouveaux ami(e)s sur place avant même votre arrivée ! En fonction de votre profil, vos
              loisirs, vos passions et vos préférences, MOBEA vous proposera les ami(e)s qui vous
              complètent, partagent vos intérêts et que vous n'auriez probablement jamais croisés.
            </Typography>
          </Container>
        </Grid>
      </Grid>

      <Container className={classes.propos}>
        <Typography id="fonctionnalités" className={classes.titleBloc}>
          FONCTIONNALITES
        </Typography>

        <Grid
          container
          spacing={1}
          justify="center"
          style={{ minHeight: '35vh', marginBottom: '30px' }}
        >
          <Grid container item xs={6} md={4} justify="center">
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                avatar={<PlaylistAddCheckIcon fontSize="large" className={classes.avatar} />}
                title={<Typography className={classes.subtitle}>CHECKLISTS</Typography>}
                align="center"
              />
              <CardContent>
                <Typography className={classes.textBloc} component="p" align="center">
                  Préparez et organisez cotre mobilité avant, pendant et après votre installation
                  (votre destination, vos démarches, vos transferts...)
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid container item xs={6} md={4} justify="center">
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                avatar={<ForumIcon fontSize="large" className={classes.avatar} />}
                title={<Typography className={classes.subtitle}>CHAT EN LIGNE</Typography>}
              />
              <CardContent>
                <Typography className={classes.textBloc} component="p" align="center">
                  Echangez et partagez avec des personnes en situation de départ ou déjà installées
                  qui ont les mêmes problématiques, intérêts, passions, profession
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid container item xs={6} md={4} justify="center">
            <Card className={classes.card}>
              <CardHeader
                className={classes.header}
                avatar={<ThumbUpIcon fontSize="large" className={classes.avatar1} />}
                title={
                  <Typography className={classes.subtitle}>
                    RETOURS D'EXPERIENCE CERTIFIES
                  </Typography>
                }
                align="center"
              />
              <CardContent>
                <Typography className={classes.textBloc} component="p" align="center">
                  Partagez vos tips : créez votre profil et dites nous ce que la mobilité vous
                  apporte dans vos expériences professionnelles et personnelles
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container className={classes.proposEquipe}>
        <Typography id="équipe" className={classes.titleEquipe}>
          EQUIPE
        </Typography>

        <div className={classes.blocEquipe}>
          <div>
            <img src={Nora} className={classes.avatarEquipe} alt="" />
          </div>
          <Typography className={classes.textEquipe} component="p" align="center">
            Nora Moulali - FOUNDER & CEO
          </Typography>

          <div>
            <img src={Yannick} className={classes.avatarEquipe} alt="" />
          </div>
          <Typography className={classes.textEquipe} component="p" align="center">
            Yannick Denot - CEO
          </Typography>
        </div>
      </Container>

      <Container className={classes.carousel}>
        <DemoCarousel width="30%" wireframe1={mobile1} wireframe2={mobile2} wireframe3={mobile3} />
      </Container>

      <Footer />
    </Container>
  );
}

export default LandingPage;
