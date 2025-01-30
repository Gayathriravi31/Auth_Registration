import React from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const CustomTextField = styled((props) => <TextField {...props} />)(
  ({ theme, height = '45px', borderRadius = '7px' }) => ({
    '& .MuiOutlinedInput-root': {
      height,
      borderRadius, 
      '& fieldset': {
        borderRadius, 
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '10px',
    },
    '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
      color: theme.palette.text.secondary,
      opacity: '0.8',
    },
    '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
      color: theme.palette.text.secondary,
      opacity: '1',
    },
    '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[200],
    },
  })
);

export default CustomTextField;
