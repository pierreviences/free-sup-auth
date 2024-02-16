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
import { registerAction } from "@/actions/authActions";
const iniState = {
  status: 0,
  error: {},
};
function Register() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>
            Welcome back to the freelancers community.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <form action={registerAction}>
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Type your name here"
                name="name"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                placeholder="Type your username here"
                name="username"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Type your email here"
                name="email"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Type your password here"
                name="password"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="cpassword">Confirm Password</Label>
              <Input
                id="cpassword"
                type="cpassword"
                placeholder="Confirm Password"
                name="password_confirmation"
              />
            </div>
            <Button className="w-full mt-3">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Register;
