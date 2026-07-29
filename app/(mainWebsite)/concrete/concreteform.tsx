'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import QuoteFormSmall from '@/components/shared/quote-form/quote-form-small';

export default function ConcreteForm() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Get A Quote</DialogTitle>
          </DialogHeader>

          <QuoteFormSmall leadSourceName="Website Get a Quote Form Popup" />
        </DialogContent>
      </Dialog>

      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="bg-accent inline-flex min-h-12 cursor-pointer items-center justify-center rounded-4xl px-7 py-3 font-bold text-white transition hover:opacity-90"
      >
        Get a Quote
      </Button>
    </>
  );
}
