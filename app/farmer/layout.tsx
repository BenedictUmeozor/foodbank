import FarmerSidebar from "@/components/ui/FarmerSidebar";
import { Affix, Avatar, Button, Input } from "antd";
import { BellIcon, UserIcon } from "lucide-react";

export default function FarmerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4 bg-[#F5F3F3]">
      <Affix offsetTop={0}>
        <FarmerSidebar />
      </Affix>
      <div className="flex-grow">
        <div className="sticky top-0 container mx-auto flex items-center justify-between p-4 bg-[#F5F3F3] z-10">
          <div className="flex flex-1 items-center">
            <Input
              placeholder="Search here..."
              className="h-10 w-full max-w-md border-[#AFB6AF] bg-transparent"
            />
          </div>
          <div className="flex items-center gap-4">
            <Button
              type="text"
              shape="circle"
              size="large"
              icon={<BellIcon className="h-6 w-6 text-gray-500" />}
            />
            <Avatar size="large" icon={<UserIcon className="h-5 w-5" />} />
          </div>
        </div>
        <main className="container mx-auto overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
