import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import imagePlaceholder from "./assets/images/placeholder.svg";
import { useForm } from "react-hook-form";
import { login } from "@/services/loginServices.js";
import { OctagonAlert } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
// import Cookies from "js-cookie";
import { Link } from "react-router";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const loginSchema = z.object({
  email: z.string().email({ message: "Must format email" }),
  password: z.string().min(6, { message: "Password min 6 char" }),
});

// const setCookie = (name, value, days) => {
//   Cookies.set(name, value, { expires: days, path: "/", secure: true });
// };

// const getCookie = (name) => {
//   let cookie = Cookies.get(name);
//   return cookie;
// };

export function LoginPage({ className, ...props }) {
  const [responseError, setResponseError] = useState();
  const [isResponseError, setIsResponseError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLogin = async (data) => {
    let email = data.email;
    let password = data.password;
    setIsLoading(true);
    try {
      const response = await login({ email: email, password: password });
      // const responseJson = response.data;

      // const token = responseJson.accessToken;
      // setCookie("token", token, 1);
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
      <div className="w-full max-w-sm md:max-w-xl">
        <div className={cn("flex flex-col gap-6", className)} {...props}>
          <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onLogin)}
                  className="p-6 md:p-8"
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Welcome back</h1>
                      <p className="text-muted-foreground text-balance">
                        Login to your account
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
                                autoComplete="off"
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
                      <Link
                        to="/register"
                        className="underline underline-offset-4"
                      >
                        Sign up
                      </Link>
                    </div>
                  </div>
                </form>
              </Form>
              <div className="bg-muted relative hidden md:block">
                <img
                  src={imagePlaceholder}
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </div>
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
