import React from 'react';
import { cn } from '../lib/utils';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Image, KeyRound } from 'lucide-react';
import Logo from '../../public/vite.svg';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  email: z
    .string()
    .nonempty('Email is required')
    .email('This is not a valid email'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, { message: 'Password should be atleast 8 characters' }),
});

export default function Login() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

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
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="grid gap-4">
              <div className="grid grid-cols-2 gap-6">
                <Button
                  className="cursor-not-allowed"
                  disabled
                  variant="outline"
                >
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

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-normal">Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="vinitraut@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-normal">Password</FormLabel>
                    <FormControl>
                      <Input id="password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex flex-col space-y-3">
              <Button
                onClick={(event) => {
                  event.preventDefailt();
                  onSubmit({
                    email: 'test@example.com',
                    password: 'Test@1234',
                  });
                }}
                className="w-full"
              >
                <KeyRound className="mr-2 h-4 w-4" />
                Sign In as Guest user
              </Button>

              <Button type="submit" className="w-full">
                <KeyRound className="mr-2 h-4 w-4" />
                Sign In to your account
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
