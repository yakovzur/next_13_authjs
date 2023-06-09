import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import { Inter } from 'next/font/google';
import Provider from './provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className='flex flex-col h-full'>
        <Provider>
          <Header />
            <main className='flex-1'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
