import "./globals.css";

export const metadata = {
  title: "GloboPersona Dashboard",
  description: "Email Marketing Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}