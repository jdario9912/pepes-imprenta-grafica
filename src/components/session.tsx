import { getServerSession } from "next-auth";

const Session = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();

  if (session) return <>{children}</>;

  return null;
};

export default Session;
