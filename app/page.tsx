import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import Head from 'next/head';
import Image from 'next/image';
import '@fontsource/geist-sans';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-blue-900 dark:to-gray-900">
      <Head>
        <title>Navik - Coming soon</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <header className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#0a1128] dark:text-blue-400">
          <Image src="/logo-text.png" width={120} height={50} alt="Navik logo" />
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-gray-600 hover:text-[#0a1128] transition-colors dark:text-gray-300 dark:hover:text-blue-400" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-600 hover:text-[#0a1128] transition-colors dark:text-gray-300 dark:hover:text-blue-400" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
          <div className="container mx-auto flex flex-col items-center text-center">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-[#0a1128] to-[#1335a7] p-3">
                The Future of Group Riding is Coming
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                Navik is revolutionizing the way motorcycle enthusiasts connect, plan, and ride together. Stay tuned for an experience that will transform your adventures on two
                wheels.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email" className="max-w-sm" />
              <Button className="bg-[#0a1128] hover:[#0a1128] text-white">
                Get Notified
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Be the first to know when we launch. No spam, we promise.</p>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 bg-blue-100/50 dark:bg-blue-900/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#0a1128] dark:text-blue-400">Why Navik?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Stay Connected</h3>
                <p className="text-gray-600 dark:text-gray-300">Never lose touch with your riding group, no matter where the road takes you.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Plan Together</h3>
                <p className="text-gray-600 dark:text-gray-300">Collaborate on routes, pit stops, and adventures with intuitive group planning tools.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Ride Smarter</h3>
                <p className="text-gray-600 dark:text-gray-300">Access real-time data and insights to enhance your riding experience.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#0a1128] dark:text-blue-400">Ready to Transform Your Rides?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300">
              Join our waitlist and be among the first riders to experience Navik. Whether you're a weekend warrior or a long-distance enthusiast, we're gearing up to elevate your
              journeys.
            </p>
            <Button className="bg-[#0a1128] hover:[#0a1128] text-white">
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="py-6 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Navik. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <Link className="text-sm text-gray-500 hover:text-[#0a1128] dark:text-gray-400 dark:hover:text-blue-400" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-gray-500 hover:text-[#0a1128] dark:text-gray-400 dark:hover:text-blue-400" href="#">
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
