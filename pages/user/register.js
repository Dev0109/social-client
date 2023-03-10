import React, { useEffect, useContext } from 'react';

import useRouter from 'next/router';
import RegisterForm from '../../components/RegisterForm';
import { UserContext } from '../../context/user';

function Register() {
  const { user, checkLogin } = useContext(UserContext);
  useEffect(async () => {
    const res = await checkLogin();
    if (res?.status === 200) {
    }
  }, []);
  if (user) {
    useRouter.push('/user');
  }

  return <RegisterForm />;
}

export default Register;
