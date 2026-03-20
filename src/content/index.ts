export type NavItem = {
  label: string;
  href: string;
};

export type SiteMetadata = {
  title: string;
  description: string;
};

export type BrandLogo = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SocialLink = {
  platform: "instagram" | "twitter" | "linkedin" | "facebook";
  href: string;
};

export type Banner = {
  location: string;
  email: string;
  phone: string;
  socials: SocialLink[];
};

export type Brand = {
  name: string;
  logo: BrandLogo;
  fullLogo: BrandLogo;
  banner: Banner;
};

export type Seo = {
  siteUrl: string;
  canonicalBase: string;
  titleTemplate: string;
  twitterHandle?: string;
  icons: {
    icon: string;
  };
  openGraph: {
    type: "website";
    locale: string;
  };
  sitemap: {
    excludePaths: string[];
  };
  robots: {
    userAgent: string;
    allow: string;
  };
};

export type ServiceLink = {
  title: string;
  description: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: NavItem[];
};

export type AuthCopy = {
  login: {
    title: string;
    description: string;
    emailLabel: string;
    passwordLabel: string;
    rememberMeLabel: string;
    submitLabel: string;
    helperText: string;
    signupCta: {
      label: string;
      href: string;
    };
  };
  signup: {
    title: string;
    description: string;
    nameLabel: string;
    emailLabel: string;
    passwordLabel: string;
    submitLabel: string;
    helperText: string;
    loginCta: {
      label: string;
      href: string;
    };
  };
};

export type LandingContent = {
  metadata: SiteMetadata;
  brand: Brand;
  seo: Seo;
  routes: {
    public: string[];
  };
  nav: {
    items: NavItem[];
    mobileItems: NavItem[];
    cta: {
      label: string;
      href: string;
    };
  };
  home: {
    hero: {
      images: string[];
      jetImage: string;
      eyebrow: string;
      title: string;
      subtitle: string;
      primaryCta: {
        label: string;
        href: string;
      };
      secondaryCta: {
        label: string;
        href: string;
      };
    };
    services: {
      title: string;
      subtitle: string;
      items: ServiceLink[];
    };
    aboutSection: {
      subtitle: string;
      title: string;
      description: string;
      list: string[];
      primaryCta: {
        label: string;
        href: string;
      };
      phoneCta: {
        label: string;
        phone: string;
      };
      stats: {
        number: string;
        label: string;
      };
      image: string;
      promoCards: {
        discount: {
          title: string;
          description: string;
          cta: {
            label: string;
            href: string;
          };
        };
        offers: {
          title: string;
          image: string;
        };
      };
    };
    servicesSection: {
      subtitle: string;
      title: string;
      items: {
        label: string;
        title: string;
        description: string;
        image: string;
        href: string;
      }[];
    };
    testimonials: {
      subtitle: string;
      title: string;
      items: {
        name: string;
        role: string;
        message: string;
        image: string;
        rating: number;
      }[];
    };
    specialOffer: {
      promo: {
        subtitle: string;
        title: string;
        description: string;
        buttonText: string;
        badge: string;
        images: {
          locationStrap: string;
          sevenWonders: string;
          specialOffer: string;
        };
      };
      emptyLegs: {
        subtitle: string;
        title: string;
        description: string;
        backgroundImage: string;
        items: {
          departure: string;
          arrival: string;
          date: string;
          departureTime: string;
          arrivalTime: string;
          price: string;
          passengers: number;
        }[];
      };
    };
    charterRequest: {
      subtitle: string;
      title: string;
      description: string;
      tripTypes: {
        oneWay: string;
        roundTrip: string;
        multiLeg: string;
      };
      form: {
        from: string;
        to: string;
        departure: string;
        return: string;
        passengers: string;
        addFlight: string;
        removeFlight: string;
        submit: string;
      };
      images: {
        world: string;
        airplane: string;
        request: string;
      };
    };
    subscription: {
      subtitle: string;
      title: string;
      placeholder: string;
      buttonText: string;
      privacyText: string;
      privacyLink: string;
      images: {
        dotPattern: string;
        jetStack: string;
      };
    };
  };
  charter: {
    hero: {
      title: string;
      subtitle: string;
    };
    whatCharterMeans: {
      subtitle: string;
      title: string;
      description: string[];
      image: string;
    };
    flexibleAircraft: {
      subtitle: string;
      description: string;
    };
    whyTraviator: {
      subtitle: string;
      title: string;
      description: string;
      benefits: string[];
      image: string;
    };
    process: {
      subtitle: string;
      title: string;
      steps: {
        number: string;
        title: string;
        description: string;
      }[];
    };
    cta: {
      title: string;
      description: string;
      buttonText: string;
      buttonHref: string;
    };
  };
  emptyLegs: {
    hero: {
      title: string;
      subtitle: string;
    };
    whatEmptyLegMeans: {
      subtitle: string;
      title: string;
      description: string[];
      image: string;
    };
    flexibleTravel: {
      title: string;
      description: string[];
    };
    whyTraviator: {
      subtitle: string;
      title: string;
      description: string;
      benefits: string[];
    };
    callCard: {
      topText: string;
      mainText: string;
      bottomLabel: string;
    };
    featuredDeals: {
      subtitle: string;
      title: string;
      description: string;
    };
    process: {
      subtitle: string;
      title: string;
      steps: {
        number: string;
        title: string;
        description: string;
      }[];
    };
    cta: {
      title: string;
      description: string;
      buttonText: string;
      buttonHref: string;
    };
  };
  aircraftManagement: {
    hero: {
      title: string;
      subtitle: string;
    };
    managedFleet: {
      subtitle: string;
      title: string;
      description: string[];
      aircraft: {
        name: string;
        manufacturer: string;
        category: string;
        availability: string;
        capacity: string;
        baggage: string;
        range: string;
        speed: string;
        image: string;
      }[];
    };
    services: {
      subtitle: string;
      title: string;
      description: string;
      benefits: string[];
    };
    callCard: {
      topText: string;
      mainText: string;
      bottomLabel: string;
    };
    cta: {
      title: string;
      description: string;
      buttonText: string;
      buttonHref: string;
    };
  };
  jetAcquisition: {
    hero: {
      title: string;
      subtitle: string;
    };
    whatAcquisitionMeans: {
      subtitle: string;
      title: string;
      description: string[];
      image: string;
    };
    ownershipSimplified: {
      description: string;
    };
    acquisitionApproach: {
      subtitle: string;
      title: string;
      description: string;
      capabilities: string[];
    };
    callCard: {
      topText: string;
      mainText: string;
      bottomLabel: string;
    };
    cta: {
      title: string;
      description: string;
      buttonText: string;
      buttonHref: string;
    };
  };
  traviatorServices: {
    hero: {
      title: string;
      subtitle: string;
    };
    tabs: {
      id: string;
      label: string;
      title: string;
      description: string[];
      accentBox: string;
      image: string;
    }[];
    callCard: {
      topText: string;
      mainText: string;
      bottomLabel: string;
    };
    benefits: {
      title: string;
      description: string;
      items: string[];
      image: string;
    };
    cta: {
      title: string;
      description: string;
      buttonText: string;
      buttonHref: string;
    };
  };
  about: {
    title: string;
    body: string[];
    items: { title: string; href: string }[];
    intro: {
      subtitle: string;
      title: string;
      paragraphs: string[];
      image: string;
    };
    stats: {
      value: number;
      suffix: string;
      label: string;
    }[];
    videoCta: {
      title: string;
      backgroundImage: string;
      youtubeUrl: string;
    };
    team: {
      subtitle: string;
      title: string;
      members: {
        name: string;
        role: string;
        image: string;
        socials: {
          platform: "twitter" | "facebook" | "pinterest" | "instagram";
          href: string;
        }[];
      }[];
    };
    ctaBanner: {
      title: string;
      buttonText: string;
      buttonHref: string;
    };
  };
  contact: {
    subtitle: string;
    title: string;
    body: string[];
    cards: {
      title: string;
      subtitle: string;
      icon: "MapPin" | "Mail" | "Phone";
      content: string[];
    }[];
    form: {
      name: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
    };
  };
  legal: {
    privacy: {
      title: string;
      body: string[];
    };
    terms: {
      title: string;
      body: string[];
    };
  };
  footer: {
    groups: FooterLinkGroup[];
    note: string;
  };
  auth: AuthCopy;
};

export const content: LandingContent = {
  metadata: {
    title: "Traviator Jets",
    description:
      "Request-driven private aviation platform for charter, empty legs, jet inquiries, and premium services.",
  },
  brand: {
    name: "Traviator Jets",
    logo: {
      src: "/logo.svg",
      alt: "Traviator Jets",
      width: 40,
      height: 40,
    },
    fullLogo: {
      src: "/full-logo.svg",
      alt: "Traviator Jets",
      width: 160,
      height: 40,
    },
    banner: {
      location: "Lagos, Nigeria",
      email: "hello@traviatorjets.com",
      phone: "+234 (800) 123-4567",
      socials: [
        { platform: "instagram", href: "https://instagram.com/traviatorjets" },
        { platform: "twitter", href: "https://twitter.com/traviatorjets" },
        {
          platform: "linkedin",
          href: "https://linkedin.com/company/traviatorjets",
        },
      ],
    },
  },
  seo: {
    siteUrl: "https://traviatorjets.com",
    canonicalBase: "https://traviatorjets.com",
    titleTemplate: "%s | Traviator Jets",
    icons: {
      icon: "/logo.svg",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
    },
    sitemap: {
      excludePaths: ["/error", "/_not-found"],
    },
    robots: {
      userAgent: "*",
      allow: "/",
    },
  },
  routes: {
    public: [
      "/",
      "/about",
      "/contact",
      "/services",
      "/charter",
      "/empty-legs",
      "/services/jets-for-sale",
      "/services/concierge",
      "/privacy",
      "/terms",
      "/login",
      "/signup",
    ],
  },
  nav: {
    items: [
      { label: "Home", href: "/" },
      { label: "Charter", href: "/charter" },
      { label: "Empty Legs", href: "/empty-legs" },
      { label: "Aircraft Management", href: "/aircraft-management" },
      { label: "Services", href: "/services" },
      { label: "Our Company", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
    mobileItems: [
      { label: "Home", href: "/" },
      { label: "Charter", href: "/charter" },
      { label: "Empty Legs", href: "/empty-legs" },
      { label: "Aircraft Management", href: "/aircraft-management" },
      { label: "Jet Acquisition", href: "/services/jet-acquisition" },
      { label: "Traviator Services", href: "/services/traviator-services" },
      { label: "Our Company", href: "/about" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
    cta: {
      label: "Login",
      href: "/login",
    },
  },
  home: {
    hero: {
      images: [
        "/main-slider-1.jpg",
        "/main-slider-2.png",
        "/main-slider-2.jpg",
        "/main-slider-3.jpg",
      ],
      jetImage: "/jet.png",
      eyebrow: "Control the Way You Travel",
      title: "Built for Those Who Move Differently",
      subtitle:
        "Charter flights, empty legs, jet inquiries, and premium services — managed through request-driven conversations.",
      primaryCta: { label: "Book Now", href: "/charter" },
      secondaryCta: { label: "Read More", href: "/about" },
    },
    services: {
      title: "Services",
      subtitle: "Explore our core offerings.",
      items: [
        {
          title: "Jet Acquisition",
          description: "Inquire about jets for sale and financing options.",
          href: "/services/jet-acquisition",
        },
        {
          title: "Traviator Services",
          description: "Request quotes for additional premium services.",
          href: "/services/traviator-services",
        },
      ],
    },
    aboutSection: {
      subtitle: "Get to know us",
      title:
        "Our Traviator Jets saves you time, and gives you comfort in flights",
      description:
        "We deliver private ambitions with discipline and discretion. Every flight is structured around your time, your privacy, and your standards. No friction, no noise, just precise execution.",
      list: [
        "Global aircraft assets within hours",
        "Discrete end-to-end flight management",
        "Three financial intelligent aviation solution you",
      ],
      primaryCta: {
        label: "Discover more",
        href: "/about",
      },
      phoneCta: {
        label: "Call Anytime",
        phone: "+92 (8800) - 6780",
      },
      stats: {
        number: "12,500+",
        label: "International Clients",
      },
      image: "/home-about.jpg",
      promoCards: {
        discount: {
          title: "Get Discount On Your Flight",
          description:
            "Book your next private jet charter and enjoy exclusive savings on luxury travel.",
          cta: {
            label: "Discover More",
            href: "/charter",
          },
        },
        offers: {
          title: "Exclusive New Offers",
          image: "/home-discover.jpg",
        },
      },
    },
    charterRequest: {
      subtitle: "Book Your Flight",
      title: "Request a Charter Flight",
      description:
        "Experience luxury travel with our premium charter services. Fill in your details and we'll get back to you with the best options.",
      tripTypes: {
        oneWay: "One Way",
        roundTrip: "Round Trip",
        multiLeg: "Multi-Leg",
      },
      form: {
        from: "From",
        to: "To",
        departure: "Departure Date",
        return: "Return Date",
        passengers: "Passengers",
        addFlight: "Add Flight",
        removeFlight: "Remove",
        submit: "Submit Request",
      },
      images: {
        world: "/half-world.png",
        airplane: "/airplane-stacks.png",
        request: "/home-request.png",
      },
    },
    servicesSection: {
      subtitle: "What We're Offering",
      title: "Select the service according to your work",
      items: [
        {
          label: "Flight For",
          title: "Business Charter",
          description:
            "Efficient private travel for executives and corporate teams operating on tight schedules.",
          image: "/business-charter.jpg",
          href: "/services/traviator-services#business-charter",
        },
        {
          label: "Flight For",
          title: "Jet Rental",
          description:
            "Flexible aircraft access with immediate availability across global routes.",
          image: "/jet-rental.jpg",
          href: "/services/traviator-services#jet-rental",
        },
        {
          label: "Flight For",
          title: "Private Charter",
          description:
            "Exclusive jet travel designed for individuals and families who value privacy and comfort.",
          image: "/private-charter.jpg",
          href: "/services/traviator-services#private-charter",
        },
        {
          label: "Flight For",
          title: "High Profile People",
          description:
            "Discreet flight arrangements for high-visibility clients requiring elevated security and confidentiality.",
          image: "/high-profile-people.jpg",
          href: "/services/traviator-services#high-profile-people",
        },
        {
          label: "Flight For",
          title: "Sports Team Charter",
          description:
            "Spacious aircraft solutions designed for teams, staff, and equipment to travel together seamlessly.",
          image: "/sport-team-charter.jpg",
          href: "/services/traviator-services#sports-team-charter",
        },
      ],
    },
    testimonials: {
      subtitle: "Customers Feedback",
      title: "What they're talking about our flight services",
      items: [
        {
          name: "Sarah Albert",
          role: "Customer",
          message:
            "The service was exceptional from start to finish. The team made our business trip seamless and comfortable. Highly recommend Traviator Jets!",
          image: "/testimonial-1.jpg",
          rating: 5,
        },
        {
          name: "Jimmy Smith",
          role: "Customer",
          message:
            "Outstanding experience! The crew was professional and the jet was immaculate. Will definitely be using their services again.",
          image: "/testimonial-2.jpg",
          rating: 5,
        },
        {
          name: "Bonnie Tolbet",
          role: "Customer",
          message:
            "Traviator Jets exceeded all my expectations. The booking process was smooth and the flight was absolutely luxurious.",
          image: "/testimonial-3.jpg",
          rating: 5,
        },
        {
          name: "Christian Eve",
          role: "Customer",
          message:
            "First-class service all the way. The attention to detail and personalized care made this the best travel experience I've ever had.",
          image: "/testimonial-4.jpg",
          rating: 5,
        },
      ],
    },
    specialOffer: {
      promo: {
        subtitle: "Special Offer",
        title: "Best Service for Business People",
        description:
          "Experience luxury travel with our exclusive empty leg deals. Save up to 75% on private jet flights with our premium charter services.",
        buttonText: "Discover",
        badge: "Best Empty Leg Deals",
        images: {
          locationStrap: "/location-strap.webp",
          sevenWonders: "/seven-wonders.webp",
          specialOffer: "/special-offer.jpg",
        },
      },
      emptyLegs: {
        subtitle: "Private Flight",
        title: "Browse Legs for Our Charters",
        description:
          "Discover exclusive empty leg flights at unbeatable prices. Book your next luxury journey today.",
        backgroundImage: "/gray-world-map.png",
        items: [
          {
            departure: "JFK",
            arrival: "LAX",
            date: "Jan 15, 2026",
            departureTime: "10:00 AM",
            arrivalTime: "1:30 PM",
            price: "$5,000",
            passengers: 8,
          },
          {
            departure: "MIA",
            arrival: "ORD",
            date: "Jan 18, 2026",
            departureTime: "2:00 PM",
            arrivalTime: "5:30 PM",
            price: "$4,200",
            passengers: 6,
          },
          {
            departure: "DFW",
            arrival: "DEN",
            date: "Jan 20, 2026",
            departureTime: "9:00 AM",
            arrivalTime: "11:00 AM",
            price: "$3,500",
            passengers: 4,
          },
          {
            departure: "SFO",
            arrival: "SEA",
            date: "Jan 22, 2026",
            departureTime: "3:00 PM",
            arrivalTime: "5:00 PM",
            price: "$2,800",
            passengers: 6,
          },
        ],
      },
    },
    subscription: {
      subtitle: "Subscribe Now",
      title: "Want to know about our offers first?",
      placeholder: "Enter email address",
      buttonText: "Subscribe",
      privacyText: "I've read and accepted the",
      privacyLink: "Privacy Policy",
      images: {
        dotPattern: "/dot-pattern.png",
        jetStack: "/stack-jet-location.png",
      },
    },
  },
  charter: {
    hero: {
      title: "Private Jet Charter",
      subtitle: "Travel on your terms — without compromise",
    },
    whatCharterMeans: {
      subtitle: "What Charter Means",
      title: "A New Standard of Travel",
      description: [
        "Private jet charter removes the limitations of commercial flying.",
        "No long queues. No rigid schedules. No crowded terminals.",
        "You choose when to depart, where to land, and how you travel.",
        "From short regional trips to intercontinental journeys, every flight is tailored entirely around your needs — not an airline timetable.",
      ],
      image: "/service-page-1.jpg",
    },
    flexibleAircraft: {
      subtitle: "Flexible Aircraft Solutions",
      description:
        "Whether you require a light jet for a quick regional meeting, a midsize aircraft for business travel, or a long-range jet for international journeys, we source the optimal aircraft for your mission. Our global network provides access to thousands of vetted aircraft — without the responsibilities of ownership.",
    },
    whyTraviator: {
      subtitle: "Why Traviator Jets",
      title: "Precision. Discretion. Reliability.",
      description:
        "At Traviator Jets, chartering is not simply transportation — it is a fully managed experience designed around efficiency, safety, and privacy.",
      benefits: [
        "Access to a global network of premium aircraft",
        "Strict safety and operational standards",
        "Fully personalized flight arrangements",
        "Complete privacy and discretion",
        "Dedicated support from request to arrival",
      ],
      image: "/business-charter.jpg",
    },
    process: {
      subtitle: "Our Charter Process",
      title: "Simple. Efficient. Seamless.",
      steps: [
        {
          number: "01",
          title: "Request Your Trip",
          description: "Share your itinerary, preferences, and timing.",
        },
        {
          number: "02",
          title: "Receive Tailored Options",
          description: "We present the most suitable aircraft and routing.",
        },
        {
          number: "03",
          title: "Confirm & Prepare",
          description:
            "Your flight is arranged with full logistical coordination.",
        },
        {
          number: "04",
          title: "Fly Effortlessly",
          description:
            "Arrive minutes before departure and travel in total comfort.",
        },
      ],
    },
    cta: {
      title: "Fly Without Limits",
      description: "Speak with our team to arrange your next journey.",
      buttonText: "Request Quotes",
      buttonHref: "/login",
    },
  },
  emptyLegs: {
    hero: {
      title: "Empty Leg Flights",
      subtitle: "Private jet travel — at exceptional value",
    },
    whatEmptyLegMeans: {
      subtitle: "What Empty Leg Means",
      title: "Private Aviation's Best-Kept Advantage",
      description: [
        "Empty leg flights occur when a private jet is scheduled to fly without passengers, typically returning to base or repositioning for its next mission.",
        "Rather than flying empty, these aircraft can be booked at significantly reduced rates, offering the full private jet experience at exceptional value.",
        "Availability depends on existing aircraft schedules, making each opportunity unique and time-sensitive.",
      ],
      image: "/service-page-2.jpg",
    },
    flexibleTravel: {
      title: "Luxury Travel with Spontaneous Freedom",
      description: [
        "Empty leg flights are ideal for travelers who can adapt to predefined routes and departure times while still enjoying the privacy, comfort, and exclusivity of private aviation. From regional escapes to international journeys, these flights open access to destinations that might otherwise require full charter pricing.",
      ],
    },
    whyTraviator: {
      subtitle: "Why Traviator Jets",
      title: "Curated Opportunities. Same Premium Standards.",
      description:
        "Even at reduced rates, every empty leg flight arranged through Traviator Jets meets the same safety, quality, and service standards as a full private charter.",
      benefits: [
        "Substantial cost savings compared to full charter",
        "Access to premium aircraft and operators",
        "Verified safety and operational compliance",
        "Discreet and efficient travel experience",
        "Personalized coordination and support",
      ],
    },
    callCard: {
      topText: "Secure Your Flight",
      mainText: "Empty Leg Opportunities",
      bottomLabel: "Available 24/7",
    },
    featuredDeals: {
      subtitle: "Featured Empty Leg Opportunities",
      title: "Featured Empty Leg Opportunities",
      description:
        "Select repositioning flights currently available at exceptional value. Availability is limited and subject to change without notice.",
    },
    process: {
      subtitle: "Our Booking Process",
      title: "Simple. Fast. Time-Sensitive.",
      steps: [
        {
          number: "01",
          title: "Explore Available Routes",
          description:
            "Review current empty leg opportunities through your account.",
        },
        {
          number: "02",
          title: "Select Your Preferred Flight",
          description: "Choose the route and timing that best fits your plans.",
        },
        {
          number: "03",
          title: "Confirm Availability",
          description: "Our team verifies details and secures the aircraft.",
        },
        {
          number: "04",
          title: "Fly Privately",
          description:
            "Enjoy the full private jet experience at exceptional value.",
        },
      ],
    },
    cta: {
      title: "Access Exclusive Flights",
      description: "View current routes and availability.",
      buttonText: "Request Quotes",
      buttonHref: "/login",
    },
  },
  aircraftManagement: {
    hero: {
      title: "Aircraft Management",
      subtitle: "Professional oversight for your aviation asset",
    },
    managedFleet: {
      subtitle: "Managed Fleet",
      title: "Managed Fleet",
      description: [
        "Aircraft under our management reflect the operational standards, safety compliance, and service excellence we maintain across every mission. Each aircraft is supported by dedicated crews, rigorous maintenance oversight, and professional flight operations coordination.",
      ],
      aircraft: [
        {
          name: "Challenger 605",
          manufacturer: "Bombardier Aerospace",
          category: "Heavy",
          availability: "International & Local",
          capacity: "12 passengers",
          baggage: "115 cu ft",
          range: "3,834 NM",
          speed: "459 kts",
          image: "/2011-Challenger-605.webp",
        },
        {
          name: "Challenger 350",
          manufacturer: "Bombardier Aerospace",
          category: "Super Midsize",
          availability: "International & Local",
          capacity: "9 passengers",
          baggage: "106 cu ft",
          range: "3,200 NM",
          speed: "470 kts",
          image: "/Challenger 350.jpg",
        },
        {
          name: "Legacy 600",
          manufacturer: "Embraer",
          category: "Midsize",
          availability: "International & Local",
          capacity: "14 passengers",
          baggage: "286 cu ft",
          range: "3,400 NM",
          speed: "450 kts",
          image: "/Embraer Legacy 600.jpg",
        },
      ],
    },
    services: {
      subtitle: "Comprehensive Management Services",
      title: "End-to-End Operational Support",
      description:
        "Traviator Jets handles the complex requirements of aircraft ownership with precision and discretion, allowing owners to focus solely on flying.",
      benefits: [
        "Regulatory compliance and documentation",
        "Flight operations management",
        "Crew recruitment and scheduling",
        "Maintenance coordination and oversight",
        "Insurance and administrative support",
        "Hangar and ground logistics arrangements",
      ],
    },
    callCard: {
      topText: "Secure Your Aircraft",
      mainText: "Management Services",
      bottomLabel: "Available 24/7",
    },
    cta: {
      title: "Entrust Your Aircraft to Professionals",
      description:
        "Protect your investment with professional aviation management.",
      buttonText: "Request Consultation",
      buttonHref: "/contact",
    },
  },
  jetAcquisition: {
    hero: {
      title: "Jet Acquisition",
      subtitle: "Strategic guidance for private aircraft ownership",
    },
    whatAcquisitionMeans: {
      subtitle: "What Jet Acquisition Means",
      title: "A Smarter Approach to Ownership",
      description: [
        "Acquiring a private aircraft is a significant decision that extends beyond selecting a model. It involves evaluating performance, operating costs, regulatory requirements, and long-term value.",
        "With the right guidance, ownership becomes a strategic asset — tailored to your travel needs and operational priorities.",
      ],
      image: "/service-page-1.jpg",
    },
    ownershipSimplified: {
      description:
        "From initial selection to final delivery, we streamline the complexities of aircraft acquisition, allowing you to move forward with clarity and confidence. Every decision is aligned with your usage, financial considerations, and long-term ownership strategy.",
    },
    acquisitionApproach: {
      subtitle: "Our Acquisition Approach",
      title: "Discreet. Informed. Precise.",
      description:
        "Traviator Jets provides end-to-end advisory support throughout the acquisition process, ensuring every detail is handled with expertise and discretion.",
      capabilities: [
        "Aircraft sourcing through global networks",
        "Market analysis and valuation guidance",
        "Technical inspections and due diligence",
        "Negotiation and transaction support",
        "Regulatory and documentation coordination",
      ],
    },
    callCard: {
      topText: "Acquire with Confidence",
      mainText: "Jet Acquisition Advisory",
      bottomLabel: "Call any time",
    },
    cta: {
      title: "Acquire with Confidence",
      description: "Expert guidance. Informed decisions.",
      buttonText: "Request Consultation",
      buttonHref: "/contact",
    },
  },
  traviatorServices: {
    hero: {
      title: "Our Services",
      subtitle: "Tailored private aviation solutions",
    },
    tabs: [
      {
        id: "business-charter",
        label: "Business Charter",
        title: "Business Charter",
        description: [
          "Efficient, time-critical travel solutions designed for executives and corporate teams who require flexibility, reliability, and complete control over their schedules. Private aviation removes the constraints of commercial travel, allowing seamless movement between meetings, cities, and time zones.",
          "With access to strategically selected aircraft and optimized routing, business charter ensures minimal downtime and maximum productivity. Every journey is coordinated to align with your objectives, enabling you to travel with focus, privacy, and precision.",
        ],
        accentBox:
          "Business charter enables direct routing, flexible departure times, and complete privacy, allowing you to maximize productivity while traveling in comfort.",
        image: "/business-charter.jpg",
      },
      {
        id: "jet-charter",
        label: "Jet Charter",
        title: "Jet Charter",
        description: [
          "On-demand private jet access designed to accommodate both business and leisure travel, offering flexibility across a wide range of routes and aircraft types. Each flight is tailored to your schedule, ensuring that your journey is defined entirely by your preferences rather than fixed airline timetables.",
          "From short regional flights to long-haul international travel, jet charter provides a seamless experience supported by carefully selected aircraft and professional coordination. The result is a smooth, efficient journey built around comfort, timing, and convenience.",
        ],
        accentBox:
          "From regional trips to long-haul journeys, jet charter provides the freedom to travel when and how you choose, with full control over your experience.",
        image: "/jet-rental.jpg",
      },
      {
        id: "private-charter",
        label: "Private Charter",
        title: "Private Charter",
        description: [
          "A fully personalized aviation experience focused on privacy, comfort, and exclusivity. Private charter allows you to travel without interruption, offering complete control over your environment, schedule, and onboard experience from departure to arrival.",
          "Every element of the journey is arranged with attention to detail, ensuring a refined and seamless experience. From tailored cabin arrangements to discreet handling, private charter is designed for those who value comfort, control, and a higher standard of travel.",
        ],
        accentBox:
          "Private charter offers a level of discretion and comfort unmatched by commercial aviation, making it the preferred choice for those who value space, control, and peace of mind.",
        image: "/private-charter.jpg",
      },
      {
        id: "high-profile-travel",
        label: "High Profile Travel",
        title: "High Profile Travel",
        description: [
          "Specialized aviation solutions designed for individuals who require elevated levels of privacy, discretion, and security. Each journey is carefully managed to ensure confidentiality at every stage, from departure coordination to arrival handling.",
          "With strict operational protocols and controlled environments, high-profile travel minimizes exposure while maintaining efficiency and comfort. Every detail is handled with precision, ensuring a secure and seamless experience for clients who demand absolute discretion.",
        ],
        accentBox:
          "From secure ground handling to controlled flight operations, we ensure complete privacy and a seamless travel experience for high-profile clients.",
        image: "/high-profile-people.jpg",
      },
      {
        id: "sports-team-charter",
        label: "Sports Team Charter",
        title: "Sports Team Charter",
        description: [
          "Dedicated charter solutions tailored to the unique demands of professional sports teams, including players, coaching staff, and essential equipment. Travel logistics are carefully aligned with match schedules, training sessions, and performance requirements.",
          "Aircraft are selected to ensure comfort, space, and efficiency, allowing teams to travel together without disruption. With coordinated planning and execution, sports team charter supports performance by ensuring timely arrivals and a smooth travel experience.",
        ],
        accentBox:
          "Our sports charter solutions ensure teams arrive rested, prepared, and on time, with coordinated logistics that support peak performance.",
        image: "/sport-team-charter.jpg",
      },
    ],
    callCard: {
      topText: "Explore Our Services",
      mainText: "Premium Aviation Solutions",
      bottomLabel: "Call any time",
    },
    benefits: {
      title: "Why Choose Traviator Jets",
      description:
        "Every service we provide is built on a foundation of precision, reliability, and discretion. Our approach to private aviation ensures that each journey is executed to the highest operational and service standards.",
      items: [
        "Access to a global network of premium aircraft",
        "Strict safety and operational standards",
        "Personalized flight coordination",
        "Discreet and confidential service",
        "24/7 dedicated client support",
        "Seamless end-to-end travel experience",
      ],
      image: "/business-charter.jpg",
    },
    cta: {
      title: "Fly Without Limits",
      description: "Tailored aviation solutions, designed around you.",
      buttonText: "Request Consultation",
      buttonHref: "/contact",
    },
  },
  about: {
    title: "About Traviator Jets",
    body: [
      "Traviator Jets provides premium private aviation services with a client-first experience.",
      "Our platform is built around request-driven conversations to keep every deal organized end-to-end.",
    ],
    items: [
      { title: "About", href: "/about" },
      { title: "FAQs", href: "/faq" },
    ],
    intro: {
      subtitle: "About the Company",
      title: "The Best Private Jets Charter",
      paragraphs: [
        "Non augue egestas, commodo velit eget, vestibulum tellus. Curabitur vulputate justo elit, at elementum orci pulvinar vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
        "Ut non augue egestas, commodo velit eget, vestibulum tellus. Curabitur vulputate justo elit, at elementum orci pulvinar vel. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      ],
      image: "/about-img.jpg",
    },
    stats: [
      { value: 300, suffix: "+", label: "World Locations" },
      { value: 160, suffix: "+", label: "Airports" },
      { value: 50, suffix: "+", label: "Jets" },
      { value: 120, suffix: "+", label: "Pilots" },
    ],
    videoCta: {
      title: "Sharing Our Client Experience",
      backgroundImage: "/main-slider-1.jpg",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    team: {
      subtitle: "Meet Our Staff",
      title: "Our Professional Team",
      members: [
        {
          name: "Jessica Brown",
          role: "Management",
          image: "/team-1.jpg",
          socials: [
            { platform: "twitter", href: "#" },
            { platform: "facebook", href: "#" },
            { platform: "pinterest", href: "#" },
            { platform: "instagram", href: "#" },
          ],
        },
        {
          name: "Mike Hartson",
          role: "Senior Pilot",
          image: "/team-2.jpg",
          socials: [
            { platform: "twitter", href: "#" },
            { platform: "facebook", href: "#" },
            { platform: "pinterest", href: "#" },
            { platform: "instagram", href: "#" },
          ],
        },
        {
          name: "Sarah Albert",
          role: "Customer Relations",
          image: "/team-3.jpg",
          socials: [
            { platform: "twitter", href: "#" },
            { platform: "facebook", href: "#" },
            { platform: "pinterest", href: "#" },
            { platform: "instagram", href: "#" },
          ],
        },
      ],
    },
    ctaBanner: {
      title: "It's Time to Fly with Traviator Jets",
      buttonText: "Book Now",
      buttonHref: "/charter",
    },
  },
  contact: {
    subtitle: "Contact Us",
    title: "Feel free to get in touch with Traviator Jets",
    body: [
      "For inquiries, reach out using the details below.",
      "Contact form integration can be added later.",
    ],
    cards: [
      {
        title: "Visit",
        subtitle: "Our Location",
        icon: "MapPin" as const,
        content: ["123 Aviation Way, New York, NY 10001"],
      },
      {
        title: "Write",
        subtitle: "Send Email",
        icon: "Mail" as const,
        content: ["info@traviatorjets.com", "support@traviatorjets.com"],
      },
      {
        title: "Book",
        subtitle: "Call Now",
        icon: "Phone" as const,
        content: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      },
    ],
    form: {
      name: "Name",
      email: "Email Address",
      phone: "Phone Number",
      message: "Write Message",
      submit: "Send a Message",
    },
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      body: ["TBD"],
    },
    terms: {
      title: "Terms of Service",
      body: ["TBD"],
    },
  },
  footer: {
    groups: [
      {
        title: "Company",
        links: [
          { label: "About", href: "/about" },
          { label: "Aircraft Management", href: "/aircraft-management" },
          { label: "FAQs", href: "/faq" },
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Jet Chartering", href: "/charter" },
          { label: "Empty Legs", href: "/empty-legs" },
          { label: "Jet Acquisition", href: "/services/jet-acquisition" },
          { label: "Traviator Services", href: "/services/traviator-services" },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: "+234 (800) 123-4567", href: "tel:+2348001234567" },
          { label: "Lagos, Nigeria", href: "#" },
          {
            label: "hello@traviatorjets.com",
            href: "mailto:hello@traviatorjets.com",
          },
        ],
      },
    ],
    note:
      "© " + new Date().getFullYear() + " Traviator Jets. All rights reserved.",
  },
  auth: {
    login: {
      title: "Login",
      description: "Access your client account.",
      emailLabel: "Email",
      passwordLabel: "Password",
      rememberMeLabel: "Remember me",
      submitLabel: "Login",
      helperText: "UI only for now. Authentication wiring will be added later.",
      signupCta: { label: "Create an account", href: "/signup" },
    },
    signup: {
      title: "Sign up",
      description: "Create your client account.",
      nameLabel: "Full name",
      emailLabel: "Email",
      passwordLabel: "Password",
      submitLabel: "Create account",
      helperText: "UI only for now. Account creation will be added later.",
      loginCta: { label: "Already have an account? Login", href: "/login" },
    },
  },
};
