import "./globals.css";
import App from "./app";

export const metadata = {
  title: "M Iqbal Ferdiansyah",
  description: "Hello, Im M Iqbal Ferdiansyah | Website Developer",
  googleSiteVerification: "cmCVVfUe_uvlIc6AIYwZGZfIwpKTpb2SYTfAfCGOTeo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <App>{children}</App>
      </body>
    </html>
  );
}
