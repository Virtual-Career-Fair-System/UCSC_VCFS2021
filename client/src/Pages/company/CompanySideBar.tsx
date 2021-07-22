import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Redirect } from "react-router-dom";
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

type SideBarProps = {
    toggled: boolean
    handleToggleSidebar: any
}

const CompanySideBar: React.FC<SideBarProps> = (props) => {
    const [isPublishAdRedirect, setIsPublishAdRedirect] = useState(false);
    const [isCompanyViewNotificationRedirect, setIsCompanyViewNotificationRedirect] = useState(false);
    const { toggled, handleToggleSidebar } = props;
    console.log(toggled);
    const onclickPublishAdRoute = () => {
        // console.log('Nim');
        setIsPublishAdRedirect(true);

    }
    const onclickCompanyViewNotificationRoute = () => {
        // console.log('Nim');
        setIsCompanyViewNotificationRedirect(true);

    }

    return (
        <ProSidebar
            image={undefined}
            rtl={false}
            collapsed={false}
            toggled={toggled}
            breakPoint="md"
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <div
                    style={{
                        padding: '24px',
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 14,

                        letterSpacing: '1px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >

                </div>
            </SidebarHeader>

            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red"></span>}
                        onClick={onclickPublishAdRoute}
                    >
                        Publish New Ad
                        {isPublishAdRedirect && <Redirect to='/publishad' />}
                    </MenuItem>
                    <MenuItem
                        icon={<NotificationsActiveIcon />}
                        suffix={<span className="badge red"></span>}
                        onClick={onclickCompanyViewNotificationRoute}
                    >
                        Notification
                        {isCompanyViewNotificationRedirect && <Redirect to='/companyviewnotification' />}
                    </MenuItem>
                    <MenuItem icon={<FaGem />}> Rules</MenuItem>
                    <MenuItem
                        icon={<ExitToAppIcon />}
                        suffix={<span className="badge red"></span>}
                        
                    >
                        LogOut
                        
                    </MenuItem>
                </Menu>

                <Calendar />
            </SidebarContent>

            <SidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{
                        padding: '20px 24px',
                    }}
                >
                    <a
                        href="#"
                        target="_blank"
                        className="sidebar-btn"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                        <span> sudesh</span>
                    </a>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default CompanySideBar;
