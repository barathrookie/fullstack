import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import { NavLink } from 'react-router-dom';

const panelStyles = {
  padding: '15px 20px',
  color: '#aaa'
};

const headerStyles = {
  padding: 20,
  fontSize: 16,
  background: '#34c3ff',
  color: ' #fff'
};

const Sidebar = () => (
  <div style={{ width: 240 }}>
    <Sidenav defaultOpenKeys={['3', '4']}>
      <Sidenav.Header>
        <div style={headerStyles}>SHELBY</div>
      </Sidenav.Header>
      <Sidenav.Body>
        <Nav>
          <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
            Dashboard
          </Nav.Item>
          <Nav.Item eventKey="2" icon={<GroupIcon />}>
            <NavLink to='/Profile'>Profile</NavLink>
          </Nav.Item>
          <Nav.Menu eventKey="3" title="Advanced" icon={<MagicIcon />}>
            <Nav.Item divider />
            <Nav.Item panel style={panelStyles}>
            </Nav.Item>
            <Nav.Item eventKey="3-1">User</Nav.Item>
            
            
            
            
             
            </Nav.Menu>
     
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);

export default Sidebar