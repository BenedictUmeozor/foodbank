"use client";

import BankIcon from "@/components/icons/BankIcon";
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

const Page = () => {
  const router = useRouter();

  return (
    <main className="min-h-screen grid-rows-[auto_1fr]">
      <Container className="py-8">
        <Link href="/" className="text-primary flex items-center gap-2">
          <BankIcon className="h-8 w-8" />{" "}
          <span className="text-xl">Foodbank</span>
        </Link>
      </Container>
      <Container className="space-y-10 py-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center justify-center gap-1">
            <div className="bg-primary h-4 w-10 rounded-full" />
            <div className="h-4 w-4 rounded-full bg-[#D4D4D4]" />
          </div>
          <div className="space-y-4 text-center">
            <h6 className="text-xl font-medium">What are you registering as</h6>
            <p>
              Please note that you can either register as a farmer or an
              investor, but not both
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-3 gap-8">
          <div
            role="button"
            onClick={() => router.push("/register/create?type=farmer")}
            className="group hover:border-primary mx-auto w-full cursor-pointer space-y-2 border-2 border-transparent transition-all duration-200 ease-in-out hover:rounded-lg hover:border-2"
          >
            <p className="text-center text-lg">Farmer</p>
            <div className="flex items-center justify-center overflow-hidden">
              <Image
                src="/images/select.webp"
                alt="Farmer"
                width={100}
                height={100}
                className="mx-auto aspect-square w-full max-w-xs rounded object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
          <div
            role="button"
            onClick={() => router.push("/register/create?type=investor")}
            className="group hover:border-primary mx-auto w-full cursor-pointer space-y-2 border-2 border-transparent transition-all duration-200 ease-in-out hover:rounded-lg hover:border-2"
          >
            <p className="text-center text-lg">Investor</p>
            <div className="flex items-center justify-center overflow-hidden">
              <Image
                src="/images/select.webp"
                alt="Farmer"
                width={100}
                height={100}
                className="mx-auto aspect-square w-full max-w-xs rounded object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
          <div
            role="button"
            onClick={() => router.push("/register/create?type=agent")}
            className="group hover:border-primary mx-auto w-full cursor-pointer space-y-2 border-2 border-transparent transition-all duration-200 ease-in-out hover:rounded-lg hover:border-2"
          >
            <p className="text-center text-lg">Agent</p>
            <div className="flex items-center justify-center overflow-hidden">
              <Image
                src="/images/select.webp"
                alt="Agent"
                width={100}
                height={100}
                className="mx-auto aspect-square w-full max-w-xs rounded object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Page;
