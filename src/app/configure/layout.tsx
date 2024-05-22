import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function ConfigureLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MaxWidthWrapper className="flex-1 flex-col">{children}</MaxWidthWrapper>
  );
}
