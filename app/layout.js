import './globals.css';

export const metadata = {
  title: 'MAJKULA • Watch out for your beer',
  description: 'A little surprise. A big catch.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
