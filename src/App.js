import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardMedia,
  CardContent,
  Button,
  Link,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import BorderColor from "@mui/icons-material/BorderColor";
import StarIcon from "@mui/icons-material/Star";
import { useTranslation } from "react-i18next";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { skillList } from "./Constants";
import Divider from "@mui/material/Divider";

const CV = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const imageButton = (src, lng) => {
    return (
      <Button variant="text" size="small" onClick={(e) => changeLanguage(lng)}>
        <img src={src} width="40" height="27" />
      </Button>
    );
  };

  return (
    <Container maxWidth="sm" sx={{ padding: 4 }}>
      <Paper
        variant="outlined"
        textAlign="center"
        sx={{ p: 1, mb: 3, bgcolor: "#e5e5e5" }}
      >
        <Box textAlign="center">
          {imageButton("https://flagcdn.com/w40/gb.png", "en")}
          {imageButton("https://flagcdn.com/w40/tr.png", "tr")}
          {imageButton("https://flagcdn.com/w40/ee.png", "et")}
        </Box>
      </Paper>

      <Box textAlign="center" mb={4}>
        <Avatar
          alt="Denizhan Aras"
          src="https://avatars.githubusercontent.com/u/53824042?v=4"
          sx={{ width: 120, height: 120, margin: "auto" }}
        />
        <Typography variant="h4" fontWeight="bold" mt={2}>
          {t("name")}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {t("job")}
        </Typography>
      </Box>

      <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: "#e5e5e5" }}>
        <Typography variant="h6" gutterBottom>
          {t("aboutTitle")}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {t("about")}
        </Typography>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: "#e5e5e5" }}>
        <Typography variant="h6" gutterBottom>
          {t("contactTitle")}
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="denizhan.aras@hotmail.com" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="+90 554 677 8169" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LinkedInIcon />
            </ListItemIcon>
            <Link
              href="https://linkedin.com/in/denizhan-a-182361138"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </Link>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <BorderColor />
            </ListItemIcon>
            <Link
              href="https://medium.com/@denizhan.aras"
              target="_blank"
              rel="noopener"
            >
              Medium
            </Link>
          </ListItem>
        </List>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: "#e5e5e5" }}>
        <Typography variant="h6" gutterBottom>
          {t("educationTitle")}
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText
              primary={t("university")}
              secondary="IMU - Istanbul, 2016 - 2021"
            />
          </ListItem>
        </List>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: "#e5e5e5" }}>
        <Typography variant="h6" gutterBottom>
          {t("experienceTitle")}
        </Typography>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="success" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ maxWidth: 450, textAlign: "center" }}>
                <CardMedia sx={{ height: 140 }} image="ykt.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {t("yktExperienceTitle")}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    YAPI KREDI TECHNOLOGY
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    {t("yktExperienceTime")}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {t("yktExperience")}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ maxWidth: 450, textAlign: "center" }}>
                <CardMedia sx={{ height: 140 }} image="ballys.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {t("ballysExperienceTitle")}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    BALLY'S INTERACTIVE ESTONIA
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    {t("ballysExperienceTime")}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {t("ballysExperience")}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Card sx={{ maxWidth: 450, textAlign: "center" }}>
                <CardMedia sx={{ height: 140 }} image="solvia.jpeg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {t("solviaExperinceTitle")}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    SOLVIA DIGITAL SOLUTIONS
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" component="div">
                    {t("solviaExperinceTime")}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {t("solviaExperince")}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2, mb: 3, bgcolor: "#e5e5e5" }}>
        <Typography variant="h6" gutterBottom>
          {t("skillsTitle")}
        </Typography>
        <Grid container spacing={1}>
          {skillList.map((skill) => (
            <Grid item xs={6} key={skill}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <StarIcon color="primary" fontSize="small" />
                <Typography variant="body2">{skill}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      <Paper variant="outlined" sx={{ p: 2, bgcolor: "#e5e5e5" }}>
        <Typography variant="h6" gutterBottom>
          {t("projectsTitle")}
        </Typography>
        <Card sx={{ maxWidth: 550, textAlign: "center" }}>
          <CardMedia sx={{ height: 140 }} image="slimvalidator.png" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Slim Validator
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              <Link
                href="https://github.com/arasdenizhan/slim-validator/tree/master"
                target="_blank"
                rel="noopener"
              >
                GitHub Repository
              </Link>
              {" | "}
              <Link
                href="https://central.sonatype.com/artifact/io.github.arasdenizhan/slim-validator"
                target="_blank"
                rel="noopener"
              >
                Maven Central
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {t("slimvalidator")}
            </Typography>
          </CardContent>
        </Card>
        <Divider sx={{ m: 2, height: 3, backgroundColor: "primary.main" }} />
        <Card sx={{ maxWidth: 550, textAlign: "center" }}>
          <CardMedia sx={{ height: 140 }} image="warconomy2.png" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Warconomy
            </Typography>
            <Typography gutterBottom variant="subtitle2" component="div">
              {t("workInProgress")}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {t("warconomy")}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </Container>
  );
};

export default function App() {
  return <CV />;
}
