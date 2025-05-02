// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin ve ala alihi ve sahbihi ecmain

import Link from "next/link";
import SearchField from "@/components/SearchField";
import UserButton from "@/components/UserButton";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between px-5 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          Yekazad Yazılım
        </Link>

        {/* Search Field */}
        <SearchField />

        {/* Dropdown Menus */}
        <nav className="flex items-center gap-5">
          {/* Dashboard Dropdown */}
          <div className="relative group">
            <button className="text-primary font-medium hover:underline">
              Pêşbirk
            </button>
            <div className="absolute left-0 mt-2 hidden w-48 bg-white shadow-lg group-hover:block">
              <Link
                href="/dashboard/overview"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Nirxandin
              </Link>
              <Link
                href="/dashboard/stats"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Statîstîk
              </Link>
              <Link
                href="/dashboard/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Mîhengên
              </Link>
            </div>
          </div>

          {/* Projects Dropdown */}
          <div className="relative group">
            <button className="text-primary font-medium hover:underline">
              Projeyên
            </button>
            <div className="absolute left-0 mt-2 hidden w-48 bg-white shadow-lg group-hover:block">
              <Link
                href="/projects/active"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Projeyên Çalak
              </Link>
              <Link
                href="/projects/completed"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Projeyên Qediya
              </Link>
              <Link
                href="/projects/new"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Projeya Nû
              </Link>
            </div>
          </div>

          {/* User Dropdown */}
          <div className="relative group">
            <button className="text-primary font-medium hover:underline">
              Bikarhêner
            </button>
            <div className="absolute right-0 mt-2 hidden w-48 bg-white shadow-lg group-hover:block">
              <Link
                href="/user/profile"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Profîl
              </Link>
              <Link
                href="/user/settings"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Mîhengên
              </Link>
              <Link
                href="/logout"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Derkeve
              </Link>
            </div>
          </div>

          {/* Reports Dropdown */}
          <div className="relative group">
            <button className="text-primary font-medium hover:underline">
              Raporên
            </button>
            <div className="absolute left-0 mt-2 hidden w-48 bg-white shadow-lg group-hover:block">
              <Link
                href="/reports/sales"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Raporên Firotanê
              </Link>
              <Link
                href="/reports/traffic"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Raporên Hereketê
              </Link>
              <Link
                href="/reports/errors"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Têketinên Çewtî
              </Link>
            </div>
          </div>

          {/* Settings Dropdown */}
          <div className="relative group">
            <button className="text-primary font-medium hover:underline">
              Mîhengên
            </button>
            <div className="absolute left-0 mt-2 hidden w-48 bg-white shadow-lg group-hover:block">
              <Link
                href="/settings/general"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Mîhengên Giştî
              </Link>
              <Link
                href="/settings/security"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Mîhengên Ewlehî
              </Link>
              <Link
                href="/settings/notifications"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Mîhengên Agahdariyê
              </Link>
            </div>
          </div>
        </nav>

        {/* User Button */}
        <UserButton className="sm:ms-auto" />
      </div>
    </header>
  );
}