import Container from "@/components/layout/Container";
import { NAV_LINKS, SUPPORT_LINKS } from "@/constants/links";
import { Button } from "antd";
import clsx from "clsx";
import {
  ChartLineIcon,
  CoinsIcon,
  FacebookIcon,
  HeadphonesIcon,
  InstagramIcon,
  LinkedinIcon,
  SearchIcon,
  ShieldPlusIcon,
  SquareCheckBigIcon,
} from "lucide-react";
import { Judson } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const judson = Judson({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Page() {
  return (
    <main className="space-y-8">
      <section className="grid h-screen grid-rows-[auto_1fr] bg-gradient-to-b from-[#A5D7A7] to-white">
        <header className="py-6">
          <Container className="flex items-center justify-between">
            <Link
              href="/"
              className={clsx(
                judson.className,
                "text-primary text-4xl font-medium",
              )}
            >
              FoodBank
            </Link>
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/login">
              <Button
                type="default"
                className="border-primary text-primary w-48 bg-transparent text-sm font-medium"
                size="large"
              >
                Login
              </Button>
            </Link>
          </Container>
        </header>
        <Container className="flex max-w-6xl flex-col items-center justify-center gap-8 text-center">
          <h1 className="text-center text-6xl leading-normal font-medium">
            Empowering Farmers, Connecting Investors
          </h1>
          <p>
            Be part of a revolutionary way to support agriculture, empower
            farmers, and secure fresh, quality produce for your family. Whether
            you’re an investor or a farmer in need of low-interest loans and
            reliable buyers,FoodBank offers tailored loans and investment
            opportunities to grow sustainable agriculture.
          </p>
          <Button type="primary" size="large" className="text-sm">
            Join Foodbank
          </Button>
        </Container>
      </section>
      <section className="py-12">
        <Container className="grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="space-y-8 rounded-md border border-gray-200 p-8">
            <h4 className="text-3xl font-medium">How it works</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <h6 className="text-lg font-bold">Sign up and verify</h6>
                <p>
                  Register as a farmer or investor and complete our KYC process.
                </p>
              </div>
              <div className="space-y-2">
                <h6 className="text-lg font-bold">Apply or invest</h6>
                <p>
                  Farmers submit loan applications while investors browse
                  funding opportunities.
                </p>
              </div>
              <div className="space-y-2">
                <h6 className="text-lg font-bold">Get funded and grow</h6>
                <p>
                  Receive funds, monitor progress, and enjoy transparent
                  tracking of repayments/investments.
                </p>
              </div>
              <Button type="primary" size="large" className="text-sm">
                Join Foodbank
              </Button>
            </div>
          </div>
          <div className="space-y-4 rounded-md border border-gray-200 p-8">
            <Image
              src="/images/landing1.webp"
              alt="Landing Image"
              width={500}
              height={300}
              className="aspect-[6/5] w-full rounded-sm object-cover"
            />
            <p>
              Experience a seamless journey from sign-up to funding, discover
              how FoodBank bridges farmers and investors in three simple steps.
            </p>
          </div>
        </Container>
      </section>
      <section>
        <Container className="bg-primary-light max-w-6xl space-y-12 rounded-sm px-8 pt-16 pb-8">
          <h3 className="text-center text-4xl font-medium">
            Our features and benefits
          </h3>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="mx-auto flex max-w-[350px] flex-col items-center justify-center gap-4 rounded bg-white p-2 py-4 text-center">
              <ShieldPlusIcon className="h-8 w-8 text-gray-300" />
              <div className="space-y-2">
                <h6 className="text-lg font-semibold">Secure Transactions</h6>
                <p className="text-sm">
                  Receive funds, monitor progress, and enjoy transparent
                  tracking of repayments/investments.
                </p>
              </div>
            </div>

            <div className="mx-auto flex max-w-[350px] flex-col items-center justify-center gap-4 rounded bg-white p-2 py-4 text-center">
              <HeadphonesIcon className="h-8 w-8 text-gray-300" />
              <div className="space-y-2">
                <h6 className="text-lg font-semibold">Support</h6>
                <p className="text-sm">
                  Dedicated customer support and advisory services ensure that
                  you have expert guidance whenever needed.
                </p>
              </div>
            </div>
            <div className="mx-auto flex max-w-[350px] flex-col items-center justify-center gap-4 rounded bg-white p-2 py-4 text-center">
              <ChartLineIcon className="h-8 w-8 text-gray-300" />
              <div className="space-y-2">
                <h6 className="text-lg font-semibold">Real-Time Analytics</h6>
                <p className="text-sm">
                  Detailed charts providing immediate insights into loan
                  performance, repayment progress, and investment returns.
                </p>
              </div>
            </div>
            <div className="mx-auto flex max-w-[350px] flex-col items-center justify-center gap-4 rounded bg-white p-2 py-4 text-center">
              <CoinsIcon className="h-8 w-8 text-gray-300" />
              <div className="space-y-2">
                <h6 className="text-lg font-semibold">Flexible Loan Options</h6>
                <p className="text-sm">
                  Options are available for different sizes of loans with
                  competitive interest rates and repayment schedules to fit your
                  cash flow.
                </p>
              </div>
            </div>
            <div className="mx-auto flex max-w-[350px] flex-col items-center justify-center gap-4 rounded bg-white p-2 py-4 text-center">
              <SearchIcon className="h-8 w-8 text-gray-300" />
              <div className="space-y-2">
                <h6 className="text-lg font-semibold">Transparent Processes</h6>
                <p className="text-sm">
                  From application submission to fund disbursement, all
                  milestones are tracked, ensuring full clarity and
                  accountability..
                </p>
              </div>
            </div>
            <div className="mx-auto flex max-w-[350px] flex-col items-center justify-center gap-4 rounded bg-white p-2 py-4 text-center">
              <SquareCheckBigIcon className="h-8 w-8 text-gray-300" />
              <div className="space-y-2">
                <h6 className="text-lg font-semibold">Streamlined Processes</h6>
                <p className="text-sm">
                  Using advanced algorithms and efficient data verification,
                  FoodBank minimizes paperwork and reduces waiting time.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="py-12">
        <Container className="grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
          <Image
            src="/images/landing2.webp"
            alt="Landing Image"
            width={500}
            height={300}
            className="aspect-[6/5] w-full rounded-sm object-cover"
          />

          <div className="space-y-8 rounded-md border border-gray-200 p-8">
            <h4 className="text-3xl font-medium">Why join us?</h4>
            <div className="space-y-6">
              <div className="space-y-2">
                <h6 className="text-lg font-bold">Empower Farmers</h6>
                <p>
                  When you join FoodBank, you become a vital part of a community
                  that uplifts farmers.
                </p>
              </div>
              <div className="space-y-2">
                <h6 className="text-lg font-bold">Invest with Purpose</h6>
                <p>
                  At FoodBank, your investment goes further than financial
                  returns, it fosters sustainable agriculture and strengthens
                  rural communities
                </p>
              </div>
              <div className="space-y-2">
                <h6 className="text-lg font-bold">
                  Experience Transparency and Ease
                </h6>
                <p>
                  Our streamlined, secure platform is designed with you in mind
                  to enjoy a smooth, trustworthy process.
                </p>
              </div>
              <Button type="primary" size="large" className="text-sm">
                Join Foodbank
              </Button>
            </div>
          </div>
        </Container>
      </section>
      <footer className="bg-dark py-8 text-white">
        <Container className="space-y-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <Link
                href="/"
                className={clsx(judson.className, "text-4xl font-medium")}
              >
                FoodBank
              </Link>
              <p className="mt-4 max-w-xs">
                Empowering farmers, fueling growth. Join us in building a
                sustainable future.
              </p>
            </div>
            <div className="flex items-start justify-evenly max-lg:flex-col">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Company</h4>
                <ul className="space-y-1">
                  {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-primary">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Support</h4>
                <ul className="space-y-1">
                  {SUPPORT_LINKS.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-primary">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Social Media</h4>
                <div className="flex items-center gap-4">
                  <Link href="#">
                    <FacebookIcon className="h-5 w-5 text-white/80" />
                  </Link>
                  <Link href="#">
                    <InstagramIcon className="h-5 w-5 text-white/80" />
                  </Link>
                  <Link href="#">
                    <LinkedinIcon className="h-5 w-5 text-white/80" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[1px] w-full bg-white/90" />
          <div className="flex items-center justify-between">
            <Link href="#">Privacy Policy</Link>
            <p>&copy; Copyright 2025. Foodbank. All Right Reserved</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
