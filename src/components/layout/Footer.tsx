import Container from "./Container";
import Button from "../ui/buttons/Button";
import Input from "../ui/forms/Input";
import { Body, H3, H4, H5, Small } from "../ui/typography";
import Send from "@/assets/icons/send2.png";
import QR from "@/assets/images/qr.png";
import GooglePlay from "@/assets/images/google-paly.jpg";
import AppStore from "@/assets/images/appstore.jpg";

export function Footer() {
  return (
    <footer className="bg-black text-text">
      <Container className="py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Exclusive */}
          <div className="space-y-4">
            <H3 className="!font-bold !text-white">Exclusive</H3>
            <H4 className="font-medium !text-white">Subscribe</H4>
            <Small className="block text-gray-400">
              Get 10% off your first order
            </Small>

            <div className="flex border border-gray-500 rounded-md overflow-hidden">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent text-sm placeholder:text-gray-400 border-none focus:ring-0 px-3 py-2 flex-1"
              />
              <Button
                size="icon"
                className="!bg-transparent hover:bg-gray-800 transition"
              >
                <img src={Send} alt="Send" className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <H5 className="text-white">Support</H5>
            <div className="space-y-2 text-sm text-gray-400">
              <Body>King Abdullah Road, Riyadh, Saudi Arabia</Body>
              <Body>support@exclusive.sa</Body>
              <Body>+966-55-123-4567</Body>
            </div>
          </div>

          {/* Account */}
          <div className="space-y-4">
            <H5 className="text-white">Account</H5>
            <nav className="flex flex-col space-y-2 text-sm text-gray-400">
              {[
                "My Account",
                "Login / Register",
                "Cart",
                "Wishlist",
                "Shop",
              ].map((item) => (
                <a key={item} href="#" className="hover:text-white transition">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Quick Link */}
          <div className="space-y-4">
            <H5 className="text-white">Quick Link</H5>
            <nav className="flex flex-col space-y-2 text-sm text-gray-400">
              {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-white transition"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>

          {/* Download App */}
          <div className="space-y-4">
            <H5 className="text-white">Download App</H5>
            <Body className="text-xs text-gray-400">
              Save $3 with App New User Only
            </Body>
            <div className="flex items-start gap-3">
              {/* QR Code */}
              <div className="flex-shrink-0">
                <img
                  src={QR}
                  alt="QR Code"
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Stores */}
              <div className="flex flex-col gap-2">
                <img
                  src={GooglePlay}
                  alt="Google Play"
                  className="w-28 h-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
                />
                <img
                  src={AppStore}
                  alt="App Store"
                  className="w-28 h-auto object-contain hover:opacity-80 transition-opacity cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <Small className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Exclusive. All rights reserved.
          </Small>
        </div>
      </Container>
    </footer>
  );
}
