import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      if (!window.google?.translate) return;

      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,mr",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");

      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;

      document.body.appendChild(script);
    }

    return () => {
      // Don't remove the Google script because it may be needed
      // by another component.
    };
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);

    const select = document.querySelector(".goog-te-combo");

    if (!select) {
      console.log("Google Translate is not loaded yet");
      return;
    }

    if (lang === "en") {
      // Return to original English
      select.value = "en";
      select.dispatchEvent(new Event("change"));

      // Remove Google Translate cookie
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie =
        "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" +
        window.location.hostname;

      // Reload so Google Translate completely resets
      window.location.reload();
    } else {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      {/* Google Translate hidden container */}
      <div
        id="google_translate_element"
        className="absolute -left-[9999px] -top-[9999px]"
      />

      {/* Custom Language Switcher */}
      <div className="inline-flex items-center rounded-full border border-gray-200 bg-white p-1 shadow-sm">
        <button
          type="button"
          onClick={() => changeLanguage("en")}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            language === "en"
              ? "bg-gray-900 text-white shadow-sm"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          EN
        </button>

        <button
          type="button"
          onClick={() => changeLanguage("mr")}
          className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
            language === "mr"
              ? "bg-orange-500 text-white shadow-sm"
              : "text-gray-600 hover:bg-orange-50"
          }`}
        >
          मराठी
        </button>
      </div>
    </>
  );
}