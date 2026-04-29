import { Ambulance, PhoneCall } from "lucide-react";
import {
  EMERGENCY_PHONE_PRIMARY_DISPLAY,
  EMERGENCY_PHONE_SECONDARY_DISPLAY,
  TEL_LINK,
} from "@/lib/constants";

const STRIP_TEXT =
  "Welcome To Urgent Wheels in Delhi Service • Delhi Outside Ambulance Just Rs 12 Per km • Delhi To UP, Bihar, Bangal, Jharkhand • All Over India Ambulance Service • Just 15 Minutes in Delhi NCR / Noida / Gurgaon / Ghaziabad / Faridabad • 24 Hours Service";

export default function TopInfoStrip() {
  return (
    <div className="relative z-[70] border-b border-black/5 bg-brand-red text-white">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-3 py-2 md:px-4">
        <div className="hidden items-center gap-2 md:flex">
          <Ambulance className="h-4 w-4" aria-hidden="true" />
          <span className="text-xs font-extrabold tracking-wide">URGENT WHEELS</span>
        </div>

        <div className="strip-mask min-w-0 flex-1 overflow-hidden">
          <div className="strip-track whitespace-nowrap text-xs font-semibold">
            <span>{STRIP_TEXT}</span>
            <span className="ml-8">{STRIP_TEXT}</span>
          </div>
        </div>

        <a
          href={TEL_LINK}
          className="inline-flex flex-none items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-extrabold text-brand-red"
          aria-label="Call urgent wheels now"
        >
          <PhoneCall className="h-3.5 w-3.5" aria-hidden="true" />
          {EMERGENCY_PHONE_PRIMARY_DISPLAY}
          <span className="hidden sm:inline">/ {EMERGENCY_PHONE_SECONDARY_DISPLAY}</span>
        </a>
      </div>
    </div>
  );
}

