"use client";
import { useSWRConfig } from "swr";

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

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

import { Input } from "@/components/ui/input";
import { Login as ConfirmProps, User } from "@/entities/user/type";

import { api } from "@/lib/api";
import useBack from "@/hooks/use-back";
import { Loader2Icon } from "lucide-react";

export function Login() {
  const login = useSWRConfig();

  const formSchema = z.object({
    email: z.string().email({ message: "Некорректная почта" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await login.mutate("/auth/login/", api.post("/auth/login/", values));
    } catch (error: any) {
      form.reset();
      form.setError("email", { message: error.response.data.detail });
    }
  }
  return form.formState.isSubmitSuccessful ? (
    <Confirm email={form.getValues("email")} />
  ) : (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && (
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          )}
          Отправить код
        </Button>
      </form>
    </Form>
  );
}

function Confirm(props: ConfirmProps) {
  const confirm = useSWRConfig();
  const subscribe = useSWRConfig();

  const back = useBack();

  const formSchema = z.object({
    otp: z.string().min(6, {
      message: "Код не может быть меньше 6 цифр",
    }),
    email: z.string().email({ message: "Некорректная почта" }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      otp: "",
      email: props.email,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const user = await confirm.mutate(
        "/users/me",
        api.post<User>("/auth/confirm/", values)
      );
      if (user?.data) {
        subscribe.mutate(
          `/users/${user.data.oid}/subscribe/`,
          api.patch(`/users/${user.data.oid}/subscribe/`)
        );
        localStorage.setItem("user_id", user.data.oid);
        back();
      }
    } catch (error: any) {
      form.reset();
      form.setError("otp", { message: 'Неверный код' });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                  <InputOTPSeparator />
                  <InputOTPGroup>
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting && (
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          )}
          Авторизоваться
        </Button>
      </form>
    </Form>
  );
}
