import { FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import './LoginPage.scss';
import { Link } from 'react-router-dom';

import { validationSchema } from './validation-schema';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';

type loginStatus = 'idle' | 'pending' | 'success' | 'error';

export const LoginPage = () => {
  const [loginStatus, setLoginStatus] = useState<loginStatus>('idle');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoginStatus('pending');

      try {
        // Simulating an API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.table(values);

        setLoginStatus('success');
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
