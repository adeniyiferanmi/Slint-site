import {
  GraduationCapIcon,
  PlaneIcon,
  SunriseIcon,
  TreePalmIcon,
} from "lucide-react";
import { images } from "./images";

export const services = [
  {
    key: "pilgrimage",
    tagLabel: "Pilgrimage",
    fullName: "Pilgrimage Services",
    path: "/services/pilgrimage",
    menuBlurb: "Hajj, Umrah & Holy Land journeys",
    valueStatement: "Sacred journeys, handled with the care they deserve.",
    summary:
      "Guided Hajj, Umrah and Christian Holy Land pilgrimages — organised with deep respect for each tradition, from documentation to the day you return home.",
    points: [
      "Hajj and Umrah packages, group or private",
      "Holy Land tours: Israel, Jordan, Egypt, Rome, Greece",
      "Group coordination and support throughout the trip",
    ],

    cta: "Enquire About Pilgrimage",
    image: images.hajj,
    imageAlt: "Pilgrims gathered at the Masjid al-Haram in Makkah at dusk",
    icon: SunriseIcon,
    accent: {
      text: "text-accent-purple",
      bg: "bg-accent-purpleTint",
      solid: "bg-accent-purple",
      hoverRing: "hover:ring-accent-purple/40",
    },
  },
  {
    key: "study",
    tagLabel: "Study Abroad",
    fullName: "Study Abroad Consultation",
    path: "/services/study-abroad",
    menuBlurb: "Course, admission & visa guidance",
    valueStatement: "Your study abroad plans, made clear from day one.",
    summary:
      "Honest guidance on where to study, what to study and how to apply with a dedicated advisor through admission support and visa preparation.",
    points: [
      "Destination and course shortlisting",
      "Application and admission support",
      "Visa guidance and pre-departure briefing",
    ],

    cta: "Book a Free Consultation",
    image: images.heroStudy,
    imageAlt: "Two Nigerian students walking on a European university campus",
    icon: GraduationCapIcon,
    accent: {
      text: "text-sky-600",
      bg: "bg-sky-100",
      solid: "bg-sky-500",
      hoverRing: "hover:ring-sky-500/40",
    },
  },
  {
    key: "flights",
    tagLabel: "Flights",
    fullName: "Flight Ticketing Assistance",
    path: "/services/flight-tickets",
    menuBlurb: "Domestic & international tickets",
    valueStatement: "Tickets sorted by a person, not a search engine.",
    summary:
      "Tell us where and roughly when. We compare fares, explain the options and issue your domestic or international ticket no self-service booking maze.",
    points: [
      "Domestic and international routes",
      "Honest fare guidance and flexible options",
      "Group and corporate ticketing",
    ],

    cta: "Request a Flight Quote",
    image: images.heroFlights,
    imageAlt:
      "Traveller in a calm airport lounge looking out at a parked aircraft",
    icon: PlaneIcon,
    accent: {
      text: "text-accent-red",
      bg: "bg-accent-redTint",
      solid: "bg-accent-red",
      hoverRing: "hover:ring-accent-red/40",
    },
  },
  {
    key: "tours",
    tagLabel: "Tours",
    fullName: "Tour & Vacation Packages",
    path: "/services/tour-packages",
    menuBlurb: "Curated local & international trips",
    valueStatement: "Getaways planned around the people you travel with.",
    summary:
      "From a family safari in Kenya to a church group in Egypt, we build tours around your budget, pace and people and stay reachable while you travel.",
    points: [
      "Kenya, Cape Town, Zanzibar, Egypt and more",
      "Family, group and custom itineraries",
      "Local getaways within Nigeria",
    ],

    cta: "Plan My Trip",
    image: images.heroTours,
    imageAlt: "Nigerian family on a safari vehicle watching giraffes at sunset",
    icon: TreePalmIcon,
    accent: {
      text: "text-accent-orange",
      bg: "bg-accent-orangeTint",
      solid: "bg-accent-orangeBright",
      hoverRing: "hover:ring-accent-orange/40",
    },
  },
];
