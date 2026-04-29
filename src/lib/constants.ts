export const BRAND = {
  name: "Urgent Wheels",
  theme: {
    red: "#E53935",
    darkGray: "#2B2B2B",
  },
  tagline:
    "Emergency, trust, speed, reliability for Delhi ambulance services.",
} as const;

// Phone numbers (Delhi, India)
export const EMERGENCY_PHONE_1 = "9318400785";
export const EMERGENCY_PHONE_2 = "8800580074";

// Keep `EMERGENCY_*_E164` in E.164 format (starts with +).
export const EMERGENCY_PHONE_PRIMARY_E164 = `+91${EMERGENCY_PHONE_1}`;
export const EMERGENCY_PHONE_SECONDARY_E164 = `+91${EMERGENCY_PHONE_2}`;

export const EMERGENCY_PHONES_E164 = [
  EMERGENCY_PHONE_PRIMARY_E164,
  EMERGENCY_PHONE_SECONDARY_E164,
] as const;

export const EMERGENCY_PHONE_PRIMARY_DISPLAY = `+91${EMERGENCY_PHONE_1}`;
export const EMERGENCY_PHONE_SECONDARY_DISPLAY = `+91${EMERGENCY_PHONE_2}`;

export const WHATSAPP_NUMBER_E164 = EMERGENCY_PHONE_1; // digits only, used in wa.me/

export const CITY = "Delhi, India";
export const HERO_IMAGE_URL =
  "/facilities/facility-01.png";

export const RESPONSE_TIME = {
  minMinutes: 15,
  maxMinutes: 20,
} as const;

export const COVERAGE = {
  region: "Delhi NCR",
  focusAreas: ["Janakpuri", "Tilak Nagar", "Dwarka"] as const,
} as const;

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER_E164}`;
export const TEL_LINK = `tel:${EMERGENCY_PHONE_PRIMARY_E164}`;
export const TEL_LINK_1 = `tel:${EMERGENCY_PHONE_PRIMARY_E164}`;
export const TEL_LINK_2 = `tel:${EMERGENCY_PHONE_SECONDARY_E164}`;

export const EMAIL = "urgentwheelsdelhi@gmail.com";
export const EMAIL_LINK = `mailto:${EMAIL}`;

export const FACILITY_IMAGE_PATHS = [
  "/facilities/facility-01.png",
  "/facilities/facility-02.png",
  "/facilities/facility-03.png",
  "/facilities/facility-04.png",
  "/facilities/facility-05.png",
  "/facilities/facility-06.png",
  "/facilities/facility-07.png",
  "/facilities/facility-08.png",
  "/facilities/facility-09.png",
] as const;

