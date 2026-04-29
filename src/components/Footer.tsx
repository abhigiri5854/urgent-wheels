import { BRAND } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white dark:bg-black/60">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-bold text-brand-dark">
              {BRAND.name}
            </div>
            <div className="mt-1 text-xs leading-relaxed text-brand-muted">
              24/7 Emergency ambulance services across Delhi NCR.
            </div>
          </div>
          <div className="text-xs text-brand-muted">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

