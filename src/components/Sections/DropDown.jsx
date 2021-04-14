import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export default function DropDown() {
  const [show, setShow] = useState(false);
  const { t } = useTranslation("common");
  const { locale, locales } = useRouter();

  const showClasses = show
    ? "transition ease-in duration-75 transform opacity-100 scale-100 "
    : "transition ease-out duration-100 transform opacity-0 scale-95";

  return (
    <>
      <div className={`relative inline-block text-left`}>
        <div>
          <button
            onBlur={() => setShow(false)}
            onClick={() => setShow(!show)}
            type="button"
            className="inline-flex justify-between opacity-80 hover:opacity-100 rounded-sm px-4 border border-gray-300 py-2 text-sm font-medium text-gray-200 focus:outline-none "
            id="lan"
            aria-expanded="true"
            aria-haspopup="true"
          >
            language : {locale}
          </button>
        </div>

        <div
          className={`${showClasses} bg-white origin-top-right absolute right-0 mt-2 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none `}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            {locales.map((lan) => (
              <Link key={lan} href="/" locale={lan}>
                <a
                  class="text-gray-800 block px-6 py-2 text-sm hover:bg-gray-200"
                  role="menuitem"
                >
                  {lan}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
