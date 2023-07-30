import React from 'react';
import { cn } from '../lib/utils';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Box, Image, KeyRound, Loader2 } from 'lucide-react';

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
import Logo from '../../public/vite.svg';
import { useSignup } from '../features/authentication/useSignup';

const formSchema = z.object({
  fullName: z.string().nonempty('Fullname is required'),
  email: z
    .string()
    .nonempty('Email is required')
    .email('This is not a valid email'),
  password: z
    .string()
    .nonempty('Password is required')
    .min(8, { message: 'Password should be atleast 8 characters' }),
});

export default function Users() {
  const { isLoading, signup } = useSignup();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (values) => {
    signup({ ...values }, { onSettled: form.reset });
  };

  // TODO:
  // 1. Add icons inside the input box
  // 2. Show or hide password
  // 3. Verify signup on mail

  return (
    <div className="min-h-screen flex justify-center items-center w-full">
      <Card className="container shadow max-w-md px-0">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl mb-1 flex justify-center items-center">
            Create a new user
          </CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="grid gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-normal">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        id="fullName"
                        type="text"
                        name="fullName"
                        placeholder="Vinit Raut"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                disabled={isLoading}
                type="submit"
                className={`w-full ${isLoading && 'opacity-60'}`}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? 'Please wait...' : 'Create account'}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
