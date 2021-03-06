import React, { Fragment } from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: "auto"
  },
  Grid: {
    padding: 15
  }
};

export default ({
  exercises,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left."
  },
  category,
  onSelect,
  onDelete
}) => (
  <Grid container>
    <Grid item sm style={styles.Grid}>
      <Paper style={styles.Paper}>
        {exercises.map(
          ([group, exercises]) =>
            !category || category === group ? (
              <Fragment key={group}>
                <Typography
                  variant="headline"
                  style={{ textTransform: "capitalize" }}
                >
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ id, title }) => (
                    <ListItem key={id} button onClick={() => onSelect(id)}>
                      <ListItemText primary={title} />
                      <ListItemSecondaryAction>
                        <IconButton onClick={() => onDelete(id)}>
                          <Delete />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Fragment>
            ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm style={styles.Grid}>
      <Paper style={styles.Paper}>
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading" style={{ marginTop: 20 }}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
