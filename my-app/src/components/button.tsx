import * as React from 'react';
import { Button as BaseButton } from '@mui/base/Button';
import { styled } from '@mui/system';
import Stack from '@mui/material/Stack';
import { useTranslation } from 'react-i18next';

export default function ButtonSimple() {
  const { i18n, t } = useTranslation();
  return (
    // <Stack spacing={2} direction="row">
      <Button>{t("resume")}</Button>
  );
}

const blue = {
  200: '#99CCFF',
  300: '#66B2FF',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0066CC',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Button = styled(BaseButton)(
  ({ theme }) => `
  align-self: center;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  background-color: '#007FFF';
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  transition: all 200ms ease;
  cursor: pointer;
  border: 1px solid '#007FFF';
  
  &:hover {
    transform: scale(1.1);
    background-color: '#0072E5';
  }

  &:active {
    background-color: '#0066CC';
    box-shadow: none;
    transform: scale(0.99);
  }

  &:focus-visible {
    box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
    outline: none;
  }

  &.base--disabled {
    background-color: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[700]};
    border: 0;
    cursor: default;
    box-shadow: none;
    transform: scale(1);
  }
`,
);
