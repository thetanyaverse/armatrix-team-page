import "./globals.css";

export const metadata = {
  title: "Armatrix Team",
  description: "Meet the team behind Armatrix",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
