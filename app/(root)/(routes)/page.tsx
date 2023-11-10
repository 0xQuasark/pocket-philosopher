import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      {/* RootPage (Protected) */}
    </div>
  );
}
 
export default RootPage;