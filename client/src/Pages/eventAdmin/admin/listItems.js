import React, {useEffect, useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {any} from 'prop-types';
import {Redirect} from "react-router-dom";


export const MainListItems = () => {
    const [isCompany, setIsCompanyRedirect] = useState(false);
    const onclickCompanyRoute = () => {
        console.log("mahinda mahattya")
        setIsCompanyRedirect(true);
    }
    const [isStudent, setIsStudentRedirect] = useState(false);
    const onclickStudentRoute = () => {
        console.log("mahinda mahattya")
        setIsStudentRedirect(true);
    }

    useEffect(() => {
        return () => {
            setIsCompanyRedirect(false);
            setIsStudentRedirect(false);
        }
    });

    return (
        <div>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText
                    onClick={onclickStudentRoute}
                    primary="Students"/>
                {isStudent && <Redirect to='/admin/student'/>}

            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <PeopleIcon/>
                </ListItemIcon>
                <ListItemText
                    onClick={onclickCompanyRoute}
                    primary="Companies"/>
                {isCompany && <Redirect to='/admin/company'/>}
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <LayersIcon/>
                </ListItemIcon>
                <ListItemText primary="Organizer"/>
            </ListItem>
        </div>
    )
};

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Previous events</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Current event"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="2020"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="2019"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="2018"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="2017"/>
        </ListItem>
    </div>
);
