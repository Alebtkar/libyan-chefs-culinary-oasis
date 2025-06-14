
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Tag, Share2 } from 'lucide-react';

const ArticleDetails = () => {
  const { id } = useParams();
  const { language } = useLanguage();

  // Mock article data
  const article = {
    id,
    title: language === 'ar' ? `تطور فنون الطبخ الليبي عبر التاريخ` : `Evolution of Libyan Culinary Arts Through History`,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop',
    author: language === 'ar' ? 'د. أحمد الصادق' : 'Dr. Ahmed Al-Sadiq',
    publishDate: '15 يونيو 2024',
    category: language === 'ar' ? 'تاريخ الطبخ' : 'Culinary History',
    tags: language === 'ar' ? ['تاريخ', 'طبخ ليبي', 'تراث'] : ['History', 'Libyan Cuisine', 'Heritage'],
    readTime: language === 'ar' ? '5 دقائق قراءة' : '5 min read',
    content: {
      intro: language === 'ar' 
        ? 'يتميز المطبخ الليبي بتنوعه وغناه بالنكهات المختلفة، حيث يجمع بين تقاليد البحر الأبيض المتوسط والمطبخ العربي والأفريقي. هذا التنوع هو نتيجة التاريخ الغني لليبيا والحضارات المختلفة التي مرت عليها.'
        : 'Libyan cuisine is characterized by its diversity and richness in different flavors, combining Mediterranean traditions with Arab and African cuisine. This diversity is the result of Libya\'s rich history and the different civilizations that have passed through it.',
      
      sections: [
        {
          title: language === 'ar' ? 'التأثيرات التاريخية' : 'Historical Influences',
          content: language === 'ar' 
            ? 'تأثر المطبخ الليبي بحضارات عديدة عبر التاريخ، من الفينيقيين والرومان إلى العرب والعثمانيين. كل حضارة تركت بصمتها في الأطباق التقليدية التي نعرفها اليوم.'
            : 'Libyan cuisine has been influenced by many civilizations throughout history, from the Phoenicians and Romans to the Arabs and Ottomans. Each civilization left its mark on the traditional dishes we know today.'
        },
        {
          title: language === 'ar' ? 'الأطباق الرئيسية' : 'Main Dishes',
          content: language === 'ar' 
            ? 'من أشهر الأطباق الليبية الكسكسي والشربة والمحشي، وكلها أطباق تعكس تنوع المكونات المحلية والتقنيات التقليدية في الطبخ.'
            : 'Some of the most famous Libyan dishes include couscous, shorba, and stuffed vegetables, all of which reflect the diversity of local ingredients and traditional cooking techniques.'
        }
      ]
    }
  };

  const relatedArticles = [
    {
      id: 2,
      title: language === 'ar' ? 'فن إعداد الكسكسي الليبي' : 'The Art of Preparing Libyan Couscous',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      title: language === 'ar' ? 'الحلويات التقليدية في ليبيا' : 'Traditional Sweets in Libya',
      image: 'https://images.unsplash.com/photo-1547573854-74d2a71d0826?w=300&h=200&fit=crop'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/articles">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {language === 'ar' ? 'العودة للمقالات' : 'Back to Articles'}
          </Link>
        </Button>

        <article>
          {/* Article Header */}
          <div className="mb-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
            />
            
            <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
              <Badge variant="secondary">{article.category}</Badge>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {article.publishDate}
              </div>
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {article.author}
              </div>
              <span>{article.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="flex items-center">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <Button variant="outline" className="mb-6">
              <Share2 className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'مشاركة المقال' : 'Share Article'}
            </Button>
          </div>

          {/* Article Content */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed mb-6 text-gray-700">
                  {article.content.intro}
                </p>
                
                {article.content.sections.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                      {section.title}
                    </h2>
                    <p className="leading-relaxed text-gray-700">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Author Info */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-lg">
                {language === 'ar' ? 'عن الكاتب' : 'About the Author'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{article.author}</h3>
                  <p className="text-gray-600">
                    {language === 'ar' 
                      ? 'خبير في تاريخ الطبخ الليبي والمتوسطي'
                      : 'Expert in Libyan and Mediterranean culinary history'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>

        {/* Related Articles */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {language === 'ar' ? 'مقالات ذات صلة' : 'Related Articles'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <Card key={relatedArticle.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{relatedArticle.title}</h3>
                  <Link to={`/articles/${relatedArticle.id}`}>
                    <Button variant="outline" className="w-full">
                      {language === 'ar' ? 'قراءة المقال' : 'Read Article'}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
