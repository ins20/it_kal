"use client";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { api } from "@/lib/api";
import { useSWRConfig } from "swr";
import { Loader2Icon } from "lucide-react";

export function Subscribe() {
  const router = useRouter();

  const subscribe = useSWRConfig();
  const create = useSWRConfig();

  const formSchema = z.object({
    username: z
      .string()
      .max(10, { message: "Имя должно быть не более 10 символов" }),
    email: z.string().email({ message: "Некорректная почта" }),
    telegram: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      telegram: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user = await create.mutate(
        "/users/",
        api.post("/users/", {
          ...values,
          user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        })
      );
      if (user?.data) {
        await subscribe.mutate(
          `/users/${user.data.oid}/subscribe/`,
          api.patch(`/users/${user.data.oid}/subscribe/`, user.data)
        );
        router.push("/login");
      }
    } catch (error: any) {
      const message = error?.response?.data.detail;
      if (message === "User already exists") {
        form.setError("username", { message: "Пользователь уже существует" });
        form.setError("email", { message: "Пользователь уже существует" });
      }
      if (
        message ===
        "This email address does not exist NikitaIbragimov20@yandex.ru"
      ) {
        form.setError("email", {
          message: "Почта не существует",
        });
      }
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Псевдоним" {...field} />
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
              <FormControl>
                <Input placeholder="Почта" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="telegram"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Телеграм" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && (
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          )}
          Подписаться
        </Button>
      </form>
    </Form>
  );
}
