import NavItem from './components/nav-item/nav-item';

export const headerNavItems: NavItem[] = [
  {
    text: 'Dashboard',
    link: '/pages/dashboard'
  }
];

export const sidebarNavItems: NavItem[] = [
  {
    text: 'Dashboard',
    link: '/pages/dashboard',
    iconClass: 'fas fa-tachometer-alt'
  },
  {
    text: 'Form',
    link: '/pages/form',
    iconClass: 'fas fa-book-open'
  }
];
