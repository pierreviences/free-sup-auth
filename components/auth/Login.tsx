"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AuthSubmitBtn from "./AuthSubmitBtn";
import { loginAction } from "@/actions/authActions";
import { useFormState } from "react-dom";
const initState = {
  status: 0,
  errors: {},
};
function Login() {
  const [state, formAction] = useFormState(loginAction, initState);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Welcome back to community.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <form action={formAction}>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Type your email here"
              name="email"
            />
            <span className="text-red-400">{state?.errors?.email}</span>
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Type your password here"
              name="password"
            />
            <span className="text-red-400">{state?.errors?.password}</span>
          </div>
          <AuthSubmitBtn />
        </form>
      </CardContent>
    </Card>
  );
}

export default Login;
