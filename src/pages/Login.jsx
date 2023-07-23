import React from 'react';
import { cn } from '../lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Image, KeyRound } from 'lucide-react';
import Logo from '../../public/vite.svg';

export default function Login() {
  const onSubmit = () => {};

  return (
    <div className="min-h-screen grid place-items-center">
      <Card className="container max-w-md px-0">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl mb-1 flex justify-center items-center">
            <img className="w-8" src={Logo} /> <span>JARVIS</span>
          </CardTitle>
          <CardDescription>
            Enter your email to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button className="cursor-not-allowed" disabled variant="outline">
              Github
            </Button>
            <Button disabled variant="outline">
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="vinitraut@example.com"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-3">
          <Button className="w-full">
            <KeyRound className="mr-2 h-4 w-4" />
            Sign In as Guest user
          </Button>

          <Button className="w-full">
            <KeyRound className="mr-2 h-4 w-4" />
            Sign In to your account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
