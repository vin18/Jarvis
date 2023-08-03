import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../../components/ui/alert-dialog';
import { Button } from '../../components/ui/button';

import { useDeleteEmployee } from '../../features/employees/useEmployeeDelete';

export default function DeleteEmployee({ employeeId }) {
  const { isDeleting, deleteEmployee } = useDeleteEmployee();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex items-center text-primary">Delete</button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete employee?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete employee
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <Button
            className={`${isDeleting && 'opacity-60'}`}
            onClick={() => deleteEmployee(employeeId)}
            variant="destructive"
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting..' : 'Delete'}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
