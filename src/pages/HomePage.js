import React from "react";
import jobs from "../jobs.json";
import JobCard from "../components/JobCard";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

function HomePage() {
  return (
    <Container>
      <Grid container spacing={2}>
        {jobs.slice(0, 4).map((job) => (
          <Grid key={job.id} item xs={12} md={4} lg={3}>
            <JobCard job={job} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
