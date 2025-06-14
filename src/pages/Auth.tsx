
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Auth = () => {
  const { language } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Register attempt:', { name, email, password });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              {language === 'ar' ? 'تسجيل الدخول' : 'Authentication'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">
                  {language === 'ar' ? 'دخول' : 'Login'}
                </TabsTrigger>
                <TabsTrigger value="register">
                  {language === 'ar' ? 'تسجيل' : 'Register'}
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <Input
                    type="email"
                    placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder={language === 'ar' ? 'كلمة المرور' : 'Password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button type="submit" className="w-full">
                    {language === 'ar' ? 'دخول' : 'Login'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  <Input
                    placeholder={language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="email"
                    placeholder={language === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder={language === 'ar' ? 'كلمة المرور' : 'Password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button type="submit" className="w-full">
                    {language === 'ar' ? 'تسجيل' : 'Register'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
