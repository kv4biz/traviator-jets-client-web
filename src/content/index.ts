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
  };
  about: {
    title: string;
    body: string[];
  };
  contact: {
    title: string;
    body: string[];
    email?: string;
    phone?: string;
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
      images: ["/main-slider-1.jpg", "/main-slider-2.jpg"],
      jetImage: "/jet.png",
      eyebrow: "Save time and fly with comfort",
      title: "Luxury Jet Flight",
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
          title: "Charter",
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
  },
  about: {
    title: "About Traviator Jets",
    body: [
      "Traviator Jets provides premium private aviation services with a client-first experience.",
      "Our platform is built around request-driven conversations to keep every deal organized end-to-end.",
    ],
  },
  contact: {
    title: "Contact",
    body: [
      "For inquiries, reach out using the details below.",
      "Contact form integration can be added later.",
    ],
    email: "TBD",
    phone: "TBD",
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
