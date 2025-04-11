"use client";

import Colors from "@/constants/colors";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { ReactNode } from "react";
import NextJSToploader from "nextjs-toploader";
import "@ant-design/v5-patch-for-react-19";

const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: Colors.primary,
          },
        }}
      >
        <NextJSToploader showSpinner={false} color={Colors.primary} />
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
};

export default RootProvider;
