"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { backendBaseUrl } from "@/constant";
import { registerSchema } from "@/schemas/input-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    startTransition(async () => {
      try {
        const response = await fetch(backendBaseUrl + "/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        const { success, error } = await response.json();
        if (success) {
          toast.success(success);
        } else {
          toast.error(error);
        }
      } catch (error: any) {
        toast.error(error);
        console.error(error);
      } finally {
        form.reset();
      }
    });
  };

  return (
    <div className="flex flex-col gap-3 items-center justify-center sm:h-screen sm:bg-[#5865F2]">
      <div
        className={`flex flex-col gap-3 items-center justify-center px-2 w-full sm:max-w-lg rounded-lg sm:bg-[#313338] py-12 sm:py-8 ${
          isPending ? "pointer-events-none opacity-80" : "pointer-events-auto"
        } `}
      >
        <h1 className="font-bold text-2xl text-white">Create an account</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col w-full gap-3 items-center max-w-md"
          >
            <div className="space-y-3 w-full">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-300">
                      username
                      <span className="text-red-500"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        type="text"
                        placeholder="Your name"
                        className="mt-1.5 rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0 bg-primary-input border-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-300">
                      Email
                      <span className="text-red-500"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        type="email"
                        placeholder="manish@gmail.com"
                        className="mt-1.5 rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0 bg-primary-input border-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-gray-300">
                      Password
                      <span className="text-red-500"> *</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        type="password"
                        placeholder="********"
                        className="mt-1.5 rounded-sm focus-visible:ring-0 focus-visible:ring-offset-0 bg-primary-input border-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400 text-xs" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isPending}
                className="bg-gray-200 w-full font-semibold text-black"
              >
                Register
              </Button>
            </div>
          </form>
        </Form>
        <Link href={"/login"}>
          <div className="text-blue-500 mt-3 font-medium text-sm flex gap-1 self-start">
            Already have an account ?
            <span className="text-blue-500">Login</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
