import React from 'react';
import Calendar from 'react-calendar';
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

const AdminSideBar: React.FC<SideBarProps> = (props) => {
    const { toggled, handleToggleSidebar } = props;
    console.log(toggled);

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
                    >
                        Students
                    </MenuItem>
                    <MenuItem
                        icon={<FaTachometerAlt />}
                        suffix={<span className="badge red"></span>}
                    >
                        Companies
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

export default AdminSideBar;
