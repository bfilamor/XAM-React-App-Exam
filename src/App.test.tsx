import React from 'react';
import { getByLabelText, render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { LoginForm } from './components/LoginForm';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */
describe(LoginForm, () => {
  it("login form has username label", () => {
      const { } = render(<LoginForm />);
      const userNameLabel  = screen.getByLabelText('User name')
      expect(userNameLabel).toEqual("User name")
  })
})

describe(LoginForm, () => {
  it("login form has branch id label", () => {
      const { } = render(<LoginForm />);
      const branchIdLabel  = screen.getByLabelText('Branch id')
      expect(branchIdLabel).toEqual("Branch id")
  })
})

describe(LoginForm, () => {
  it("login form has password label", () => {
      const { } = render(<LoginForm />);
      const passwordLabel  = screen.getByLabelText('Password')
      expect(passwordLabel).toEqual("Password")
  })
})

describe(LoginForm, () => {
  it("test if login works", () => {
    const setState = jest.fn();
      const wrapper = render(<LoginForm /> );
      const passwordInput= 'pa55w0rd002';
      const userNameInput = 'testuser02';
      const branchIdInput = 10002;
      const brandIdLabel  = screen.getByTestId('branchId')
      const userNameLabel  = screen.getByTestId('username')
      const passwordLabel  = screen.getByTestId('password')
      const submitButton = screen.getByTestId('submit');
      const swal = screen.getAllByRole

      fireEvent.change(passwordLabel, {target: {value:passwordInput}});
      fireEvent.change(userNameLabel, {target: {value:userNameInput}});
      fireEvent.change(brandIdLabel, {target: {value:branchIdInput}});

      fireEvent.click(submitButton);
      expect(wrapper.findByTestId("alert")).toBeTruthy();
  })
})