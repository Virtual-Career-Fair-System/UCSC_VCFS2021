import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(0, '22 Jul, 2021', 'Randika chathuranga', '2018CS003', 'reduce lanka', 'Accept','Reject'),
  createData(1, '21 Jul, 2021', 'Dammika Bandara', '2018IS203', 'code navia', 'Accept','Reject'),
  createData(2, '21 Jul, 2021', ' Indhika de silva', '2016CS145', 'kmp code academy', 'Accept','Reject'),
  createData(3, '21 Jul, 2021', 'Buddhika mahesh', '2017IS132', 'academy codes', 'Accept','Reject'),
  createData(4, '20 Jul, 2021', 'yohani surangi', '2018IS032', 'unic codes', 'Accept','Reject'),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders1() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Students</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Index</TableCell>
            <TableCell>Current Company</TableCell>
            <TableCell>Accept</TableCell>
            <TableCell align="right">Reject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>Accept</TableCell>
            <TableCell align="right">Reject</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
