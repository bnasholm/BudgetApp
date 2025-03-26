import { useEffect, useRef, useState } from "react";
import { DownCarot } from "../svg";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

const SignOutDropdown = () => {
  const { logout } = useKindeAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100"
      >
        <DownCarot />
      </button>
      {menuOpen && (
        <div className="absolute ml-4 mt-1 space-y-1 w-24 right-0">
          <button onClick={() => logout("/budget")}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default SignOutDropdown;
