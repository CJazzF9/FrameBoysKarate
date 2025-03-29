export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <header className="bg-blue-700 text-white p-4 text-center text-2xl font-bold">
        Frame Brothers Karate 🇺🇸
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-blue-900 text-white text-center p-2">
        &copy; 2025 Frame Brothers Karate. All rights reserved.
      </footer>
    </div>
  );
}
