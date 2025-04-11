"use client";

import { Button, Result } from "antd";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-3xl">
        <Result
          status="404"
          title={
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-6">
              Page Not Found
            </h1>
          }
          subTitle={
            <p className="text-lg text-gray-500 mt-4 mb-8">
              Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
          }
          extra={
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center mt-6">
              <Link href="/">
                <Button 
                  type="primary" 
                  className="flex items-center gap-2 px-6 bg-blue-600 hover:bg-blue-700"
                  icon={<ArrowLeft size={16} />}
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          }
        />
        
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-md h-64">
            <Image
              src="/images/landing1.webp"
              alt="Food Bank Image"
              fill
              className="object-cover rounded-lg shadow-lg opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-xl font-bold">Find a Food Bank Near You</h3>
              <p className="mt-2">We&apos;re still here to help you find food assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
