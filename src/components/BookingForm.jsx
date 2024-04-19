import React from 'react';
import { useFormik } from 'formik';
import { Grid, TextField, Button } from '@mui/material';

const BookingForm = () => {
  const formik = useFormik({
    initialValues: {
      eventType: '',
      numberOfPeople: 1,
      date: '',
      comments: ''
    },
    onSubmit: values => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="eventType"
            name="eventType"
            label="Event Type"
            value={formik.values.eventType}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="numberOfPeople"
            name="numberOfPeople"
            label="Number of People"
            type="number"
            value={formik.values.numberOfPeople}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="date"
            name="date"
            label="Date"
            type="date"
            value={formik.values.date}
            onChange={formik.handleChange}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            id="comments"
            name="comments"
            label="Comments"
            multiline
            rows={4}
            value={formik.values.comments}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default BookingForm;
