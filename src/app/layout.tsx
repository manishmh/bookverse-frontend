'use client'

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AuthProvider } from "@/context/auth-context";
import ProtectedRoute from "@/components/tools/protected-route";
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";
import "./globals.css";
import { protectedRoutes } from "../../routes";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const pathname = usePathname();
  const requiredRole = (children as any).type.requiredRole;

  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="bookverse-theme" disableTransitionOnChange>
          <AuthProvider>
            { protectedRoutes.includes(pathname) ?  (
              <ProtectedRoute requiredRole={requiredRole}>
                {children}
              </ProtectedRoute>
            ) : children
            }
          </AuthProvider>
          <Toaster position="bottom-right" expand={true} richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
