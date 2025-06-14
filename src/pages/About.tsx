
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Target, Eye, Trophy } from 'lucide-react';

const About = () => {
  const { language, t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const sections = [
    {
      icon: Eye,
      title: t('about.vision'),
      content: language === 'ar' 
        ? 'أن نصبح المرجع الأول والأكثر تأثيرًا في عالم الطبخ الليبي، ونساهم في نشر وتطوير الثقافة الغذائية الليبية على المستوى المحلي والعالمي.'
        : 'To become the most influential reference in Libyan cooking, contributing to the spread and development of Libyan food culture locally and globally.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      title: t('about.mission'),
      content: language === 'ar' 
        ? 'نسعى لتوثيق وحفظ التراث الغذائي الليبي، وتطوير مهارات الطهاة، وتعزيز الابتكار في المطبخ الليبي مع المحافظة على الأصالة والهوية الثقافية.'
        : 'We strive to document and preserve Libyan culinary heritage, develop chef skills, and promote innovation in Libyan cuisine while maintaining authenticity and cultural identity.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Trophy,
      title: t('about.goals'),
      content: language === 'ar' 
        ? 'تدريب وتأهيل الطهاة المحترفين، توثيق الوصفات التراثية، تنظيم المؤتمرات والفعاليات، وإنشاء شبكة قوية من المتخصصين في المجال الغذائي.'
        : 'Training and qualifying professional chefs, documenting heritage recipes, organizing conferences and events, and creating a strong network of food industry specialists.',
      color: 'from-amber-500 to-amber-600'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              {language === 'ar' ? 'عن الجمعية الليبية للطهاة' : 'About Libyan Chefs Association'}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {language === 'ar' 
                ? 'منظمة رائدة تهدف إلى النهوض بمستوى المطبخ الليبي وتطوير مهارات الطهاة المحترفين في ليبيا'
                : 'A leading organization aimed at advancing Libyan cuisine and developing professional chef skills in Libya'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Goals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                    <CardContent className="p-8 text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {language === 'ar' ? 'قصتنا' : 'Our Story'}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  {language === 'ar' 
                    ? 'تأسست الجمعية الليبية للطهاة من إيمان عميق بأهمية الحفاظ على التراث الغذائي الليبي الغني والمتنوع. بدأت رحلتنا من رؤية طموحة لجمع أفضل الطهاة الليبيين تحت مظلة واحدة.'
                    : 'The Libyan Chefs Association was founded from a deep belief in the importance of preserving Libya\'s rich and diverse culinary heritage. Our journey began with an ambitious vision to bring together the best Libyan chefs under one umbrella.'
                  }
                </p>
                <p>
                  {language === 'ar' 
                    ? 'نسعى اليوم لأن نكون الجسر الذي يربط بين الماضي العريق والحاضر المبدع، وأن نساهم في نقل هذا التراث الثمين للأجيال القادمة مع تطويره ليواكب العصر الحديث.'
                    : 'Today we strive to be the bridge that connects the glorious past with the creative present, and to contribute to passing this precious heritage to future generations while developing it to keep pace with modern times.'
                  }
                </p>
                <p>
                  {language === 'ar' 
                    ? 'من خلال برامجنا التدريبية والتعليمية، ومؤتمراتنا وورشنا المتخصصة، نعمل على رفع مستوى الطبخ الليبي وتأهيل جيل جديد من الطهاة المحترفين.'
                    : 'Through our training and educational programs, specialized conferences and workshops, we work to elevate Libyan cuisine and qualify a new generation of professional chefs.'
                  }
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
                alt="Traditional cooking"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1551782450-17144efb9c50?w=400&h=300&fit=crop"
                alt="Libyan cuisine"
                className="rounded-lg shadow-md mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
                alt="Chef training"
                className="rounded-lg shadow-md -mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
                alt="Food preparation"
                className="rounded-lg shadow-md"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {language === 'ar' ? 'قيمنا' : 'Our Values'}
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: language === 'ar' ? 'الأصالة' : 'Authenticity',
                description: language === 'ar' ? 'المحافظة على التراث الأصيل' : 'Preserving authentic heritage'
              },
              {
                title: language === 'ar' ? 'الجودة' : 'Quality',
                description: language === 'ar' ? 'التميز في كل ما نقدمه' : 'Excellence in everything we offer'
              },
              {
                title: language === 'ar' ? 'الابتكار' : 'Innovation',
                description: language === 'ar' ? 'التطوير المستمر والإبداع' : 'Continuous development and creativity'
              },
              {
                title: language === 'ar' ? 'المجتمع' : 'Community',
                description: language === 'ar' ? 'بناء مجتمع متفاعل ومترابط' : 'Building an interactive and connected community'
              }
            ].map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
