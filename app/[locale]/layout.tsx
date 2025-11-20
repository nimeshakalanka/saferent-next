import { SafeRentHeader } from '@/components/saferent/Header';
import { SafeRentFooter } from '@/components/saferent/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming locale is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className={`${roboto.className} bg-gray-950 text-white min-h-screen`} suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <SafeRentHeader />
          <main className="min-h-screen">
            {children}
          </main>
          <SafeRentFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}