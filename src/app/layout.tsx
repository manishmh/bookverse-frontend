"use client";

import Navbar from "@/components/home/navbar/navbar";
import ProtectedRoute from "@/components/tools/protected-route";
import { AuthProvider } from "@/context/auth-context";
import { ThemeProvider } from "@/providers/theme-provider";
import { store } from "@/store/redux-store";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { protectedRoutes } from "../../routes";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const requiredRole = (children as any).type.requiredRole;

  return (
    <html lang="en">
      <body className=" trasition-all duration-300">
        <Provider store={store}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="bookverse-theme"
            disableTransitionOnChange
          >
            <AuthProvider>
              {protectedRoutes.includes(pathname) ? (
                <ProtectedRoute requiredRole={requiredRole}>
                  {children}
                </ProtectedRoute>
              ) : (
                children
              )}
            </AuthProvider>
            <Toaster position="bottom-right" expand={true} richColors />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
