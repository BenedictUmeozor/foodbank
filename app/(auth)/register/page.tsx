"use client";

import BankIcon from "@/components/icons/BankIcon";
import Container from "@/components/layout/Container";
import Link from "next/link";

const Page = () => {
  return (
    <main>
      <Container>
        <Link href="/" className="text-primary flex items-center gap-2">
          <BankIcon className="h-5 w-5" /> Foodbank
        </Link>
      </Container>
    </main>
  );
};

export default Page;
