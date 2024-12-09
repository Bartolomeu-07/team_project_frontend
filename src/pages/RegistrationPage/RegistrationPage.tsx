import { FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { validationSchema } from './validation-schema';
import './RegistrationPage.scss';
import { Button } from '../../components/Button';
import { InputField } from '../../components/InputField';

type SubmissionStatus = 'idle' | 'pending' | 'success' | 'error';

export const RegistrationPage = () => {
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>('idle');

  const formik = useFormik({
    initialValues: {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      setSubmissionStatus('pending');

      try {
        // Simulating an API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.table(values);

        setSubmissionStatus('success');
        formik.resetForm();
      } catch (error) {
        setSubmissionStatus('error');
        console.error(error);
      }
    },
  });

  const isButtonDisabled =
    !formik.dirty || !formik.isValid || formik.isSubmitting;

  return (
    <FormikProvider value={formik}>
      <div className="registration-container">
        <form onSubmit={formik.handleSubmit} className="registration-form">
          <h2 className="registration-form__heading">Sign Up</h2>
          {submissionStatus === 'success' && (
            <p className="registration-form__success-message">
              Registration successful! You can now{' '}
              <Link to="/login" className="registration-form__success-link">
                log in
              </Link>
              .
            </p>
          )}
          {submissionStatus === 'error' && (
            <p className="registration-form__error-message">
              Something went wrong. Please try again.
            </p>
          )}
          <div className="registration-form__input-group">
            <InputField
              label="Username:"
              type="text"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              aria-disabled={formik.isSubmitting}
            />

            <InputField
              label="First Name:"
              type="text"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              aria-disabled={formik.isSubmitting}
            />

            <InputField
              label="Last Name:"
              type="text"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              disabled={formik.isSubmitting}
              aria-disabled={formik.isSubmitting}
            />

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
            <InputField
              label="Confirm Password:"
              type="password"
              name="confirmPassword"
              value={formik.values.confirmPassword}
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
            {submissionStatus === 'pending' ? 'Signing up...' : 'Signup'}
          </Button>
        </form>
        <div className="registration-form__login">
          <span>Already have an account? </span>
          <Link to="/login" className="registration-form__login-link">
            Log in here
          </Link>
        </div>
      </div>
    </FormikProvider>
  );
};
