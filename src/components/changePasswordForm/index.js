import React, { useState} from "react";
import { changePassword } from '../../api/tmdb-api';
import { Card,  Form, Input, Button, Error, Confirmation} from "../../components/loginComponents";

function ChangePassword(name) {
  const [isError, setIsError] = useState(false);
  const [isConfirmation, setIsConfirmation] =  useState(false);
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  function register() {
    if (password !== passwordAgain) {
        setIsConfirmation(false);
        setIsError(true);
    }else{
      changePassword( name, password)
      setIsError(false);
      setIsConfirmation(true);
  }}


  return (
    <Card>
      <Form>
        <Input type="password"
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }} placeholder="password" />
        <Input type="password"
          value={passwordAgain}
          onChange={e => {
            setPasswordAgain(e.target.value);
          }} placeholder="password again" />
        <Button onClick={register}>Change Password</Button>
      </Form>
      { isError &&<Error>The passwords do not match!</Error> }
      { isConfirmation &&<Confirmation>Password has been updated!</Confirmation> }
    </Card>
  );
}

export default ChangePassword;