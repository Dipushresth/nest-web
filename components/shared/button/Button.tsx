import { Icon, IconNameType } from "@/assets/icons/icons";
import { Button as ShadButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Buttoninterface {
  children: string | React.ReactNode;
  className?: string;
  iconLeft?: IconNameType;
  iconRight?: IconNameType;
  outline?: "primary" | "secondary" | "ternary";
  color?: "primary" | "secondary";
  iconClass?: string;
}
export default function Button({
  children,
  className,
  iconLeft: IconLeft,
  iconRight: IconRight,
  outline,
  color,
  iconClass,
}: Buttoninterface) {
  const primaryOutline = cn("bg-success-50 text-success border-success");
  const secondOutline = cn("bg-secondary-50 text-secondary border-secondary");
  const primarybtn = cn("bg-success text-white border-success");
  const secondarybtn = cn(
    "bg-secondary text-white hover:bg-secondary border-secondary",
  );
  return (
    <ShadButton
      className={cn(
        "bg-white cursor-pointer border bg-transparent border-black text-slate-700 px-5! py-2 rounded-full font-bold hover:bg-slate-100 transition-all min-h-[45px] text-base flex items-center gap-2 ",
        className,
        outline === "primary" && primaryOutline,
        outline === "secondary" && secondOutline,
        color === "secondary" && secondarybtn,
        color === "primary" && primarybtn,
      )}
    >
      {IconLeft && <Icon name={IconLeft} className={iconClass} />}
      {children}
      {IconRight && <Icon name={IconRight} className={iconClass} />}
      {/* <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17l9.2-9.2M17 17V7H7" />
    </svg> */}
    </ShadButton>
  );
}
