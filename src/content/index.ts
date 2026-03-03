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
      "/services/charter",
      "/services/empty-legs",
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
      { label: "Services", href: "/services" },
      { label: "About", href: "/about" },
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
      primaryCta: { label: "Book Now", href: "/services/charter" },
      secondaryCta: { label: "Read More", href: "/about" },
    },
    services: {
      title: "Services",
      subtitle: "Explore our core offerings.",
      items: [
        {
          title: "Jet Chartering",
          description: "Request a private flight tailored to your schedule.",
          href: "/services/charter",
        },
        {
          title: "Empty Legs",
          description: "Discover available empty legs and request a deal.",
          href: "/services/empty-legs",
        },
        {
          title: "Jets for Sale",
          description: "Inquire about jets for sale and financing options.",
          href: "/services/jets-for-sale",
        },
        {
          title: "Concierge",
          description: "Request quotes for additional premium services.",
          href: "/services/concierge",
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
      image: "/home-about-img.jpg",
      promoCards: {
        discount: {
          title: "Get Discount On Your Flight",
          description:
            "Book your next private jet charter and enjoy exclusive savings on luxury travel.",
          cta: {
            label: "Discover More",
            href: "/services/charter",
          },
        },
        offers: {
          title: "Exclusive New Offers",
          image: "/home-discover-img.jpg",
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
          description: "Non augue egestas, commodo velit eget, tellus.",
          image: "/services-1.jpg",
          href: "/services/business-charter",
        },
        {
          label: "Flight For",
          title: "Private Charter",
          description: "Non augue egestas, commodo velit eget, tellus.",
          image: "/services-2.jpg",
          href: "/services/private-charter",
        },
        {
          label: "Flight For",
          title: "Jet Rentals",
          description: "Non augue egestas, commodo velit eget, tellus.",
          image: "/services-3.jpg",
          href: "/services/jet-rentals",
        },
        {
          label: "Flight For",
          title: "High Profile People",
          description: "Non augue egestas, commodo velit eget, tellus.",
          image: "/services-4.jpg",
          href: "/services/high-profile",
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
      buttonHref: "/services/charter",
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
          { label: "Contact", href: "/contact" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Charter", href: "/services/charter" },
          { label: "Empty Legs", href: "/services/empty-legs" },
          { label: "Jets for Sale", href: "/services/jets-for-sale" },
          { label: "Concierge", href: "/services/concierge" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
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
