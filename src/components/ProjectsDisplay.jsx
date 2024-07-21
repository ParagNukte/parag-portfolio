import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import projects from "./projects"
import { Link } from "react-router-dom";
const ProjectCard = ({ image, title, caption }) => {
  return (
    <Link to="/projects/contextapi">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {caption}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

const ProjectsDisplay = () => {
  return (
    <Grid container spacing={2}>
      {projects.map((project, index) => (
        <Grid item key={index} >
          <ProjectCard
            image={project.image}
            title={project.title}
            caption={project.caption}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsDisplay;
