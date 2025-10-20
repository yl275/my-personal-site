import { ReactNode } from "react";

type CenterProps = {
  children: ReactNode;
  className?: string;
};

export default function Center({ children, className = "" }: CenterProps) {
  return (
    <div className="flex justify-center min-h-screen">
      <div className={className}>{children}</div>
    </div>
  );
}
