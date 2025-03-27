import { useEffect, useRef, useState } from "react";

const NAV_ROUTES = [
  { title: "Product", href: "#" },
  { title: "Features", href: "#" },
  { title: "Marketplace", href: "#" },
  { title: "Company", href: "#" },
];

const Routes = () => {
  return NAV_ROUTES.map((route, key) => (
    <a
      key={key}
      href={route.href}
      className="text-gray-700 md:text-white block md:inline-flex w-full md:w-auto px-2 md:px-1 py-2 md:py-0 font-normal md:font-medium"
    >
      {route.title}
    </a>
  ));
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: globalThis.MouseEvent) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);

    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  return (
    <nav className="relative">
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 h-screen w-screen z-9 bg-gray-900/70"></div>
      )}

      <div
        className={`${
          isOpen ? "bg-white md:bg-inherit" : ""
        } rounded-lg absolute top-0 left-0 z-10 w-full pt-4`}
        ref={wrapperRef}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[40px] md:h-[42px]">
            <div className="flex items-center">
              <a href="#" className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 md:h-10 w-auto"
                  src="/header/logo.png"
                  alt="Logo"
                />
              </a>
              <div className="hidden md:ml-6 md:flex md:space-x-8">
                <Routes />
              </div>
            </div>
            <div className="flex items-center">
              <div className="hidden space-x-2 md:flex md:items-center text-white text-base font-medium">
                <button
                  type="button"
                  className="cursor-pointer px-4 py-2 rounded-md"
                >
                  Login
                </button>
                <button
                  type="button"
                  className="cursor-pointer bg-gray-600 px-4 py-2 rounded-md"
                >
                  Start free trial
                </button>
              </div>
              <div className="flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
                  aria-expanded={isOpen ? "true" : "false"}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  {isOpen ? (
                    <img src="/header/close.png" />
                  ) : (
                    <img src="/header/menu.png" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden space-y-6 px-4 py-5 animated ${
            isOpen ? "" : "hidden"
          }`}
          id="mobile-menu"
        >
          <div className="space-y-1">
            <Routes />
          </div>

          <a
            href="#"
            className="flex items-center justify-center h-12 w-full bg-indigo-600 px-4 rounded-[6px] text-white text-base font-medium"
          >
            Start Free Trial
          </a>
          <div className="flex items-center justify-center w-full px-4 rounded-md text-gray-500 text-base">
            Existing customer? &nbsp;
            <a href="#" className="text-gray-900 font-medium">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
