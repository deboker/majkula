import './globals.css';

export const metadata = {
  title: 'MAJKULA • Mišo má svoj deň',
  description: 'Malé prekvapenie. Veľký úlovok.',
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return <html lang="sk"><body>{children}</body></html>;
}
