import React, {useEffect, useState} from 'react';
import Link from '@material-ui/core/Link';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import {useMutation, useQuery} from "@apollo/client";
import Button from "@material-ui/core/Button";
import {GET_ALL_STUDENT} from "../../../grapgQl/student/studentQuary";
import {ACCEPT_STUDENT} from "../../../grapgQl/admin/adminMutation";
import Swal from "sweetalert2";




export default function StuTable() {
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
    const [acceptStudent] = useMutation(ACCEPT_STUDENT);

    function preventDefault(event) {
        event.preventDefault();
    }

    const useStyles = makeStyles((theme) => ({
        seeMore: {
            marginTop: theme.spacing(3),
        },
    }));

    const handleOnClickAcceptStudent = (id, accept) => {
        acceptStudent({variables: {studentId: Number(id), accept: accept}}).then((data) => {
            Toast.fire({
                icon: 'success',
                title: data.data.acceptStudent.message
            });
            setStudents(students.filter((student) => {
                return student.id !== id
            }))
        })
    }

    function createData(id, date, name, reg_no) {
        return {id, date, name, reg_no};
    }

    const classes = useStyles();
    const [students, setStudents] = useState(null);
    const {data} = useQuery(GET_ALL_STUDENT);

    useEffect(() => {
        if (!data) {
            return;
        }
        console.log(data.getAllStudent);
        setStudents(data.getAllStudent);
    }, [data]);

    const rows = () => {
        if (!students) {
            return [];
        }
        return students.filter((student) => student.accept === "accept").map((student) => {
                return createData(
                    student.id,
                    student.date,
                    (student.f_name + ' ' + student.l_name),
                    student.reg_no
                   )
            }
        )
    }

    return (
        <React.Fragment>
            <Title>Recent Students</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Register Number</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows().map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.reg_no}</TableCell>
                            {/* <TableCell>{row.accept}</TableCell>
                            <TableCell align="right">{row.reject}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={classes.seeMore}>
                <Link color="primary" href="#" onClick={preventDefault}>
                    See more students
                </Link>
            </div>
        </React.Fragment>
    );
}
