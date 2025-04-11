import clsx from "clsx";
import { ReactNode } from "react";

const Container = ({
  className = "",
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx(className, "container mx-auto px-4 lg:px-8")}>
      {children}
    </div>
  );
};

export default Container;
