"use client";

import { NAV_LINKS } from "@/constants/links";
import { Button, Drawer } from "antd";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <Button
        type="text"
        className="lg:hidden"
        size="large"
        onClick={() => setOpen(true)}
        icon={<MenuIcon className="h-8 w-8" />}
      />
      <Drawer placement="top" open={open} onClose={() => setOpen(false)}>
        <div className="space-y-8">
          <ul className="flex flex-col items-start gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-dark hover:text-primary">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/login">
            <Button
              type="default"
              className="border-primary text-primary bg-transparent text-sm font-medium"
              size="large"
              block
            >
              Login
            </Button>
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
