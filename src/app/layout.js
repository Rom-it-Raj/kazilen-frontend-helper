// src/app/layout.js
import './globals.css'
import BottomNav from './components/BottomNav'
import LocationLoader from './components/LocationLoader';
import ServiceWorkerRegister from "./ServiceWorkerRegister";

export const metadata = {
	title: "Kazilen",
	description: "lo siento",
	manifest:"/manifest.json"
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <LocationLoader />
        <ServiceWorkerRegister />
        {children}
        <BottomNav /> {/* Always included, but self-hides on other pages */}
      </body>
    </html>
  )
}
