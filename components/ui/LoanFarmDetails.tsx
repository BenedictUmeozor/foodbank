"use client";

import { Button, Form, FormProps, Input, InputNumber, Select } from "antd";

interface FormValues {
  nameOfFarm: string;
  farmLocation: string;
  farmSize: string;
  farmType: string;
  farmTypeOther?: string; // Optional field for "Other" type
  mainCrop: string;
  yearsOfFarming: number;
}

const LoanFarmDetails = ({
  handleStepChange,
}: {
  handleStepChange: (step: number) => void;
}) => {
  const [form] = Form.useForm<FormValues>();

  const farmType = Form.useWatch("farmType", form);

  const onFinish: FormProps<FormValues>["onFinish"] = (values) => {
    console.log("Form values:", values);
    handleStepChange(3);
  };

  return (
    <div className="space-y-8">
      <h4 className="text-darklight text-xl">Farm Details</h4>
      <Form
        form={form}
        layout="vertical"
        autoComplete="off"
        className="max-w-xl"
        onFinish={onFinish}
        initialValues={{ yearsOfFarming: 0 }} // Optional: Set initial value
      >
        <Form.Item
          name="nameOfFarm"
          label={
            <span className="text-darklight">Name of Farm (if applicable)</span>
          }
        >
          <Input
            placeholder="Enter Farm Name"
            className="h-12 w-full bg-transparent"
          />
        </Form.Item>
        <Form.Item
          name="farmLocation"
          label={<span className="text-darklight">Farm Location</span>}
          rules={[
            { required: true, message: "Please enter the farm location" },
          ]}
        >
          <Input
            placeholder="Enter Farm Location"
            className="h-12 w-full bg-transparent"
          />
        </Form.Item>
        <Form.Item
          name="farmSize"
          label={
            <span className="text-darklight">
              Farm size (hectares or acres)
            </span>
          }
          rules={[{ required: true, message: "Please enter the farm size" }]}
        >
          <Input
            placeholder="Enter Farm Size"
            className="h-12 w-full bg-transparent"
          />
        </Form.Item>
        <Form.Item
          name="farmType"
          label={<span className="text-darklight">Farm Type</span>}
          rules={[{ required: true, message: "Please select farm type" }]}
        >
          <Select
            placeholder="Select Farm Type"
            className="antd-select-custom h-12 w-full"
            options={[
              { value: "crop", label: "Crop Farming" },
              { value: "livestock", label: "Livestock Farming" },
              { value: "mixed", label: "Mixed Farming" },
              { value: "aquaculture", label: "Aquaculture" },
              { value: "other", label: "Other" },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="farmTypeOther"
          label={<span className="text-darklight">If others, specify</span>}
          shouldUpdate={(prevValues, currentValues) =>
            prevValues !== currentValues
          }
          rules={[
            {
              required: farmType === "other",
              message: "Please specify the farm type",
            },
          ]}
        >
          <Input
            placeholder="Specify Other Farm Type"
            className="h-12 w-full bg-transparent"
            disabled={farmType !== "other"}
          />
        </Form.Item>
        <Form.Item
          name="mainCrop"
          label={<span className="text-darklight">Main Crop / Livestock</span>}
          rules={[
            {
              required: true,
              message: "Please enter the main crop or livestock",
            },
          ]}
        >
          <Input
            placeholder="e.g., Maize, Cattle"
            className="h-12 w-full bg-transparent"
          />
        </Form.Item>
        <Form.Item
          name="yearsOfFarming"
          label={<span className="text-darklight">Years of Farming</span>}
          rules={[
            {
              required: true,
              message: "Please enter years of farming experience",
            },
            {
              type: "number",
              min: 0,
              message: "Years must be a non-negative number",
            },
          ]}
        >
          <InputNumber
            placeholder="Enter Years"
            className="h-12 w-full bg-transparent"
          />
        </Form.Item>
        <Button
          htmlType="submit"
          className="w-44 text-base"
          size="large"
          type="primary"
        >
          Continue
        </Button>
      </Form>
    </div>
  );
};

export default LoanFarmDetails;
