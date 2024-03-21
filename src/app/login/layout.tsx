const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
