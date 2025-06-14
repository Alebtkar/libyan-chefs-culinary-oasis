
import { Chef, Recipe, Article, Certificate, Member } from '@/types';

export const mockChefs: Chef[] = [
  {
    id: '1',
    name: {
      ar: 'أحمد العربي',
      en: 'Ahmed Al-Arabi'
    },
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    bio: {
      ar: 'طاه محترف متخصص في المأكولات الليبية التقليدية مع خبرة تزيد عن 15 عامًا',
      en: 'Professional chef specializing in traditional Libyan cuisine with over 15 years of experience'
    },
    specialty: {
      ar: 'المأكولات الليبية التقليدية',
      en: 'Traditional Libyan Cuisine'
    },
    achievements: {
      ar: ['جائزة أفضل طاه في ليبيا 2023', 'شهادة الطبخ المتقدم من معهد الطهي الدولي'],
      en: ['Best Chef in Libya Award 2023', 'Advanced Culinary Certificate from International Culinary Institute']
    },
    cvLink: '/chef-cv-1.pdf'
  },
  {
    id: '2',
    name: {
      ar: 'فاطمة الزهراء',
      en: 'Fatima Al-Zahra'
    },
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    bio: {
      ar: 'خبيرة في الحلويات الليبية والمعجنات التقليدية',
      en: 'Expert in Libyan desserts and traditional pastries'
    },
    specialty: {
      ar: 'الحلويات والمعجنات',
      en: 'Desserts and Pastries'
    },
    achievements: {
      ar: ['خبيرة معتمدة في الحلويات الشرقية', 'مؤسسة أكاديمية الحلويات الليبية'],
      en: ['Certified Expert in Middle Eastern Desserts', 'Founder of Libyan Desserts Academy']
    }
  },
  {
    id: '3',
    name: {
      ar: 'محمد الطرابلسي',
      en: 'Mohammed Al-Taraboulsi'
    },
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    bio: {
      ar: 'طاه متخصص في المأكولات البحرية الليبية',
      en: 'Chef specializing in Libyan seafood cuisine'
    },
    specialty: {
      ar: 'المأكولات البحرية',
      en: 'Seafood Cuisine'
    },
    achievements: {
      ar: ['جائزة الإبداع في الطبخ البحري 2022'],
      en: ['Seafood Culinary Innovation Award 2022']
    }
  }
];

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: {
      ar: 'الكسكسي الليبي',
      en: 'Libyan Couscous'
    },
    description: {
      ar: 'طبق الكسكسي التقليدي الليبي بالخضار واللحم',
      en: 'Traditional Libyan couscous with vegetables and meat'
    },
    image: 'https://images.unsplash.com/photo-1551782450-17144efb9c50?w=600&h=400&fit=crop',
    ingredients: {
      ar: ['كسكسي', 'لحم غنم', 'جزر', 'كوسا', 'حمص', 'بصل', 'طماطم', 'هريسة'],
      en: ['Couscous', 'Lamb meat', 'Carrots', 'Zucchini', 'Chickpeas', 'Onions', 'Tomatoes', 'Harissa']
    },
    steps: {
      ar: [
        'نظف اللحم وقطعه قطع متوسطة',
        'اطبخ اللحم في الماء مع البصل والتوابل',
        'أضف الخضار تدريجياً حسب وقت النضج',
        'حضر الكسكسي في البخار',
        'قدم الكسكسي مع الخضار واللحم'
      ],
      en: [
        'Clean and cut the meat into medium pieces',
        'Cook the meat in water with onions and spices',
        'Add vegetables gradually according to cooking time',
        'Prepare couscous by steaming',
        'Serve couscous with vegetables and meat'
      ]
    },
    history: {
      ar: 'الكسكسي من الأطباق التقليدية في شمال أفريقيا، وله تاريخ عريق في ليبيا يعود لقرون عديدة',
      en: 'Couscous is a traditional dish in North Africa, with a rich history in Libya dating back centuries'
    },
    category: {
      ar: 'الأطباق الرئيسية',
      en: 'Main Dishes'
    }
  },
  {
    id: '2',
    title: {
      ar: 'البازين الليبي',
      en: 'Libyan Bazin'
    },
    description: {
      ar: 'طبق البازين التقليدي المحضر من دقيق الشعير',
      en: 'Traditional Bazin dish made from barley flour'
    },
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
    ingredients: {
      ar: ['دقيق شعير', 'لحم', 'بطاطس', 'جزر', 'بصل', 'طماطم', 'توابل'],
      en: ['Barley flour', 'Meat', 'Potatoes', 'Carrots', 'Onions', 'Tomatoes', 'Spices']
    },
    steps: {
      ar: [
        'اطبخ اللحم حتى ينضج',
        'أضف الخضار للحم',
        'حضر عجينة البازين من دقيق الشعير',
        'اطبخ البازين في البخار',
        'قدم البازين مع المرق'
      ],
      en: [
        'Cook the meat until tender',
        'Add vegetables to the meat',
        'Prepare Bazin dough from barley flour',
        'Steam cook the Bazin',
        'Serve Bazin with the broth'
      ]
    },
    history: {
      ar: 'البازين طبق تقليدي ليبي يعتبر من الأطباق الشعبية المحبوبة ويقدم في المناسبات الخاصة',
      en: 'Bazin is a traditional Libyan dish that is beloved and served on special occasions'
    },
    category: {
      ar: 'الأطباق الرئيسية',
      en: 'Main Dishes'
    }
  }
];

export const mockArticles: Article[] = [
  {
    id: '1',
    title: {
      ar: 'مؤتمر الطهي الليبي الأول',
      en: 'First Libyan Culinary Conference'
    },
    summary: {
      ar: 'انطلاق فعاليات المؤتمر الأول للطهي الليبي بمشاركة نخبة من الطهاة',
      en: 'Launch of the first Libyan culinary conference with elite chefs participation'
    },
    content: {
      ar: 'تم انطلاق فعاليات المؤتمر الأول للطهي الليبي في طرابلس بمشاركة واسعة من الطهاة والمهتمين بفن الطبخ. يهدف المؤتمر إلى تعزيز الثقافة الغذائية الليبية وتبادل الخبرات بين الطهاة المحليين والدوليين.',
      en: 'The first Libyan culinary conference was launched in Tripoli with wide participation from chefs and cooking enthusiasts. The conference aims to promote Libyan food culture and exchange experiences between local and international chefs.'
    },
    type: 'conference',
    createdAt: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    author: {
      ar: 'إدارة الجمعية',
      en: 'Association Management'
    },
    tags: {
      ar: ['مؤتمر', 'طهي', 'ليبيا', 'تراث'],
      en: ['conference', 'cooking', 'libya', 'heritage']
    }
  },
  {
    id: '2',
    title: {
      ar: 'ورشة تدريبية في فنون الطبخ التقليدي',
      en: 'Training Workshop in Traditional Cooking Arts'
    },
    summary: {
      ar: 'ورشة تدريبية مكثفة لتعليم أساسيات الطبخ الليبي التقليدي',
      en: 'Intensive training workshop to teach the basics of traditional Libyan cooking'
    },
    content: {
      ar: 'نظمت الجمعية ورشة تدريبية مكثفة لمدة ثلاثة أيام لتعليم المشاركين أساسيات الطبخ الليبي التقليدي. شملت الورشة تحضير الأطباق الشعبية مثل الكسكسي والبازين والأسماك المشوية.',
      en: 'The association organized an intensive three-day training workshop to teach participants the basics of traditional Libyan cooking. The workshop included preparing popular dishes such as couscous, bazin, and grilled fish.'
    },
    type: 'news',
    createdAt: '2024-01-10',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    author: {
      ar: 'أحمد العربي',
      en: 'Ahmed Al-Arabi'
    },
    tags: {
      ar: ['ورشة', 'تدريب', 'طبخ تقليدي'],
      en: ['workshop', 'training', 'traditional cooking']
    }
  }
];

export const mockCertificates: Certificate[] = [
  {
    id: '1',
    chefName: {
      ar: 'أحمد العربي',
      en: 'Ahmed Al-Arabi'
    },
    issuedDate: '2023-12-01',
    certificateNumber: 'LCA-2023-001',
    specialization: {
      ar: 'الطبخ الليبي التقليدي',
      en: 'Traditional Libyan Cuisine'
    },
    description: {
      ar: 'شهادة معتمدة في الطبخ الليبي التقليدي مستوى متقدم',
      en: 'Certified Advanced Level Traditional Libyan Cuisine'
    },
    status: 'active'
  },
  {
    id: '2',
    chefName: {
      ar: 'فاطمة الزهراء',
      en: 'Fatima Al-Zahra'
    },
    issuedDate: '2023-11-15',
    certificateNumber: 'LCA-2023-002',
    specialization: {
      ar: 'الحلويات والمعجنات',
      en: 'Desserts and Pastries'
    },
    description: {
      ar: 'شهادة معتمدة في الحلويات والمعجنات الليبية',
      en: 'Certified Libyan Desserts and Pastries'
    },
    status: 'active'
  }
];

export const mockMembers: Member[] = [
  {
    id: '1',
    name: {
      ar: 'سارة أحمد',
      en: 'Sara Ahmed'
    },
    email: 'sara@example.com',
    phone: '+218911234567',
    membershipType: 'premium',
    joinDate: '2023-01-15',
    status: 'active'
  },
  {
    id: '2',
    name: {
      ar: 'محمد علي',
      en: 'Mohammed Ali'
    },
    email: 'mohammed@example.com',
    phone: '+218922345678',
    membershipType: 'basic',
    joinDate: '2023-02-20',
    status: 'active'
  }
];
