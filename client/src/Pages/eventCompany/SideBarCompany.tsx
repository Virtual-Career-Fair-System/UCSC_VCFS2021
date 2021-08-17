import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import {FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart} from 'react-icons/fa';

type SideBarProps = {
  toggled: boolean
  handleToggleSidebar: any
}

const SideBarCompany: React.FC<SideBarProps> = (props) => {
  const {toggled, handleToggleSidebar} = props;
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
          sudesh
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<FaTachometerAlt/>}
            suffix={<span className="badge red">sudesh</span>}
          >
            sudesh
          </MenuItem>
          <MenuItem icon={<FaGem/>}> sudesh</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title='sudesh'
            icon={<FaRegLaughWink/>}
          >
            <MenuItem>sudesh 1</MenuItem>
            <MenuItem>sudesh 2</MenuItem>
            <MenuItem>sudesh 3</MenuItem>
          </SubMenu>
          <SubMenu
            title='sudesh'
            icon={<FaHeart/>}
          >
            <MenuItem>sudesh 1</MenuItem>
            <MenuItem>sudesh 2</MenuItem>
            <MenuItem>sudesh 3</MenuItem>
          </SubMenu>
          <SubMenu title='sudesh' icon={<FaList/>}>
            <MenuItem>sudesh 1 </MenuItem>
            <MenuItem>sudesh 2 </MenuItem>
            <SubMenu title='sudesh 3'>
              <MenuItem>sudesh 3.1 </MenuItem>
              <MenuItem>sudesh 3.2 </MenuItem>
              <SubMenu title={`sudesh 3.3`}>
                <MenuItem>sudesh 3.3.1 </MenuItem>
                <MenuItem>sudesh 3.3.2 </MenuItem>
                <MenuItem>sudesh 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{textAlign: 'center'}}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub/>
            <span> sudesh</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default SideBarCompany;
