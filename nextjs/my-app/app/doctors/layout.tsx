const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      Hello world,
      <div className="text-red-300 bg-white">{children}</div>
    </div>
  );
};

export default layout;
