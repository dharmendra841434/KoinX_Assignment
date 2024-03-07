import CustomLayout from "@/components/layouts/CustomLayout";
import "./globals.css";

export const metadata = {
  title: "KoinX-Cryptocurrency",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
