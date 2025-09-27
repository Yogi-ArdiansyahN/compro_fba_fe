import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { register } from "@/services/loginServices.js";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const registerSchema = z
  .object({
    name: z.string().min(4, { message: "Name min 4 characters" }),
    username: z.string().min(5, { message: "Username min 5 characters" }),
    email: z.string().email({ message: "Must format email" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Confirm password required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"], // error akan ditampilkan di confirmPassword
    message: "Passwords do not match",
  });

export function RegisterPage({ className, ...props }) {
  const [responseError, setResponseError] = useState();
  const [isResponseError, setIsResponseError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onRegister = async (data) => {
    let email = data.email;
    let password = data.password;
    setIsLoading(true);
    try {
      const response = await register({ email: email, password: password });
      console.log("Login success:", response.data);
    } catch (error) {
      if (error.response) {
        setResponseError(error.response.data.message);
      } else {
        setResponseError("Something went wrong");
      }
      setIsResponseError(true);
      // clear password
      form.reset({
        email: data.email,
        password: "",
      });
    }
    setIsLoading(false);
  };
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div
          className={cn("flex flex-col gap-6 justify-center w-100", className)}
          {...props}
        >
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 ">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onRegister)}
                  className="p-6 md:p-8"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Create an account</h1>
                      <p className="text-muted-foreground text-balance">
                        Enter your details below to get started
                      </p>
                    </div>
                    {isResponseError && (
                      <Alert variant="destructive">
                        <OctagonAlert />
                        <AlertDescription>{responseError}</AlertDescription>
                      </Alert>
                    )}
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="m@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid gap-3">
                      <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                              <Input
                                type="password"
                                placeholder="******"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                    <div className="text-center text-sm">
                      Don&apos;t have an account?{" "}
                      <a href="#" className="underline underline-offset-4">
                        Sign up
                      </a>
                    </div>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
            By clicking continue, you agree to our{" "}
            <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  );
}
