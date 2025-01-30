import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

import CustomTextField from '../Common/CustomTextField';
import CustomFormLabel from '../Common/CustomFormLabel';
import { Stack } from '@mui/system';
import AuthSocialButtons from '../Common/AuthSocialButtons';

const AuthRegister = ({ title, subtitle, subtext }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (

    <>
      {title ? (
        <Typography fontWeight="700" variant="h3" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}
      <AuthSocialButtons title="Sign up with" />

      <Box mt={3} ml={3} mr={3}>
        <Divider>
          <Typography
            component="span"
            color="textSecondary"
            variant="h6"
            fontWeight="400"
            position="relative"
            px={2}
          >
            or sign up with
          </Typography>
        </Divider>
      </Box>

      <Box sx={{ width: "100%", alignSelf: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ width: "90%", alignSelf: "center" }}>
          <Stack mb={3}>
            <CustomFormLabel sx={{ mt: 2 }} htmlFor="name">Name</CustomFormLabel>
            <CustomTextField
              height={45}
              id="name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => {setName(e.target.value);}}
            />
            <CustomFormLabel htmlFor="email">Email Adddress</CustomFormLabel>
            <CustomTextField
              height={45}
              id="email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomFormLabel htmlFor="password">Password</CustomFormLabel>
            <CustomTextField
              id="password"
              type="password"
              variant="outlined"
              fullWidth
              height={45}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Stack>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            sx={{
            borderRadius: '7px',
          }}
            component={Link}
            to="/side"
          >
            Sign Up
          </Button>
          {subtitle}

        </Box>

      </Box>
    </>
  );
}

export default AuthRegister;
