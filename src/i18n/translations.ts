export type Language = 'de' | 'en';

export interface Translations {
  // Navigation
  nav: {
    services: string;
    process: string;
    about: string;
    contact: string;
    cta: string;
  };
  // Hero
  hero: {
    badge: string;
    title1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      years: string;
      customers: string;
      rating: string;
    };
    scrollIndicator: string;
  };
  // Services
  services: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    items: {
      hausmeister: {
        title: string;
        shortDesc: string;
        fullDesc: string;
        features: string[];
      };
      hecken: {
        title: string;
        shortDesc: string;
        fullDesc: string;
        features: string[];
      };
      rollrasen: {
        title: string;
        shortDesc: string;
        fullDesc: string;
        features: string[];
      };
      baumfaellung: {
        title: string;
        shortDesc: string;
        fullDesc: string;
        features: string[];
      };
      beet: {
        title: string;
        shortDesc: string;
        fullDesc: string;
        features: string[];
      };
      pflaster: {
        title: string;
        shortDesc: string;
        fullDesc: string;
        features: string[];
      };
      reinigung: {
        title: string;
        shortDesc: string;
        fullDesc: string;
        features: string[];
      };
      zaun: {
        title: string;
        shortDesc: string;
        fullDesc: string;
        features: string[];
      };
    };
    modal: {
      cta: string;
      close: string;
      featuresTitle: string;
    };
  };
  // Process
  process: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      beratung: {
        number: string;
        title: string;
        description: string;
      };
      angebot: {
        number: string;
        title: string;
        description: string;
      };
      ausfuehrung: {
        number: string;
        title: string;
        description: string;
      };
    };
    cta: string;
    trust: {
      satisfaction: string;
      freeConsultation: string;
      fastResponse: string;
    };
  };
  // About
  about: {
    badge: string;
    title: string;
    intro1: string;
    intro2: string;
    valuesTitle: string;
    values: string[];
    serviceAreaTitle: string;
    serviceAreaNote: string;
    contactTitle: string;
    stats: {
      years: string;
      customers: string;
      quality: string;
    };
  };
  // Testimonials
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
    rating: string;
    reviews: string;
  };
  // Contact
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    trust: {
      fixedPrice: string;
      onTime: string;
      clean: string;
    };
    form: {
      title: string;
      name: string;
      email: string;
      phone: string;
      address: string;
      message: string;
      referral: string;
      referralOptions: {
        select: string;
        google: string;
        recommendation: string;
        social: string;
        passing: string;
        other: string;
      };
      privacy: string;
      privacyLink: string;
      submit: string;
      submitting: string;
      required: string;
      success: {
        title: string;
        message: string;
        newRequest: string;
      };
      error: string;
    };
  };
  // Footer
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    socialMedia: string;
    copyright: string;
    legal: {
      imprint: string;
      privacy: string;
      jobs: string;
    };
  };
  // Cookie Consent
  cookie: {
    title: string;
    description: string;
    acceptAll: string;
    necessaryOnly: string;
    learnMore: string;
    settings: {
      title: string;
      essential: string;
      essentialDesc: string;
      analytics: string;
      analyticsDesc: string;
      save: string;
      back: string;
    };
  };
  // Language Toggle
  language: {
    de: string;
    en: string;
  };
}

export const translations: Record<Language, Translations> = {
  de: {
    nav: {
      services: 'Leistungen',
      process: 'Ablauf',
      about: 'Über uns',
      contact: 'Kontakt',
      cta: 'Termin anfragen',
    },
    hero: {
      badge: 'Seit 2015 für Sie da',
      title1: 'Ihr Traumgarten in besten Händen',
      subtitle: 'Genießen Sie Ihre Freizeit – wir übernehmen die Arbeit. Damit Ihr Garten zu jeder Jahreszeit in voller Pracht erstrahlt, bieten wir Ihnen eine fachgerechte Pflege, exakt abgestimmt auf Ihre Wünsche.',
      ctaPrimary: 'Termin anfragen',
      ctaSecondary: 'Leistungen ansehen',
      stats: {
        years: 'Jahre Erfahrung',
        customers: 'Zufriedene Kunden',
        rating: 'Bewertung',
      },
      scrollIndicator: 'Scrollen',
    },
    services: {
      badge: 'Unsere Leistungen',
      title: 'Alles für Ihren Garten',
      subtitle: 'Von der regelmäßigen Pflege bis zur kompletten Neugestaltung—wir bieten Ihnen alle Services aus einer Hand.',
      cta: 'Fragen Sie uns unverbindlich an',
      items: {
        hausmeister: {
          title: 'Hausmeisterservice',
          shortDesc: 'Professionelle Betreuung und Instandhaltung Ihrer Immobilie.',
          fullDesc: 'Unser Hausmeisterservice kümmert sich um alle anfallenden Arbeiten rund um Ihre Immobilie. Von kleinen Reparaturen bis zur regelmäßigen Reinigung – wir sorgen dafür, dass alles einwandfrei funktioniert und gepflegt aussieht.',
          features: [
            'Montage, Reparatur & Pflegeservice',
            'Durchführung kleiner Reparaturen',
            'Treppenhaus- und Flurreinigung',
            'Reinigung von Gehwegen, Zufahrten und Parkplätzen',
            'Außenreinigung von Wohnanlagen',
            'Kleine Ausbesserungsarbeiten in Wohnungen & Gemeinschaftsräumen',
            'Austauschen von Glühbirnen',
          ],
        },
        hecken: {
          title: 'Hecken- & Strauchschnitt',
          shortDesc: 'Wir geben Ihrer grünen Wand den perfekten Rahmen.',
          fullDesc: 'Damit Ihre Hecke dauerhaft blickdicht bleibt und nicht verkahlt, braucht sie fachkundige Pflege. Wir kombinieren präzise Ästhetik mit botanischem Know-how, um die Vitalität Ihrer Pflanzen langfristig zu sichern.',
          features: [
            'Präziser Formschnitt',
            'Gesundes Wachstum',
            'Rundum-Service',
            'Natur im Blick',
          ],
        },
        rollrasen: {
          title: 'Rollrasen',
          shortDesc: 'Sofortige Grünfläche ohne lange Wartezeiten.',
          fullDesc: 'Rollrasen bietet eine sofortige Grünfläche ohne lange Wartezeiten. Da er bereits ausgewachsen ist, reduziert er die Erosion des Bodens und minimiert das Risiko von Unkrautwachstum. Außerdem ermöglicht Rollrasen eine gleichmäßige und dichte Rasenfläche ohne kahle Stellen.',
          features: ['Sofortige Grünfläche', 'Minimiert Unkrautwachstum', 'Reduziert Bodenerosion', 'Gleichmäßige Rasenfläche'],
        },
        baumfaellung: {
          title: 'Baumfällung & Baumpflege',
          shortDesc: 'Fachgerechte Baumarbeit – von der Kronenpflege bis zur sicheren Fällung.',
          fullDesc: 'Bäume sind wertvolle Bestandteile Ihres Gartens, benötigen aber fachkundige Aufmerksamkeit, um vital und sicher zu bleiben. Wir unterstützen Sie mit professioneller Baumpflege und führen notwendige Fällungen selbst an schwierigsten Standorten sicher durch.',
          features: [
            'Fachgerechte Baumpflege',
            'Baumfällung',
            'Sturmschadenbeseitigung',
            'Wurzelstockentfernung',
          ],
        },
        beet: {
          title: 'Beet- & Pflanzenpflege',
          shortDesc: 'Ein prachtvoller Garten braucht mehr als nur Wasser.',
          fullDesc: 'Hinter jedem blühenden Beet steckt viel Arbeit und das nötige Wissen um die richtige Pflege. Wir kümmern uns mit Leidenschaft um Ihre Pflanzenwelt, damit Sie das ganze Jahr über eine farbenfrohe und vitale Wohlfühloase genießen können.',
          features: [
            'Unkraut- & Wildkrautmanagement',
            'Individuelle Düngung',
            'Saisonale Bepflanzung',
            'Rückschnitt von Stauden & Gräsern',
          ],
        },
        pflaster: {
          title: 'Pflasterarbeiten',
          shortDesc: 'Ästhetische und funktionale Außenbereiche.',
          fullDesc: 'Der Pflasterbau am Haus verleiht nicht nur Ihrem Zuhause eine ästhetische Note, sondern verbessert auch die Funktionalität und Zugänglichkeit der Außenbereiche. Durch sorgfältig geplante und professionell ausgeführte Pflasterarbeiten können Sie Ihre Wege, Einfahrten und Terrassen sicher und ansprechend gestalten.',
          features: ['Gartenwege & Terrassen', 'Einfahrten', 'Hochbeete & Mauern', 'Professionelle Planung'],
        },
        reinigung: {
          title: 'Pflasterreinigung',
          shortDesc: 'Ihre Pflastersteine wie neu.',
          fullDesc: 'Pflastersteine eignen sich perfekt für Gartenwege, Terrassen und Einfahrten, aber sie können mit der Zeit Schmutz und Unkrautansammlungen aufweisen. Unser professioneller Pflasterreinigungsservice verbessert die Ästhetik Ihres Außenbereichs und verlängert gleichzeitig die Lebensdauer Ihrer Pflastersteine.',
          features: ['Hochdruckreinigung', 'Unkrautentfernung', 'Fugenreinigung', 'Versiegelung auf Wunsch'],
        },
        zaun: {
          title: 'Zauninstallation',
          shortDesc: 'Schutz, Sichtschutz und Verschönerung.',
          fullDesc: 'Zäune erfüllen vielfältige Zwecke jenseits der reinen Abgrenzung von Gärten. Sie bieten Schutz vor Witterungseinflüssen, dienen als Sichtschutz und tragen oft zur Verschönerung des Gartens bei. Egal, ob Sie Ihr Grundstück umzäunen möchten oder bestimmte Bereiche im Garten mit einem attraktiven Holzzaun hervorheben wollen.',
          features: ['Holzzäune', 'Sichtschutzzäune', 'Gartenzäune', 'Individuelle Gestaltung'],
        },
      },
      modal: {
        cta: 'Jetzt anfragen',
        close: 'Schließen',
        featuresTitle: 'Unsere Leistungen im Überblick:',
      },
    },
    process: {
      badge: 'Unser Ablauf',
      title: 'So funktioniert\'s',
      subtitle: 'Drei einfache Schritte zu Ihrem Traumgarten. Transparent, fair und professionell.',
      steps: {
        beratung: {
          number: '01',
          title: 'Individuelle Beratung',
          description: 'Sie werden von uns kompetent vor Ort in Ihrem Garten beraten. Unser Know-How hilft Ihnen, die richtigen Entscheidungen zu treffen. Diese Beratung ist für Sie kostenlos.',
        },
        angebot: {
          number: '02',
          title: 'Maßgeschneidertes Angebot',
          description: 'Nachdem wir eine Kalkulation erstellt haben, erstellen wir Ihnen ein unverbindliches Angebot. Wir sind sicher, dass Sie dieses überzeugen wird.',
        },
        ausfuehrung: {
          number: '03',
          title: 'Professionelle Ausführung',
          description: 'In gewohnter guter Qualität führen wir die Arbeiten wie besprochen durch. Danach können Sie das Ergebnis genießen. Erst wenn Sie zufrieden sind, sind wir es auch.',
        },
      },
      cta: 'Kostenlose Beratung vereinbaren',
      trust: {
        satisfaction: 'Zufriedenheitsgarantie',
        freeConsultation: 'Kostenlose Erstberatung',
        fastResponse: 'Schnelle Rückmeldung',
      },
    },
    about: {
      badge: 'Über uns',
      title: 'Ihr verlässlicher Partner',
      intro1: 'Seit 2015 sind wir, die Firma Gartenpflege Khan, für unsere Kunden da. Wir sind Ihr verlässlicher Partner bei den Themen Gartenbau und Landschaftsbau.',
      intro2: 'Sei es eine Baumfällung oder eine komplette Neugestaltung, seien es Pflanzenarbeiten oder die Verlegung von Rollrasen—wir machen das für Sie in bester Qualität.',
      valuesTitle: 'Das steht für uns:',
      values: [
        'Zuverlässigkeit & Termintreue',
        'Saubere & präzise Arbeit',
        'Faire & transparente Preise',
        'Persönliche Betreuung',
        'Nachhaltige Methoden',
        'Kostenlose Beratung',
      ],
      serviceAreaTitle: 'Unser Servicegebiet',
      serviceAreaNote: 'Für weitere Städte nach Fragen.',
      contactTitle: 'Direkt kontaktieren',
      stats: {
        years: 'Jahre Erfahrung',
        customers: 'Zufriedene Kunden',
        quality: 'Qualitätsversprechen',
      },
    },
    testimonials: {
      badge: 'Kundenstimmen',
      title: 'Das sagen unsere Kunden',
      subtitle: 'Zufriedene Kunden machen uns glücklich. Lassen Sie sich von ihren Erfahrungen überzeugen.',
      rating: 'Google Bewertung',
      reviews: 'Bewertungen',
    },
    contact: {
      badge: 'Kontakt',
      title: 'Lassen Sie uns loslegen',
      subtitle: 'Rufen Sie an oder schreiben Sie uns—wir melden uns innerhalb eines Werktags.',
      trust: {
        fixedPrice: 'Festpreisangebot',
        onTime: 'Termintreue',
        clean: 'Saubere Abnahme',
      },
      form: {
        title: 'Schreiben Sie uns',
        name: 'Name',
        email: 'E-Mail',
        phone: 'Telefon',
        address: 'Adresse',
        message: 'Nachricht',
        referral: 'Wie wurden Sie auf uns aufmerksam?',
        referralOptions: {
          select: 'Bitte auswählen',
          google: 'Google Suche',
          recommendation: 'Empfehlung',
          social: 'Social Media',
          passing: 'Vorbeifahrt',
          other: 'Andere',
        },
        privacy: 'Ich habe die',
        privacyLink: 'Datenschutzerklärung',
        submit: 'Anfrage senden',
        submitting: 'Wird gesendet...',
        required: 'Pflichtfelder - Wir benötigen diese Informationen, um Ihnen einen besseren Service liefern zu können.',
        success: {
          title: 'Vielen Dank für Ihre Anfrage!',
          message: 'Wir haben Ihre Nachricht erhalten und melden uns innerhalb eines Werktags bei Ihnen.',
          newRequest: 'Neue Anfrage senden',
        },
        error: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns an.',
      },
    },
    footer: {
      description: 'Professionelle Gartenpflege & Landschaftsbau seit 2015. Wir verwandeln Ihren Garten in eine Oase—zuverlässig, sauber, mit Liebe zum Detail.',
      quickLinks: 'Schnelllinks',
      services: 'Leistungen',
      socialMedia: 'Folgen Sie uns',
      copyright: 'Alle Rechte vorbehalten.',
      legal: {
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        jobs: 'Jobs',
      },
    },
    cookie: {
      title: 'Datenschutzeinstellungen',
      description: 'Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige Cookies sind für den Betrieb der Website erforderlich, während andere uns helfen, die Website zu verbessern und Ihnen personalisierte Inhalte anzuzeigen.',
      acceptAll: 'Alle akzeptieren',
      necessaryOnly: 'Nur notwendige',
      learnMore: 'Mehr erfahren',
      settings: {
        title: 'Cookie-Einstellungen',
        essential: 'Notwendige Cookies',
        essentialDesc: 'Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. Sie speichern keine persönlichen Informationen.',
        analytics: 'Analyse-Cookies',
        analyticsDesc: 'Helfen uns zu verstehen, wie Besucher mit der Website interagieren, indem sie Informationen anonym sammeln.',
        save: 'Einstellungen speichern',
        back: 'Zurück',
      },
    },
    language: {
      de: 'DE',
      en: 'EN',
    },
  },
  en: {
    nav: {
      services: 'Services',
      process: 'Process',
      about: 'About Us',
      contact: 'Contact',
      cta: 'Request Appointment',
    },
    hero: {
      badge: 'Serving you since 2015',
      title1: 'Your dream garden in the best hands',
      subtitle: 'Enjoy your free time – we take care of the work. So that your garden shines in full glory in every season, we offer you professional care, precisely tailored to your wishes.',
      ctaPrimary: 'Request Appointment',
      ctaSecondary: 'View Services',
      stats: {
        years: 'Years Experience',
        customers: 'Happy Customers',
        rating: 'Rating',
      },
      scrollIndicator: 'Scroll',
    },
    services: {
      badge: 'Our Services',
      title: 'Everything for Your Garden',
      subtitle: 'From regular maintenance to complete redesign—we offer all services from a single source.',
      cta: 'Ask us for a non-binding offer',
      items: {
        hausmeister: {
          title: 'Property Maintenance',
          shortDesc: 'Professional care and maintenance of your property.',
          fullDesc: 'Our property maintenance service takes care of all work around your property. From small repairs to regular cleaning – we ensure that everything works perfectly and looks well-maintained.',
          features: [
            'Assembly, repair & maintenance service',
            'Carrying out small repairs',
            'Stairwell and corridor cleaning',
            'Cleaning of walkways, driveways and parking lots',
            'Exterior cleaning of residential complexes',
            'Small repair work in apartments & common areas',
            'Replacing light bulbs',
          ],
        },
        hecken: {
          title: 'Hedge & Shrub Trimming',
          shortDesc: 'We give your green wall the perfect frame.',
          fullDesc: 'So that your hedge remains permanently opaque and does not become bare, it needs expert care. We combine precise aesthetics with botanical know-how to ensure the vitality of your plants in the long term.',
          features: [
            'Precise shape cutting',
            'Healthy growth',
            'All-round service',
            'Nature in focus',
          ],
        },
        rollrasen: {
          title: 'Turf Installation',
          shortDesc: 'Instant green space without long waiting times.',
          fullDesc: 'Turf offers an instant green space without long waiting times. Since it is already fully grown, it reduces soil erosion and minimizes the risk of weed growth. Additionally, turf enables an even and dense lawn surface without bare spots.',
          features: ['Instant green space', 'Minimizes weed growth', 'Reduces soil erosion', 'Even lawn surface'],
        },
        baumfaellung: {
          title: 'Tree Felling & Tree Care',
          shortDesc: 'Professional tree work – from crown care to safe felling.',
          fullDesc: 'Trees are valuable components of your garden, but require expert attention to remain vital and safe. We support you with professional tree care and carry out necessary felling even at the most difficult locations safely.',
          features: [
            'Professional tree care',
            'Tree felling',
            'Storm damage removal',
            'Root stock removal',
          ],
        },
        beet: {
          title: 'Bed & Plant Care',
          shortDesc: 'A magnificent garden needs more than just water.',
          fullDesc: 'Behind every blooming bed is a lot of work and the necessary knowledge about proper care. We take care of your plant world with passion, so that you can enjoy a colorful and vital oasis of well-being all year round.',
          features: [
            'Weed & wild weed management',
            'Individual fertilization',
            'Seasonal planting',
            'Pruning of perennials & grasses',
          ],
        },
        pflaster: {
          title: 'Paving Work',
          shortDesc: 'Aesthetic and functional outdoor areas.',
          fullDesc: 'Paving not only gives your home an aesthetic touch, but also improves the functionality and accessibility of outdoor areas. Through carefully planned and professionally executed paving work, you can design your paths, driveways, and terraces safely and attractively.',
          features: ['Garden paths & terraces', 'Driveways', 'Raised beds & walls', 'Professional planning'],
        },
        reinigung: {
          title: 'Paver Cleaning',
          shortDesc: 'Your pavers like new.',
          fullDesc: 'Pavers are perfect for garden paths, terraces, and driveways, but they can accumulate dirt and weeds over time. Our professional paver cleaning service improves the aesthetics of your outdoor area while extending the lifespan of your pavers.',
          features: ['High-pressure cleaning', 'Weed removal', 'Joint cleaning', 'Sealing on request'],
        },
        zaun: {
          title: 'Fence Installation',
          shortDesc: 'Protection, privacy, and beautification.',
          fullDesc: 'Fences serve multiple purposes beyond simply delineating gardens. They provide protection from weather, serve as privacy screens, and often contribute to garden beautification. Whether you want to fence your property or highlight certain areas in the garden with an attractive wooden fence.',
          features: ['Wooden fences', 'Privacy fences', 'Garden fences', 'Individual design'],
        },
      },
      modal: {
        cta: 'Inquire now',
        close: 'Close',
        featuresTitle: 'Our services at a glance:',
      },
    },
    process: {
      badge: 'Our Process',
      title: 'How It Works',
      subtitle: 'Three simple steps to your dream garden. Transparent, fair, and professional.',
      steps: {
        beratung: {
          number: '01',
          title: 'Individual Consultation',
          description: 'You will be competently advised by us on-site in your garden. Our expertise helps you make the right decisions. This consultation is free of charge for you.',
        },
        angebot: {
          number: '02',
          title: 'Tailored Offer',
          description: 'After we have created a calculation, we will provide you with a non-binding offer. We are sure that you will be convinced.',
        },
        ausfuehrung: {
          number: '03',
          title: 'Professional Execution',
          description: 'In our usual high quality, we carry out the work as agreed. Afterwards, you can enjoy the result. Only when you are satisfied are we satisfied.',
        },
      },
      cta: 'Arrange free consultation',
      trust: {
        satisfaction: 'Satisfaction Guarantee',
        freeConsultation: 'Free Initial Consultation',
        fastResponse: 'Fast Response',
      },
    },
    about: {
      badge: 'About Us',
      title: 'Your Reliable Partner',
      intro1: 'Since 2015, we, Gartenpflege Khan, have been there for our customers. We are your reliable partner for garden construction and landscaping.',
      intro2: 'Whether it is tree felling or a complete redesign, planting work or turf installation—we do it for you in the best quality.',
      valuesTitle: 'What we stand for:',
      values: [
        'Reliability & Punctuality',
        'Clean & Precise Work',
        'Fair & Transparent Prices',
        'Personal Support',
        'Sustainable Methods',
        'Free Consultation',
      ],
      serviceAreaTitle: 'Our Service Area',
      serviceAreaNote: 'Please inquire for additional cities.',
      contactTitle: 'Contact us directly',
      stats: {
        years: 'Years Experience',
        customers: 'Happy Customers',
        quality: 'Quality Promise',
      },
    },
    testimonials: {
      badge: 'Customer Reviews',
      title: 'What Our Customers Say',
      subtitle: 'Happy customers make us happy. Let their experiences convince you.',
      rating: 'Google Rating',
      reviews: 'Reviews',
    },
    contact: {
      badge: 'Contact',
      title: 'Let\'s Get Started',
      subtitle: 'Call us or write to us—we will get back to you within one business day.',
      trust: {
        fixedPrice: 'Fixed Price Offer',
        onTime: 'On Time',
        clean: 'Clean Handover',
      },
      form: {
        title: 'Write to us',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        address: 'Address',
        message: 'Message',
        referral: 'How did you hear about us?',
        referralOptions: {
          select: 'Please select',
          google: 'Google Search',
          recommendation: 'Recommendation',
          social: 'Social Media',
          passing: 'Passing by',
          other: 'Other',
        },
        privacy: 'I have read the',
        privacyLink: 'Privacy Policy',
        submit: 'Send Inquiry',
        submitting: 'Sending...',
        required: 'Required fields - We need this information to provide you with better service.',
        success: {
          title: 'Thank you for your inquiry!',
          message: 'We have received your message and will get back to you within one business day.',
          newRequest: 'Send new inquiry',
        },
        error: 'An error occurred. Please try again later or call us.',
      },
    },
    footer: {
      description: 'Professional garden care & landscaping since 2015. We transform your garden into an oasis—reliable, clean, with attention to detail.',
      quickLinks: 'Quick Links',
      services: 'Services',
      socialMedia: 'Follow Us',
      copyright: 'All rights reserved.',
      legal: {
        imprint: 'Imprint',
        privacy: 'Privacy',
        jobs: 'Jobs',
      },
    },
    cookie: {
      title: 'Privacy Settings',
      description: 'We use cookies and similar technologies to provide you with the best possible experience on our website. Some cookies are necessary for the operation of the website, while others help us improve the website and show you personalized content.',
      acceptAll: 'Accept All',
      necessaryOnly: 'Necessary Only',
      learnMore: 'Learn More',
      settings: {
        title: 'Cookie Settings',
        essential: 'Essential Cookies',
        essentialDesc: 'These cookies are necessary for the operation of the website and cannot be disabled. They do not store personal information.',
        analytics: 'Analytics Cookies',
        analyticsDesc: 'Help us understand how visitors interact with the website by collecting information anonymously.',
        save: 'Save Settings',
        back: 'Back',
      },
    },
    language: {
      de: 'DE',
      en: 'EN',
    },
  },
};

export default translations;
