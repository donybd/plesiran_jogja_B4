import styles from './Sidebar.module.css';

const Sidebar = ({activeMenu, onMenuClick}) => {
  const menuItems = [
    {name: 'Discover', icon: 'fas fa-compass'},
    {name: 'Users', icon: 'fas fa-users'},
    {name: 'Tour Packages', icon: 'fas fa-box'},
    {name: 'Hotel', icon: 'fas fa-hotel'},
    {name: 'Rental', icon: 'fas fa-car'},
    {name: 'Booking', icon: 'fas fa-book'},
    {name: 'Notification', icon: 'fas fa-bell'},
    {name: 'Settings', icon: 'fas fa-cog'},
    {name: 'Log Out', icon: 'fas fa-sign-out-alt'},
  ];

  return (
    <div className={styles.sidebar}>
      <h2>Dashboard Admin</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.name} className={activeMenu === item.name ? styles.active : ''} onClick={() => onMenuClick(item.name)}>
            <a href="#">
              <i className={item.icon}></i>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
