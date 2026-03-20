import type { SxProps, Theme } from '@mui/material/styles';

export const pillTabs: SxProps<Theme> = {
  backgroundColor: '#f5f5f5',
  borderRadius: '9999px',
  padding: '4px',
  minHeight: 'unset',
  width: { xs: '100%', sm: 'auto' },
  display: 'flex',
  '& .MuiTabs-indicator': {
    display: 'none',
  },
};

export const pillTab: SxProps<Theme> = {
  minHeight: 'unset',
  minWidth: 0,
  flex: { xs: 1, sm: 'unset' },
  justifyContent: 'center',
  padding: '6px 20px',
  borderRadius: '9999px',
  textTransform: 'none',
  fontWeight: 'bold',
  color: '#272727',
  '&.Mui-selected': {
    backgroundColor: '#fff',
    color: '#00828A',
    boxShadow: '0 0 4px rgba(0,0,0,0.1)',
  },
};
