import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import 'bootstrap';

const validationSchema = yup.object({
  username: yup.string().required(),
  password: yup.string().required().min(6),
});

export default function Login() {
  const handleSubmitForm = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmitForm(values);
      formik.resetForm();
    },
  });

  const renderForm = () => (
    <form className="col-12 col-md-6 mt-3 mt-mb-0" onSubmit={formik.handleSubmit}>
      <h1 className="text-center mb-4">Войти</h1>
      <div className="mb-3 form-group form-floating">
        <input
          type="text"
          name="username"
          autoComplete="username"
          required={true}
          placeholder="Ваш ник"
          id="username"
          className="form-control"
          value={formik.values.username}
          onChange={formik.handleChange('username')}
        />
        {/* <label className="form-label" htmlFor="username">
          Ваш ник
        </label> */}
      </div>
      <div className="form-floating mb-4 form-group">
        <input
          type="password"
          name="password"
          required={true}
          placeholder="Пароль"
          id="password"
          className="form-control"
          autoComplete="current-password"
          value={formik.values.password}
          onChange={formik.handleChange('password')}
        />
        {/* <label class="form-label" for="password">
          Пароль
        </label> */}
      </div>
      <button type="submit" className="w-100 mb-3 btn btn-outline-primary">
        Войти
      </button>
    </form>
  );

  return (
    <div className="row justify-content-center align-content-center h-100">
      <div className="col-12 col-md-8 col-xxl-6">
        <div className="card shadow-sm">
          <div className="card-body row p-5">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <img src="https://picsum.photos/200" className="rounded-circle" />
            </div>
            {renderForm()}
          </div>
          <div className="card-footer p-4">
            <div className="text-center">
              <span>Нет аккаунта? </span>
              <Link to="/signup">Регистрация</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
