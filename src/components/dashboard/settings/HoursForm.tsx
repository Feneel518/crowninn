"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  hoursEditorSchema,
  type HoursEditorInput,
} from "@/lib/validators/settingsValidator";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { updateHoursAction } from "@/lib/actions/dashboard/settings/updateHorsAction";

export function HoursForm({
  defaultValues,
}: {
  defaultValues: HoursEditorInput;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const form = useForm<HoursEditorInput>({
    resolver: zodResolver(hoursEditorSchema),
    defaultValues,
  });

  const onSubmit = (values: HoursEditorInput) => {
    startTransition(async () => {
      const res = await updateHoursAction(values);
      if (!res.ok) {
        toast.error("Something went wrong, updating the venue form.");
      }

      toast.success("Your settings were updated.");
      router.refresh();
    });
  };

  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle>Trading Hours</CardTitle>
        <CardDescription>
          These show on your website for easy planning.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            <Row
              label="Restaurant"
              name="bistroLunch"
              placeholder="10:00 - 21:00"
              control={form.control}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Eg. Public holidays hours may vary…"
                      className="min-h-[90px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button type="submit" disabled={pending}>
                {pending ? "Saving..." : "Save changes"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

function Row({
  label,
  name,
  placeholder,
  control,
}: {
  label: string;
  name: "bar" | "bistroLunch" | "bistroDinner" | "pizza";
  placeholder: string;
  control: any;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }: any) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
