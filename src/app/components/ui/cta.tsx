import clsx from "clsx";

type CTAProps = {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
};

const base =
  "inline-flex items-center justify-center rounded-lg font-medium transition-transform duration-150 active:scale-[0.98]";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

const variants = {
  primary: "bg-emerald-600 text-white hover:bg-emerald-700",
  outline:
    "border border-emerald-600 text-emerald-700 hover:bg-emerald-50",
};

export function CTA({
  href,
  children,
  size = "md",
  variant = "primary",
}: CTAProps) {
  return (
    <a href={href} className={clsx(base, sizes[size], variants[variant])}>
      {children}
    </a>
  );
}
