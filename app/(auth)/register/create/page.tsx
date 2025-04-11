"use client";

import Container from "@/components/layout/Container";
import { Button, Form, Input, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ReactDOM from "react-dom";

type AccountType = "farmer" | "investor" | "agent" | undefined;

export default function Page() {
  const [form] = Form.useForm();
  const onFinish = () => {};

  ReactDOM.preload("/images/login.webp", { as: "image" });

  const searchParams = useSearchParams();

  useEffect(() => {
    const type = searchParams.get("type") as AccountType;
    form.setFieldValue(
      "accountType",
      type === "farmer"
        ? "farmer"
        : type === "agent"
          ? "agent"
          : type === "investor"
            ? "investor"
            : undefined,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <main className="gap-y-8 lg:grid lg:grid-cols-[1.15fr_0.85fr]">
      <div className="flex items-center justify-center max-lg:hidden lg:order-2">
        <Image
          src="/images/login.webp"
          alt="Login"
          height={300}
          width={500}
          className="h-full w-full max-w-full object-cover"
        />
      </div>
      <Container className="flex items-center justify-center max-lg:min-h-screen lg:order-1 py-8">
        <div className="w-full space-y-4 lg:max-w-md">
          <Form
            onFinish={onFinish}
            form={form}
            autoComplete="off"
            layout="vertical"
            className="w-full"
          >
            <Form.Item
              name="firstName"
              label={<span className="font-medium">First Name</span>}
            >
              <Input
                type="text"
                placeholder="Enter First Name"
                className="h-12 w-full"
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              label={<span className="font-medium">Last Name</span>}
            >
              <Input
                type="text"
                placeholder="Enter Last Name"
                className="h-12 w-full"
              />
            </Form.Item>
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
              name="phoneNumber"
              label={<span className="font-medium">Phone Number</span>}
            >
              <Input
                type="tel"
                placeholder="Enter Phone Number"
                className="h-12 w-full"
              />
            </Form.Item>
            <Form.Item
              name="accountType"
              label={<span className="font-medium">Account Type</span>}
            >
              <Select
                className="h-12 w-full"
                options={[
                  { value: "farmer", label: "Farmer" },
                  { value: "investor", label: "Investor" },
                  { value: "agent", label: "Agent" },
                ]}
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
            <Form.Item
              name="confirmPassword"
              label={<span className="font-medium">Confirm Password</span>}
            >
              <Input.Password
                placeholder="Re-enter Password"
                className="h-12 w-full"
              />
            </Form.Item>
            <Button type="primary" size="large" className="text-base" block>
              Login
            </Button>
          </Form>
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary">
              Login
            </Link>
          </p>
        </div>
      </Container>
    </main>
  );
}
