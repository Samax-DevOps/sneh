"use client";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import FeaturedProducts from "@/components/featured-products"
import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";



export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const firebaseConfig = {
        apiKey: "AIzaSyBvX-z1ZeGGyfo_NOHjLTEE_M_YNyYdhZ4",
        authDomain: "samax-p.firebaseapp.com",
        projectId: "samax-p",
        storageBucket: "samax-p.firebasestorage.app",
        messagingSenderId: "833672709669",
        appId: "1:833672709669:web:ce5986f902cfce2e1e21cc",
        measurementId: "G-LNZ9C3KF7L"
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      // Check if analytics is supported
      isSupported().then((supported) => {
        if (supported) {
          const analytics = getAnalytics(app);
          console.log("Firebase Analytics initialized.");
        } else {
          console.log("Firebase Analytics is not supported in this environment.");
        }
      });
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/image/image.png"
            alt="Fashion Banner"
            height={100}
            width={300}
            quality={100}
            className="object-fill w-[195vh] h-[80vh]"
            priority  
          />
        </div>
        <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-brown mb-6">Fashion That Celebrates Every Body</h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover clothing that's designed to make you feel confident and comfortable in your own skin.
          </p>
          <Link href="/shop">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200">
              Shop Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop By Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["Women", "Men", "Accessories"].map((category) => (
              <Link href={`/shop?category=${category.toLowerCase()}`} key={category} className="group">
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=600&width=400"
                    alt={category}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <FeaturedProducts />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Newsletter</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 rounded-md flex-grow text-black"
              required
            />
            <Button className="bg-white text-primary hover:bg-gray-200">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

