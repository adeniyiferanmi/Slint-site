import {
  GlobeIcon,
  MapPinIcon,
  SlidersHorizontalIcon,
  UsersIcon,
} from "lucide-react";
import { images } from "./images";

export const pilgrimagePackages = [
  {
    name: "Hajj",
    tag: "Islamic pilgrimage",
    description:
      "Fulfil the fifth pillar with a carefully organised Hajj group or private arrangements, subject to seasonal allocation.",
    highlights: [
      "Visa and documentation support",
      "Accommodation near the Haram",
      "Pre-departure Hajj briefing",
    ],
    cta: "Enquire about Hajj",
    image: images.hajj,
    imageAlt: "Masjid al-Haram in Makkah at dusk",
  },
  {
    name: "Umrah",
    tag: "Islamic pilgrimage",
    description:
      "Year-round Umrah trips, including Ramadan departures, with visits to Makkah and Madinah.",
    highlights: [
      "Flexible dates through the year",
      "Ramadan and family packages",
      "Ziyarah in Madinah",
    ],
    cta: "Enquire about Umrah",
    image: images.umrah,
    imageAlt: "The Prophet’s Mosque in Madinah at evening",
  },
  {
    name: "Holy Land Tour",
    tag: "Christian pilgrimage",
    description:
      "Faith journeys through Israel, Jordan, Egypt, Rome and Greece, with guided visits to biblical sites.",
    highlights: [
      "Israel · Jordan · Egypt · Rome · Greece",
      "Church and group itineraries",
      "Experienced spiritual tour guides",
    ],
    cta: "Enquire about Holy Land tours",
    image: images.israel,
    imageAlt: "View over the old city of Jerusalem at golden hour",
  },
];

export const tourPackages = [
  {
    name: "Local getaways",
    tag: "Within Nigeria",
    description:
      "Weekend escapes and short breaks Obudu, Yankari, Erin-Ijesha and beyond.",
    highlights: [],
    cta: "Plan a local trip",
    icon: MapPinIcon,
  },
  {
    name: "International holidays",
    tag: "Abroad",
    description:
      "Safaris, beaches and cities across Africa, the Middle East and Europe.",
    highlights: [],
    cta: "Plan an international trip",
    icon: GlobeIcon,
  },
  {
    name: "Group trips",
    tag: "Churches, alumni & teams",
    description:
      "Coordinated travel for associations, friend groups and corporate retreats.",
    highlights: [],
    cta: "Plan a group trip",
    icon: UsersIcon,
  },
  {
    name: "Custom trips",
    tag: "Built from scratch",
    description:
      "Honeymoons, milestone birthdays or anything else designed entirely around you.",
    highlights: [],
    cta: "Design a custom trip",
    icon: SlidersHorizontalIcon,
  },
];
