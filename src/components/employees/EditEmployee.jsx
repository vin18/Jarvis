import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Box, Image, KeyRound, Loader2 } from 'lucide-react';

import { useEmployeeEdit } from '../../features/employees/useEmployeeEdit';

const formSchema = z.object({
  name: z.string().nonempty('Name is required'),
  designation: z.string().nonempty('Designation is required'),
  experience: z.string().nonempty('Experience is required'),
});

export default function EditEmployee({ employee, employeeId, onCloseModal }) {
  const { isEditing, editEmployee } = useEmployeeEdit();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: employee.name,
      designation: employee.designation,
      experience: employee.experience,
    },
  });

  const onSubmit = (employee) => {
    editEmployee(
      { employee, employeeId },
      {
        onSuccess: (data) => {
          form.reset();
          onCloseModal();
        },
      }
    );
  };

  return (
    <Dialog open={Boolean(employeeId)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to employees profile here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-normal">Employee Name</FormLabel>
                    <FormControl>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Sherlock Holmes"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="designation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-normal">
                      Employee Designation
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="designation"
                        type="text"
                        placeholder="Web Developer"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-normal">
                      Employee Experience
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="experience"
                        type="text"
                        placeholder="5"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit" disabled={isEditing} type="submit">
                  {isEditing ? 'Saving..' : 'Save'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
