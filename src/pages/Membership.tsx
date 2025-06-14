
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Crown, Users } from 'lucide-react';
import { toast } from 'sonner';

interface MembershipFormData {
  name: string;
  email: string;
  phone: string;
  experience: string;
  specialization: string;
  membershipType: string;
  motivation: string;
}

const Membership = () => {
  const { language, t } = useLanguage();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<MembershipFormData>();

  const membershipTypes = [
    {
      id: 'basic',
      name: language === 'ar' ? 'العضوية الأساسية' : 'Basic Membership',
      price: language === 'ar' ? '50 دينار ليبي سنوياً' : '50 LYD annually',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      features: [
        language === 'ar' ? 'الوصول للوصفات الأساسية' : 'Access to basic recipes',
        language === 'ar' ? 'النشرة الإخبارية الشهرية' : 'Monthly newsletter',
        language === 'ar' ? 'المشاركة في الفعاليات العامة' : 'Participation in public events',
        language === 'ar' ? 'شهادة العضوية' : 'Membership certificate'
      ]
    },
    {
      id: 'premium',
      name: language === 'ar' ? 'العضوية المميزة' : 'Premium Membership',
      price: language === 'ar' ? '120 دينار ليبي سنوياً' : '120 LYD annually',
      icon: Star,
      color: 'from-amber-500 to-amber-600',
      features: [
        language === 'ar' ? 'جميع مزايا العضوية الأساسية' : 'All basic membership benefits',
        language === 'ar' ? 'الوصول للوصفات المتقدمة' : 'Access to advanced recipes',
        language === 'ar' ? 'ورش تدريبية حصرية' : 'Exclusive training workshops',
        language === 'ar' ? 'استشارات مهنية' : 'Professional consultations',
        language === 'ar' ? 'خصم 20% على الدورات' : '20% discount on courses'
      ]
    },
    {
      id: 'lifetime',
      name: language === 'ar' ? 'العضوية مدى الحياة' : 'Lifetime Membership',
      price: language === 'ar' ? '1000 دينار ليبي لمرة واحدة' : '1000 LYD one-time',
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      features: [
        language === 'ar' ? 'جميع المزايا مدى الحياة' : 'All benefits for lifetime',
        language === 'ar' ? 'أولوية في التسجيل' : 'Priority registration',
        language === 'ar' ? 'عضوية مجلس الطهاة' : 'Chef council membership',
        language === 'ar' ? 'برامج تدريبية مجانية' : 'Free training programs',
        language === 'ar' ? 'شهادات مهنية معتمدة' : 'Certified professional certificates'
      ]
    }
  ];

  const eligibilityRequirements = [
    language === 'ar' ? 'خبرة لا تقل عن سنتين في مجال الطبخ' : 'Minimum 2 years of cooking experience',
    language === 'ar' ? 'شهادة أو دورة تدريبية في الطهي (اختيارية)' : 'Cooking certificate or training course (optional)',
    language === 'ar' ? 'الاهتمام بالمطبخ الليبي التقليدي' : 'Interest in traditional Libyan cuisine',
    language === 'ar' ? 'الالتزام بقيم ومبادئ الجمعية' : 'Commitment to association values and principles'
  ];

  const benefits = [
    language === 'ar' ? 'شبكة واسعة من الطهاة المحترفين' : 'Wide network of professional chefs',
    language === 'ar' ? 'ورش تدريبية متخصصة' : 'Specialized training workshops',
    language === 'ar' ? 'مؤتمرات وفعاليات حصرية' : 'Exclusive conferences and events',
    language === 'ar' ? 'شهادات مهنية معتمدة' : 'Certified professional certificates',
    language === 'ar' ? 'مكتبة شاملة من الوصفات' : 'Comprehensive recipe library',
    language === 'ar' ? 'فرص عمل ومشاريع مشتركة' : 'Job opportunities and joint projects'
  ];

  const onSubmit = (data: MembershipFormData) => {
    console.log('Membership application:', data);
    toast.success(
      language === 'ar' 
        ? 'تم تقديم طلب العضوية بنجاح! سنتواصل معك قريباً.'
        : 'Membership application submitted successfully! We will contact you soon.'
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

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
              {t('membership.title')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              {language === 'ar' 
                ? 'انضم إلى أكبر مجتمع للطهاة في ليبيا وطور مهاراتك مع أفضل الخبراء'
                : 'Join the largest chef community in Libya and develop your skills with the best experts'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Membership Types */}
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
              {language === 'ar' ? 'أنواع العضوية' : 'Membership Types'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'ar' 
                ? 'اختر نوع العضوية الذي يناسب احتياجاتك وأهدافك المهنية'
                : 'Choose the membership type that suits your needs and professional goals'
              }
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {membershipTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div key={type.id} variants={itemVariants}>
                  <Card className={`h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${index === 1 ? 'transform scale-105' : ''}`}>
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-gray-800">
                        {type.name}
                      </CardTitle>
                      <p className="text-3xl font-bold text-amber-600 mt-2">
                        {type.price}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {type.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full mt-6 bg-gradient-to-r ${type.color} hover:opacity-90 text-white`}
                        onClick={() => setValue('membershipType', type.id)}
                      >
                        {language === 'ar' ? 'اختر هذه العضوية' : 'Choose This Plan'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits and Eligibility */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {t('membership.benefits')}
              </h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Eligibility */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                {t('membership.eligibility')}
              </h3>
              <ul className="space-y-4">
                {eligibilityRequirements.map((requirement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{requirement}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                {t('membership.apply')}
              </h2>
              <p className="text-lg text-gray-600">
                {language === 'ar' 
                  ? 'املأ النموذج التالي للتقدم بطلب العضوية'
                  : 'Fill out the following form to apply for membership'
                }
              </p>
            </div>

            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{t('form.name')} *</Label>
                      <Input
                        id="name"
                        {...register('name', { required: t('form.required') })}
                        className="mt-2"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="email">{t('form.email')} *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { required: t('form.required') })}
                        className="mt-2"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">{t('form.phone')} *</Label>
                      <Input
                        id="phone"
                        {...register('phone', { required: t('form.required') })}
                        className="mt-2"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="experience">
                        {language === 'ar' ? 'سنوات الخبرة' : 'Years of Experience'} *
                      </Label>
                      <Select onValueChange={(value) => setValue('experience', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder={language === 'ar' ? 'اختر سنوات الخبرة' : 'Select years of experience'} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">{language === 'ar' ? '1-2 سنة' : '1-2 years'}</SelectItem>
                          <SelectItem value="3-5">{language === 'ar' ? '3-5 سنوات' : '3-5 years'}</SelectItem>
                          <SelectItem value="6-10">{language === 'ar' ? '6-10 سنوات' : '6-10 years'}</SelectItem>
                          <SelectItem value="10+">{language === 'ar' ? 'أكثر من 10 سنوات' : '10+ years'}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialization">
                      {language === 'ar' ? 'التخصص' : 'Specialization'}
                    </Label>
                    <Input
                      id="specialization"
                      {...register('specialization')}
                      placeholder={language === 'ar' ? 'مثل: الطبخ التقليدي، الحلويات، المأكولات البحرية' : 'e.g: Traditional cooking, Desserts, Seafood'}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="membershipType">
                      {language === 'ar' ? 'نوع العضوية المطلوبة' : 'Desired Membership Type'} *
                    </Label>
                    <Select onValueChange={(value) => setValue('membershipType', value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder={language === 'ar' ? 'اختر نوع العضوية' : 'Select membership type'} />
                      </SelectTrigger>
                      <SelectContent>
                        {membershipTypes.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name} - {type.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="motivation">
                      {language === 'ar' ? 'لماذا تريد الانضمام إلى الجمعية؟' : 'Why do you want to join the association?'}
                    </Label>
                    <Textarea
                      id="motivation"
                      {...register('motivation')}
                      placeholder={language === 'ar' ? 'اشرح دوافعك وأهدافك...' : 'Explain your motivations and goals...'}
                      className="mt-2 min-h-[120px]"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-amber-600 hover:bg-amber-700">
                    {language === 'ar' ? 'تقديم طلب العضوية' : 'Submit Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
