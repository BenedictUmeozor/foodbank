"use client";

import clsx from "clsx";
import {
  LayoutDashboardIcon,
  LogOutIcon,
  MessagesSquareIcon,
  UserIcon,
  UsersIcon,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BankIcon from "../icons/BankIcon";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const FarmerSidebar = () => {
  const pathname = usePathname();

  const MENU = [
    {
      name: "Dashboard",
      href: "/farmer/dashboard",
      icon: <LayoutDashboardIcon className="h-5 w-5" />,
      active: pathname.includes("/farmer/dashboard"),
    },
    {
      name: "My Loans",
      href: "/farmer/loans",
      icon: <WalletIcon className="h-5 w-5" />,
      active: pathname.includes("/farmer/loans"),
    },
    {
      name: "Community",
      href: "/farmer/community",
      icon: <UsersIcon className="h-5 w-5" />,
      active: pathname.includes("/farmer/community"),
    },
    {
      name: "Messages",
      href: "/farmer/messages",
      icon: <MessagesSquareIcon className="h-5 w-5" />,
      active: pathname.includes("/farmer/messages"),
    },
    {
      name: "Profile",
      href: "/farmer/profile",
      icon: <UserIcon className="h-5 w-5" />,
      active: pathname.includes("/farmer/profile"),
    },
  ];

  return (
    <aside className="no-scrollbar no-scrollbar grid h-screen w-[220px] grid-rows-[auto_1fr] gap-12 overflow-y-auto bg-white pb-6">
      <div className="space-y-4">
        <Link
          href="/"
          className={
            "text-primary sticky top-0 z-10 flex items-center gap-2 bg-[#F5F3F3] py-4 justify-center " +
            manrope.className
          }
        >
          <BankIcon className="h-8 w-8" />{" "}
          <span className="text-xl">Foodbank</span>
        </Link>
        <ul className="space-y-2 pt-4">
          {MENU.map((item) => (
            <li
              key={item.href}
              className={clsx(
                "hover:text-primary transition duration-200 ease-linear hover:bg-[#DBEFDC]",
                item.active && "text-primary bg-[#DBEFDC]",
              )}
            >
              <Link
                href={item.href}
                className={clsx(
                  "mx-auto flex w-[80%] items-center gap-2 py-2.5 text-base font-normal",
                  item.active ? "text-primary" : "text-dark",
                  manrope.className,
                )}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-end">
        <button className="w-full cursor-pointer text-[#D44848] transition duration-200 ease-linear hover:bg-gray-50">
          <p className="mx-auto flex w-[80%] items-center gap-2 py-2.5 text-base font-normal">
            <LogOutIcon className="h-5 w-5" />
            Logout
          </p>
        </button>
      </div>
    </aside>
  );
};

export default FarmerSidebar;
