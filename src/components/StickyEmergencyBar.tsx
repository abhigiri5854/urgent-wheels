import { Phone } from "lucide-react";
import {
  BRAND,
  TEL_LINK,
  EMERGENCY_PHONE_PRIMARY_DISPLAY,
  EMERGENCY_PHONE_SECONDARY_DISPLAY,
} from "@/lib/constants";

export default function StickyEmergencyBar() {
  const primary = EMERGENCY_PHONE_PRIMARY_DISPLAY;
  const secondary = EMERGENCY_PHONE_SECONDARY_DISPLAY;
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] md:hidden">
      <div className="pointer-events-auto mx-auto w-full bg-brand-red px-3 py-3 text-white shadow-[0_-8px_28px_rgba(229,57,53,0.35)]">
        <a
          href={TEL_LINK}
          className="flex items-center justify-between gap-3"
          aria-label={`${BRAND.name} emergency call`}
        >
          <div className="min-w-0">
            <div className="truncate text-[12px] font-semibold tracking-wide">
              EMERGENCY CALL: {primary} / {secondary}
            </div>
          </div>
          <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-white/15">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </span>
        </a>
      </div>
    </div>
  );
}

