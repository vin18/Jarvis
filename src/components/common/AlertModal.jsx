import { useRef } from 'react';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';

export default function AlertModal({
  open,
  onConfirm,
  onClose,
  confirmationLabel,
  confirmationVariant,
  title,
  description,
  Icon,
  isLoading,
  isLoadingLabel,
}) {
  const cancelButtonRef = useRef(null);

  return (
    <AlertDialog open={open}>
      <AlertDialogContent onOpenAutoFocus={cancelButtonRef}>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose} ref={cancelButtonRef}>
            Cancel
          </AlertDialogCancel>
          <Button
            className={`${isLoading && 'opacity-60'}`}
            onClick={onConfirm}
            variant={confirmationVariant}
            disabled={isLoading}
          >
            {isLoading ? isLoadingLabel : confirmationLabel}
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
