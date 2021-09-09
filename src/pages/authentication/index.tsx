import React from "react";
import { Switch,Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegisterForm from './RegisterForm';

const AuthenticationPage:React.FC<any> = ()=>{
  return (
    <div className="authentication-page bg-gradient-to-r from-green-200 to-green-500  min-h-screen">
      <div className="container mx-auto xl:px-44">
        <div className="div grid grid-cols-12">
          <div className="col-span-6"></div>
          <div className="col-span-6">
            <div className="bg-white h-screen py-12 px-20">
              <Switch>
                <Route exact={true} path="/authentication/login" component={LoginForm}/>
                <Route exact={true} path="/authentication/register" component={RegisterForm}/>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthenticationPage;