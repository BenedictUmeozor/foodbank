"use client";

import { Avatar, Button, TableProps, Tag } from "antd";
import {
  AlertCircleIcon,
  CalendarIcon,
  ChevronRightIcon,
  CloudDownloadIcon,
} from "lucide-react";
import { Table } from "antd";
import data from "./data.json";
import clsx from "clsx";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import Link from "next/link";

const chartData = [
  { name: "Total loan amount", value: 2000, color: "#DBEFDC" },
  { name: "Total loan paid", value: 1000, color: "#4CAF50" },
];

export default function Page() {
  const columns: TableProps<(typeof data)[0]>["columns"] = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      className: "text-gray-700",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      className: "text-gray-700",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      className: "text-gray-700",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => (
        <Tag
          className={clsx(
            status.toLowerCase() === "processing"
              ? "bg-[#F6F2DA]"
              : status.toLowerCase() === "declined"
                ? "bg-[#F6DADA]"
                : "bg-[#DBEFDC]",
            status.toLowerCase() === "processing"
              ? "text-[#D4BF48]"
              : status.toLowerCase() === "declined"
                ? "text-[#D44848]"
                : `text-[#4CAF50]`,
          )}
        >
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-xl">Welcome Cy</h1>
      <div className="grid grid-cols-[1fr_300px] gap-8">
        <section className="space-y-8">
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-3 rounded border-gray-200 bg-white p-3 shadow">
              <div className="flex items-center gap-2">
                <span className="text-xs">Total loan collected</span>
                <AlertCircleIcon className="h-3 w-3 text-green-500" />
              </div>
              <p className="text-2xl font-bold">₦2,000,000</p>
            </div>

            <div className="space-y-3 rounded border-gray-200 bg-white p-3 shadow">
              <div className="flex items-center gap-2">
                <span className="text-xs">Total amount to pay</span>
                <AlertCircleIcon className="h-3 w-3 text-green-500" />
              </div>
              <p className="text-2xl font-bold">₦2,200,000</p>
              <div className="relative h-1 rounded bg-gray-200">
                <div className="bg-primary absolute top-0 left-0 h-full w-1/2" />
              </div>
              <p className="text-xs">
                Amount paid: <span className="font-bold"></span>₦1,000,000
              </p>
            </div>

            <div className="space-y-3 rounded border-gray-200 bg-white p-3 shadow">
              <div className="flex items-center gap-2">
                <span className="text-xs">Upcoming repayment</span>
                <CalendarIcon className="h-3 w-3 text-green-500" />
              </div>
              <p className="text-2xl font-bold">₦50,000</p>
              <p className="text-xs">Due date 7th March 2025</p>
            </div>

            <div className="space-y-3 rounded border-gray-200 bg-white p-3 shadow">
              <div className="flex items-center gap-2">
                <span className="text-xs">Outstanding payments</span>
                <AlertCircleIcon className="h-3 w-3 text-red-500" />
              </div>
              <p className="text-2xl font-bold">₦20,000</p>
            </div>

            <div className="space-y-3 rounded border-gray-200 bg-white p-3 shadow">
              <div className="flex items-center gap-2">
                <span className="text-xs">New application awaiting review</span>
              </div>
              <p className="text-2xl font-bold">₦1,000,000</p>
              <p className="text-xs">
                Total amount <span className="font-bold">₦1,000,000</span>
              </p>
            </div>

            <div className="space-y-3 rounded border-gray-200 bg-white p-3 shadow">
              <div className="flex items-center gap-2">
                <span className="text-xs">New application awaiting review</span>
              </div>
              <p className="text-2xl font-bold">₦1,000,000</p>
              <p className="text-xs">
                Total amount <span className="font-bold">₦1,000,000</span>
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <header className="flex items-center justify-between">
              <h3 className="text-lg text-gray-700">Loan Summary</h3>
              <Button
                type="text"
                size="large"
                className="text-lg text-gray-700"
                iconPosition="end"
                icon={<CloudDownloadIcon className="text-primary h-5 w-5" />}
              >
                Download Statement
              </Button>
            </header>
            <Table
              dataSource={data}
              columns={columns}
              rowKey={(record) => record.id}
              components={{
                header: {
                  cell: (props) => {
                    return <th {...props} className="text-gray-500" />;
                  },
                },
              }}
            />
          </div>
        </section>

        <aside className="text-darklight space-y-8">
          <div className="space-y-4 rounded border-gray-200 bg-white p-3 shadow">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-darklight text-xl font-medium">Messages</p>
                <span className="text-xs">18 new chats</span>
              </div>
              <Button
                type="text"
                icon={<ChevronRightIcon className="text-primary h-4 w-4" />}
                iconPosition="end"
                size="small"
                className="text-primary"
              >
                View all
              </Button>
            </div>
            <div className="flex items-center gap-1">
              <Avatar src="/images/avatar.png" className="cursor-pointer" />
              <Avatar src="/images/avatar.png" className="cursor-pointer" />
              <Avatar src="/images/avatar.png" className="cursor-pointer" />
            </div>
          </div>

          <div className="space-y-4 rounded border-gray-200 bg-white p-3 shadow">
            <h6 className="text-darklight text-center text-xl font-medium">
              Loan Analysis
            </h6>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    dataKey="value"
                    startAngle={90}
                    endAngle={450}
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke="none"
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-0.5 text-xs">
                  <div className="h-2 w-2 bg-[#DBEFDC]" />
                  <span className="text-darklight text-xs">
                    Total loan amount
                  </span>
                </div>
                <span className="font-bold">₦2,000,000</span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-0.5 text-xs">
                  <div className="h-2 w-2 bg-[#4CAF50]" />
                  <span className="text-darklight text-xs">
                    Total loan paid
                  </span>
                </div>
                <span className="font-bold">₦1,000,000</span>
              </div>
            </div>
          </div>
          <div className="space-y-4 rounded border-gray-200 bg-white p-6 shadow">
            <h4 className="text-xl font-medium">Hi, Cy</h4>
            <p className="w-56 text-sm">
              Need financial help for your farming business?
            </p>
            <Link href="/farmer/loans/apply">
              <Button size="large" type="primary" className="w-44 text-base">
                Apply for a loan
              </Button>
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
