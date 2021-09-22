import React from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import {GET_ALL_COMPANY} from '../../../grapgQl/company/companyQueries';
import {useState, useEffect} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import Button from '@material-ui/core/Button';
import {ACCEPT_COMPANY, ACCEPT_STUDENT} from "../../../grapgQl/admin/adminMutation";
import Swal from "sweetalert2";

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

const ComTable = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    function createData(id, date, name, country, accept, Reject) {
        return {id, date, name, country, accept, Reject};
    }

    function preventDefault(event) {
        event.preventDefault();
    }

    const classes = useStyles();
    const [companies, setCompanies] = useState(null);
    const {data} = useQuery(GET_ALL_COMPANY);

    useEffect(() => {
        if (!data) {
            return;
        }
        setCompanies(data.getAllCompany);
    }, [data]);

    const rows = () => {
        if (!companies) {
            return [];
        }
        return companies.filter((company) => company.accept === "processing").map((company) => {
            return (
                createData(
                    company.com_id,
                    company.date,
                    company.com_name,
                    "Sri Lanka",
                    <Button color='primary' onClick={() => handleOnClickAcceptCompany(company.com_id, 'accept')} >Accept</Button>,
                    <Button color='secondary' onClick={() => handleOnClickAcceptCompany(company.com_id, 'reject')}>Reject</Button>
                )
            )
        })
    }
    const [acceptCompany] = useMutation(ACCEPT_COMPANY);
    const handleOnClickAcceptCompany = (id, accept) => {
        acceptCompany({variables: {com_id: Number(id), accept: accept}}).then((data) => {
            Toast.fire({
                icon: 'success',
                title: data.data.acceptCompany.message
            });
            setCompanies(companies.filter((company) => {
                return company.com_id !== id
            }))
        })
    }

    return (
        <React.Fragment>
            <Title>Recent Companies</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Accept</TableCell>
                        <TableCell align="right">Reject</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows().map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.country}</TableCell>
                            <TableCell>{row.accept}</TableCell>
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

export default ComTable;
