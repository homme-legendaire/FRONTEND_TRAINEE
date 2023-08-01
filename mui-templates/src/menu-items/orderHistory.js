// assets
import { IconList } from '@tabler/icons';

// constant
const icons = { IconList };

// ==============================|| ORDERHISTORY MENU ITEMS ||============================== //

const orderHistory = {
  id: 'orderHistory',
  title: 'OrderHistory',
  type: 'group',
  children: [
    {
      id: 'orderHistory',
      title: 'OrderHistory',
      type: 'item',
      url: '/orderHistory',
      icon: icons.IconList,
      breadcrumbs: false
    }
  ]
};

export default orderHistory;
