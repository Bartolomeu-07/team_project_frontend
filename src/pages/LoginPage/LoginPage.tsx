import { FormikProvider, useFormik } from 'formik';
import React, { useState } from 'react';
import './LoginPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { validationSchema } from './validation-schema';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';
import { apiLogin } from '../../axiosConfig';
import { useAuthStore } from '../../zustand/useLogged';

type loginStatus = 'idle' | 'pending' | 'success' | 'error';

const BACKEND = import.meta.env.VITE_BACKEND_LOGIN_URL;

type Props = {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

export const LoginPage: React.FC<Props> = ({ setIsAuthenticated }) => {
  const [loginStatus, setLoginStatus] = useState<loginStatus>('idle');
  const { setLogged } = useAuthStore();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoginStatus('pending');

      try {
        const login = await apiLogin.post(`${BACKEND}/login`, {
          email: values.email,
          password: values.password,
        });
        console.log('login', login.data);
        console.table(values);
        setLogged(true);

        setLoginStatus('success');
        setIsAuthenticated(true);
        navigate('/matches');
        formik.resetForm();
      } catch (error) {
        setLoginStatus('error');
        console.error(error);
      }
    },
  });

  const isButtonDisabled =
    !formik.dirty || !formik.isValid || formik.isSubmitting;

  return (
    <FormikProvider value={formik}>
      <div className="login-container">
        <form onSubmit={formik.handleSubmit} className="login-form">
          <h2 className="login-form__heading">Log In</h2>
          {loginStatus === 'success' && (
            <p className="registration-form__success-message">
              You have successfully logged in!
            </p>
          )}
          {loginStatus === 'error' && (
            <p className="registration-form__error-message">
              Something went wrong. Please try again.
            </p>
          )}

          <div className="login-form__input-group">
            <InputField
              label="Email:"
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              aria-disabled={formik.isSubmitting}
            />

            <InputField
              label="Password:"
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              aria-disabled={formik.isSubmitting}
            />
          </div>

          <Button
            type="submit"
            disabled={isButtonDisabled}
            aria-disabled={isButtonDisabled}
            tabIndex={isButtonDisabled ? -1 : 0}
            title={
              isButtonDisabled
                ? 'Fill out all required fields first.'
                : undefined
            }
          >
            {loginStatus === 'pending' ? 'Loging in...' : 'Log In'}
          </Button>
        </form>
        <div className="login-form__register">
          <span>Dont have an account? </span>
          <Link to="/register" className="login-form__register-link">
            Sign up here
          </Link>
        </div>
      </div>
    </FormikProvider>
  );
};
