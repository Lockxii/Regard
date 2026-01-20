'use client';

import { Button } from '@/components/ui/Button';
import { Trash2 } from 'lucide-react';
import { useTransition } from 'react';

interface DeleteButtonProps {
  id: string;
  onDelete: (id: string) => Promise<any>;
}

export function DeleteButton({ id, onDelete }: DeleteButtonProps) {
  const [isPending, startTransition] = useTransition();

  return (
    <Button
      variant="ghost"
      size="sm"
      className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 h-auto"
      disabled={isPending}
      onClick={() => {
        if (confirm('Êtes-vous sûr de vouloir supprimer cet élément ?')) {
          startTransition(async () => {
            await onDelete(id);
          });
        }
      }}
    >
      <Trash2 size={16} />
    </Button>
  );
}
