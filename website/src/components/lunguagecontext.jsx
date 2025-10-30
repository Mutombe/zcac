import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      whatWeDo: 'What We Do',
      projects: 'Projects',
      blog: 'Blog',
      media: 'Media',
      resources: 'Resources',
      gallery: 'Gallery',
      events: 'Events',
      faqs: 'FAQs',
      contact: 'Contact',
    },
    home: {
      hero: {
        badge: 'Leading Climate Action in Zimbabwe',
        title: 'Building A Resilient',
        subtitle: 'Low-Carbon Zimbabwe',
        description: 'Inclusive, high impact, high-integrity climate action for resilience and sustainable development.',
        cta1: 'Join Us',
        cta2: 'Learn More',
      },
      stats: {
        projects: 'Projects',
        communities: 'Communities Reached',
        investment: 'Investment',
        jobs: 'Green Jobs Created',
        co2: 'CO₂e Reduced',
        trained: 'Trained',
        invested: 'Invested',
      },
      vision: {
        title: 'Our Vision',
        text: 'A Zimbabwe where climate action drives inclusive prosperity, environmental resilience, and sustainable livelihoods for all communities, ensuring no one is left behind in the transition to a low-carbon future.',
      },
      promise: {
        title: 'Our Promise',
        text: 'We commit to delivering high-integrity climate solutions that prioritize community empowerment, transparent governance, and measurable impact while fostering partnerships that create lasting value for Zimbabwe.',
      },
      services: {
        title: 'Core Services',
        subtitle: 'Comprehensive climate solutions for lasting impact',
        policy: {
          title: 'Policy Advisory',
          description: 'Expert guidance on environmental policy and climate legislation',
        },
        mrv: {
          title: 'MRV & Verification',
          description: 'Rigorous monitoring, reporting, and verification services',
        },
        incubation: {
          title: 'Project Incubation',
          description: 'Support for bankable climate projects from concept to execution',
        },
        academy: {
          title: 'Green Skills Academy',
          description: 'Training and certification in climate action and sustainability',
        },
      },
      principles: {
        title: 'Our Principles',
        subtitle: 'Delivering climate action with integrity and impact',
        items: {
          community: 'Community-First Approach with FPIC',
          integrity: 'Investor-Grade Integrity & MRV',
          partnership: 'Partnership with Government & Regulators',
          finance: 'Market-Smart Finance Solutions',
          learning: 'Continuous Learning & Accountability',
          transparency: 'Transparent Digital Registry',
        },
      },
      cta: {
        title: 'Ready to Make an Impact?',
        subtitle: 'Join us in building a resilient, sustainable Zimbabwe through inclusive climate action.',
        button1: 'Get Involved Today',
        button2: 'Explore Projects',
      },
    },
    about: {
      title: 'About CACZ',
      vision: 'Our Vision',
      promise: 'Our Promise',
    },
    services: {
      title: 'What We Do',
      subtitle: 'Comprehensive Climate Action Services',
    },
    contact: {
      title: 'Get In Touch',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
    },
    common: {
      learnMore: 'Learn More',
      loading: 'Loading...',
    },
  },
  nd: {
    nav: {
      home: 'Ikhaya',
      about: 'Ngathi',
      whatWeDo: 'Esikwenzayo',
      projects: 'Imisebenzi',
      blog: 'Ibhulogi',
      media: 'Imidiya',
      resources: 'Izinsiza',
      gallery: 'Igalari',
      events: 'Imicimbi',
      faqs: 'Imibuzo',
      contact: 'Xhumana',
    },
    home: {
      hero: {
        badge: 'Sihola Imisebenzi Yesimo Sezulu eZimbabwe',
        title: 'Sakha I-Zimbabwe',
        subtitle: 'Eqinileyo Nencane Yekhaboni',
        description: 'Ukwenza okuhle kwesimo sezulu, ukuqinisa lokulungisa imvelo.',
        cta1: 'Hlanganyela Lathi',
        cta2: 'Funda Okunengi',
      },
      stats: {
        projects: 'Imisebenzi',
        communities: 'Imiphakathi Efinyelelwe',
        investment: 'Imali Efakiwe',
        jobs: 'Imisebenzi Eluhlaza',
        co2: 'CO₂ Yancipha',
        trained: 'Bafundisiwe',
        invested: 'Imali',
      },
      vision: {
        title: 'Umbono Wethu',
        text: 'I-Zimbabwe lapho imisebenzi yesimo sezulu iholela empumelelweni yonke, ukuqinisa imvelo, lokuphila okuhle kwazo zonke izimphakathi, kuqinisekiswa ukuthi akukho osalayo ekuguqukeni kwesikhathi esizayo esinekhaboni encane.',
      },
      promise: {
        title: 'Isithembiso Sethu',
        text: 'Siyazibophezela ekuletheni izixazululo zesimo sezulu eziqinileyo ezibeka phambili ukuqinisa imiphakathi, ukubusa okucacileyo, kanye nomphumela obalulekile kuyilapho sikhuthaza ubambiswano oludala inani elisalelayo eZimbabwe.',
      },
      services: {
        title: 'Izinkonzo Zethu',
        subtitle: 'Izixazululo zesimo sezulu eziphelele',
        policy: {
          title: 'Izeluleko Zenqubomgomo',
          description: 'Izeluleko zochwepheshe ngemithetho yemvelo nesimo sezulu',
        },
        mrv: {
          title: 'Ukuqinisekisa Nokubheka',
          description: 'Izinkonzo zokuqapha, ukubika, lokuqinisekisa eziqinile',
        },
        incubation: {
          title: 'Ukuqalisa Imisebenzi',
          description: 'Ukusekela imisebenzi yesimo sezulu ekuqaleni kuze kube sekuphethweni',
        },
        academy: {
          title: 'I-Akhademі Yamakhono Aluhlaza',
          description: 'Ukuqeqeshwa nesitifiketi emisebenzini yesimo sezulu',
        },
      },
      principles: {
        title: 'Imigomo Yethu',
        subtitle: 'Siletha imisebenzi yesimo sezulu ngobuqotho kanye nomphumela',
        items: {
          community: 'Indlela Yokubeka Imiphakathi Kuqala nge-FPIC',
          integrity: 'Ubuqotho Obusezingeni Labatshali-zimali ne-MRV',
          partnership: 'Ubambiswano Kahulumeni Labalawuli',
          finance: 'Izixazululo Zemali Ezihlakaniphile',
          learning: 'Ukufunda Okuqhubekayo Nokuziphendulela',
          transparency: 'Irejista Yedijithali Ecacileyo',
        },
      },
      cta: {
        title: 'Usukulungele Ukwenza Umehluko?',
        subtitle: 'Hlanganyela lathi ekwakheni i-Zimbabwe eqinileyo, ezinzileyo ngokwenza imisebenzi yesimo sezulu.',
        button1: 'Hlanganyela Lamuhla',
        button2: 'Bheka Imisebenzi',
      },
    },
    about: {
      title: 'Ngathi',
      vision: 'Umbono Wethu',
      promise: 'Isithembiso Sethu',
    },
    services: {
      title: 'Esikwenzayo',
      subtitle: 'Izinkonzo Zesimo Sezulu',
    },
    contact: {
      title: 'Xhumana Nathi',
      name: 'Ibizo',
      email: 'I-imeyili',
      message: 'Umlayezo',
      send: 'Thumela',
    },
    common: {
      learnMore: 'Funda Okunengi',
      loading: 'Iyalayisha...',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      whatWeDo: 'Qué Hacemos',
      projects: 'Proyectos',
      blog: 'Blog',
      media: 'Medios',
      resources: 'Recursos',
      gallery: 'Galería',
      events: 'Eventos',
      faqs: 'Preguntas',
      contact: 'Contacto',
    },
    home: {
      hero: {
        badge: 'Liderando la Acción Climática en Zimbabue',
        title: 'Construyendo un Zimbabue',
        subtitle: 'Resiliente y Bajo en Carbono',
        description: 'Acción climática inclusiva, de alto impacto y alta integridad para la resiliencia y el desarrollo sostenible.',
        cta1: 'Únete',
        cta2: 'Saber Más',
      },
      stats: {
        projects: 'Proyectos',
        communities: 'Comunidades Alcanzadas',
        investment: 'Inversión',
        jobs: 'Empleos Verdes Creados',
        co2: 'CO₂e Reducido',
        trained: 'Capacitados',
        invested: 'Invertido',
      },
      vision: {
        title: 'Nuestra Visión',
        text: 'Un Zimbabue donde la acción climática impulse la prosperidad inclusiva, la resiliencia ambiental y los medios de vida sostenibles para todas las comunidades, asegurando que nadie se quede atrás en la transición hacia un futuro bajo en carbono.',
      },
      promise: {
        title: 'Nuestra Promesa',
        text: 'Nos comprometemos a ofrecer soluciones climáticas de alta integridad que prioricen el empoderamiento comunitario, la gobernanza transparente y el impacto medible, al tiempo que fomentamos asociaciones que creen valor duradero para Zimbabue.',
      },
      services: {
        title: 'Servicios Principales',
        subtitle: 'Soluciones climáticas integrales para un impacto duradero',
        policy: {
          title: 'Asesoría en Políticas',
          description: 'Orientación experta sobre política ambiental y legislación climática',
        },
        mrv: {
          title: 'MRV y Verificación',
          description: 'Servicios rigurosos de monitoreo, reporte y verificación',
        },
        incubation: {
          title: 'Incubación de Proyectos',
          description: 'Apoyo para proyectos climáticos bancables desde el concepto hasta la ejecución',
        },
        academy: {
          title: 'Academia de Habilidades Verdes',
          description: 'Capacitación y certificación en acción climática y sostenibilidad',
        },
      },
      principles: {
        title: 'Nuestros Principios',
        subtitle: 'Ofreciendo acción climática con integridad e impacto',
        items: {
          community: 'Enfoque Comunitario con CLPI',
          integrity: 'Integridad de Grado Inversor y MRV',
          partnership: 'Asociación con Gobierno y Reguladores',
          finance: 'Soluciones Financieras Inteligentes',
          learning: 'Aprendizaje Continuo y Responsabilidad',
          transparency: 'Registro Digital Transparente',
        },
      },
      cta: {
        title: '¿Listo para Hacer un Impacto?',
        subtitle: 'Únete a nosotros para construir un Zimbabue resiliente y sostenible a través de la acción climática inclusiva.',
        button1: 'Involúcrate Hoy',
        button2: 'Explorar Proyectos',
      },
    },
    about: {
      title: 'Sobre CACZ',
      vision: 'Nuestra Visión',
      promise: 'Nuestra Promesa',
    },
    services: {
      title: 'Qué Hacemos',
      subtitle: 'Servicios Integrales de Acción Climática',
    },
    contact: {
      title: 'Contáctanos',
      name: 'Nombre',
      email: 'Correo',
      message: 'Mensaje',
      send: 'Enviar',
    },
    common: {
      learnMore: 'Saber Más',
      loading: 'Cargando...',
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  // Languages array
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'nd', name: 'IsiNdebele' },
    { code: 'es', name: 'Español' }
  ];

  useEffect(() => {
    const savedLanguage = localStorage.getItem('cacz-language');
    if (savedLanguage && ['en', 'nd', 'es'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang) => {
    if (['en', 'nd', 'es'].includes(lang)) {
      setLanguage(lang);
      localStorage.setItem('cacz-language', lang);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};