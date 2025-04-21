"use client";

import { Button, Checkbox } from "antd";
import terms from "./terms.json";
import { useState } from "react";
import { useRouter } from "nextjs-toploader/app";

export default function Page() {
  const [agreed, setAgreed] = useState<boolean | null>(null);
  const router = useRouter();

  const handleClick = () => {
    if (agreed) {
      router.push("/farmer/loans/apply/create");
    } else {
      setAgreed(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4 rounded-lg bg-gradient-to-r from-[#A5D7A7] to-[#6ABC6D] p-8 text-white">
        <p className="text-xl font-medium">Hello Cy</p>
        <div className="space-y-1.5">
          <span className="text-xs">Your current loan limit</span>
          <p className="text-xl font-bold">₦2,000,000</p>
        </div>
      </div>
      <div className="text-darklight space-y-4">
        <h4 className="text-xl font-medium">Terms and Conditions</h4>
        <ul className="list-disc space-y-2 pl-6">
          {terms.map((terms) => (
            <li key={terms.id} className="space-y-1 text-base">
              <h6 className="font-semibold">{terms.title}</h6>
              <p>{terms.description}</p>
            </li>
          ))}
        </ul>
        <div className="space-y-1">
          <Checkbox
            checked={agreed || false}
            onChange={(e) => setAgreed(e.target.checked)}
          >
            <span className="text-darklight text-base">
              By clicking this box, you are agreeing to our terms and conditions
            </span>
          </Checkbox>
          {agreed === false && (
            <p className="text-red-600">This field is required!</p>
          )}
        </div>
      </div>
      <Button
        size="large"
        type="primary"
        className="w-48 text-base"
        onClick={handleClick}
      >
        Agree and continue
      </Button>
    </div>
  );
}
