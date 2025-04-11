"use client";

import Container from "@/components/layout/Container";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import ReactDOM from "react-dom";

export default function Page() {
  const onFinish = () => {};

  ReactDOM.preload("/images/login.webp", { as: "image" });

  return (
    <main className="gap-y-8 lg:grid lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex h-screen items-center justify-center max-lg:hidden lg:order-2">
        <Image
          src="/images/login.webp"
          alt="Login"
          height={300}
          width={500}
          className="h-full w-full max-w-full object-cover"
        />
      </div>
      <Container className="flex items-center justify-center max-lg:min-h-screen lg:order-1">
        <div className="w-full space-y-4 lg:max-w-md">
          <Form
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
            className="w-full"
          >
            <Form.Item
              name="email"
              label={<span className="font-medium">Email</span>}
            >
              <Input
                type="email"
                placeholder="Enter Email"
                className="h-12 w-full"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label={<span className="font-medium">Password</span>}
            >
              <Input.Password
                placeholder="Enter Password"
                className="h-12 w-full"
              />
            </Form.Item>
            <Button type="primary" size="large" className="text-base" block>
              Login
            </Button>
          </Form>
          <p className="text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-primary">
              Sign up
            </Link>
          </p>
        </div>
      </Container>
    </main>
  );
}
