"use client";

import { Button, DatePicker, Form, FormProps, Input, Select } from "antd";

interface FormValues {
  dateOfBirth: string;
  gender: string;
  address: string;
  id: string;
}

const LoanPersonalInformation = ({
  handleStepChange,
}: {
  handleStepChange: (step: number) => void;
}) => {
  const [form] = Form.useForm<FormValues>();

  const onFinish: FormProps<FormValues>["onFinish"] = (values) => {
    console.log("Form values:", values);
    handleStepChange(2);
  };

  return (
    <div className="space-y-8">
      <h4 className="text-darklight text-xl">Personal information</h4>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        className="max-w-xl"
        onFinish={onFinish}
      >
        <Form.Item
          name="dateOfBirth"
          label={<span className="text-darklight">Date of Birth</span>}
          rules={[
            { required: true, message: "Please select your date of birth" },
          ]}
        >
          <DatePicker className="h-12 w-full bg-transparent" />
        </Form.Item>
        <Form.Item
          name="address"
          label={<span className="text-darklight">Address</span>}
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <Input
            placeholder="Enter Address"
            className="h-12 w-full bg-transparent"
          />
        </Form.Item>
        <Form.Item
          name="gender"
          label={<span className="text-darklight">Gender</span>}
          rules={[{ required: true, message: "Please select gender" }]}
        >
          <Select
            placeholder="Select Gender"
            className="antd-select-custom h-12 w-full"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="id"
          label={
            <span className="text-darklight">Nation ID or BVN Number</span>
          }
          rules={[{ required: true, message: "Please enter id or bvn" }]}
        >
          <Input
            placeholder="Enter ID/BVN"
            className="h-12 w-full bg-transparent"
          />
        </Form.Item>
        <Button htmlType="submit" className="w-44 text-base" size="large" type="primary">
          Continue
        </Button>
      </Form>
    </div>
  );
};

export default LoanPersonalInformation;
