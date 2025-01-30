import AdminNavigation from "./foodmenu/_components/AdminNavigation";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-[#F4F4F5]  ">
     <ClerkProvider>
       
      <SignedOut>
        <SignInButton>
          <button>Login</button>
        </SignInButton>
       </SignedOut>
      
       <SignedIn>
        <div>
         <UserButton/>
         <AdminNavigation/>    
        </div>
        {children}
       </SignedIn>
 
   </ClerkProvider>
    </div>

  );
}