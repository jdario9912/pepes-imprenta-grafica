const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-cyan-500/30 shadow-lg shadow-gray-500 hidden md:block" />
      <div className="w-full md:w-1/2">{children}</div>
    </div>
  );
};

export default Layout;
