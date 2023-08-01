// assets
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import { IconLayout } from '@tabler/icons';
import { SvgIcon } from '@mui/material';

// constant
const icons = {
  AutoAwesomeMosaicOutlinedIcon,
  IconLayout,
  dashboard: (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
        <path
          d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H9V19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3ZM13 1H19C19.5304 1 20.0391 1.21071 20.4142 1.58579C20.7893 1.96086 21 2.46957 21 3V8H13V1ZM13 12H21V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H13V12Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  )
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon2: icons.AutoAwesomeMosaicOutlinedIcon,
      icon: icons.IconLayout,
      icon3: {
        type: {
          propTypes: {},
          muiName: 'SvgIcon'
        },
        key: null,
        ref: null,
        props: {
          children: {
            type: 'svg',
            key: null,
            ref: null,
            props: {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '22',
              height: '20',
              viewBox: '0 0 22 20',
              fill: 'none',
              children: [
                {
                  type: 'path',
                  key: null,
                  ref: null,
                  props: {
                    d: 'M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H9V19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3ZM13 1H19C19.5304 1 20.0391 1.21071 20.4142 1.58579C20.7893 1.96086 21 2.46957 21 3V8H13V1ZM13 12H21V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H13V12Z',
                    stroke: 'white',
                    strokeWidth: '2',
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round'
                  },
                  _owner: null,
                  _store: {}
                }
              ]
            },
            _owner: null,
            _store: {}
          }
        },
        _owner: null,
        _store: {}
      },
      breadcrumbs: false
    }
  ]
};

export default dashboard;
