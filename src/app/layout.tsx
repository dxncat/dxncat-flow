import { bodyFont } from "@/config";
import "./globals.css";
import { Metadata } from "next";
import { AppProvider } from "./AppProvider";

export const metadata: Metadata = {
  title: {
    template: '%s - Dxncat Flow',
    default: 'Inicio - Dxncat Flow',
  },
  description: 'La mejor opción a la hora de elegir donde gestionar tus proyectos de desarrollo.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${bodyFont.className} antialiased min-h-screen bg-gradient-to-br from-background to-muted`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
