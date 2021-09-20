import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { GET_ALL_COMPANY } from '../../../grapgQl/company/companyQueries';
import {useState,useEffect} from 'react';
import { useQuery } from '@apollo/client';
import Button from '@material-ui/core/Button';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount, Reject) {
  return { id, date, name, shipTo, paymentMethod, amount, Reject };
}



// const rows = [
//   createData(0, '22 Jul, 2021', 'Elvis Codes', 'Srilanka', '2345 3719', 'Accept',<button>'Reject'</button>),
//   createData(1, '21 Jul, 2021', 'Paul addClick', 'London, UK', '4567 2574', 'Accept','Reject'),
//   createData(2, '21 Jul, 2021', ' Scholz mart', 'Japan', '6745 1253', 'Accept','Reject'),
//   createData(3, '21 Jul, 2021', 'Michael coderss', 'Srilanka', '3478 2000', 'Accept','Reject'),
//   createData(4, '20 Jul, 2021', 'Bruce Solutions', 'India', '7669 5919', 'Accept','Reject'),
// ];



function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();

  const [companies,setCompanies]=useState(null);

  useEffect(() => {
    if (!data) {
      return;
    }
    setCompanies(data.getAllCompany);
  },[]);
  
  const rows = ()=>{
    if(!companies){
      return[]
    } return companies.map((company)=>{
      return createData(company.com_id,company.date,company.name,"Sri Lanka","2525 2525",<Button>Accept</Button>,<Button>Reject</Button>)
    })
  }
  
  const {data} = useQuery(GET_ALL_COMPANY);

  return (
    <React.Fragment>
      <Title>Recent Companies</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Business Registration No</TableCell>
            <TableCell>Accept</TableCell>
            <TableCell align="right">Reject</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows().map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>

              <TableCell >{row.amount}</TableCell>
              <TableCell align="right">{row.Reject}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Companies
        </Link>
      </div>
    </React.Fragment>
  );
}
