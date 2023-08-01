// assets
import { IconGauge } from '@tabler/icons';

// constant
const icons = { IconGauge };

// ==============================|| BOTS MENU ITEMS ||============================== //

const bots = {
  id: 'bots',
  title: 'Bots',
  type: 'group',
  children: [
    {
      id: 'bots',
      title: 'Bots',
      type: 'item',
      url: '/bots',
      icon: icons.IconGauge,
      breadcrumbs: false
    }
  ]
};

export default bots;
