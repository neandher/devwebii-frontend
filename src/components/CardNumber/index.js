import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Title from './../Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function CadrNumber() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Total de Agendamentos</Title>
      <Typography component="p" variant="h4">
        10
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        Data do Último Agendamento
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          Ver agendamentos
        </Link>
      </div>
    </React.Fragment>
  );
}
