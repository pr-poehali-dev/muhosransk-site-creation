import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const newsData = [
  {
    id: 1,
    title: "Открытие нового медицинского центра в областном центре",
    date: "22 сентября 2025",
    category: "Здравоохранение",
    excerpt: "В рамках программы модернизации здравоохранения открылся современный медицинский центр с новейшим оборудованием.",
    urgent: true
  },
  {
    id: 2,
    title: "Подписано соглашение о развитии транспортной инфраструктуры",
    date: "21 сентября 2025",
    category: "Транспорт",
    excerpt: "Правительство области подписало соглашение о строительстве новых дорог и реконструкции существующих магистралей.",
    urgent: false
  },
  {
    id: 3,
    title: "Стартовала программа поддержки малого и среднего бизнеса",
    date: "20 сентября 2025",
    category: "Экономика",
    excerpt: "Предприниматели могут подать заявки на получение льготных кредитов и грантов для развития своего бизнеса.",
    urgent: false
  }
];

const leadershipData = [
  {
    id: 1,
    name: "Иванов Александр Петрович",
    position: "Губернатор Мухосранской области",
    description: "Руководит областью с 2020 года. Кандидат экономических наук.",
    phone: "+7 (800) 555-01-01",
    email: "governor@muhosransk.gov.ru"
  },
  {
    id: 2,
    name: "Петрова Елена Викторовна",
    position: "Заместитель губернатора по социальным вопросам",
    description: "Отвечает за здравоохранение, образование и социальную политику.",
    phone: "+7 (800) 555-01-02",
    email: "deputy.social@muhosransk.gov.ru"
  },
  {
    id: 3,
    name: "Сидоров Михаил Иванович",
    position: "Заместитель губернатора по экономическому развитию",
    description: "Курирует экономику, промышленность и инвестиционную деятельность.",
    phone: "+7 (800) 555-01-03",
    email: "deputy.economy@muhosransk.gov.ru"
  }
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('news');

  return (
    <div className="min-h-screen bg-government-light font-roboto">
      {/* Header */}
      <header className="bg-government-blue text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/img/a6418624-b491-4960-b865-fbaaf8218d73.jpg" 
                alt="Герб области" 
                className="w-16 h-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold">Мухосранская область</h1>
                <p className="text-blue-200">Официальный информационный портал</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Icon name="Phone" size={20} />
              <span className="text-sm">+7 (800) 555-01-00</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-government-dark text-white">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveSection('news')}
              className={`px-4 py-4 border-b-2 transition-colors ${
                activeSection === 'news' 
                  ? 'border-government-gold text-government-gold' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name="Newspaper" size={18} />
                <span>Новости</span>
              </div>
            </button>
            <button
              onClick={() => setActiveSection('leadership')}
              className={`px-4 py-4 border-b-2 transition-colors ${
                activeSection === 'leadership' 
                  ? 'border-government-gold text-government-gold' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={18} />
                <span>Руководство</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="relative mb-12 rounded-lg overflow-hidden shadow-xl">
          <img 
            src="/img/76d0bfa0-57a8-4372-aeee-24ed76eda78d.jpg" 
            alt="Административное здание" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-government-blue bg-opacity-70 flex items-center justify-center">
            <div className="text-center text-white animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Добро пожаловать</h2>
              <p className="text-xl text-blue-100">на официальный портал Мухосранской области</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        {activeSection === 'news' && (
          <div className="animate-fade-in">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-government-dark">Новости области</h2>
              <Button className="bg-government-blue hover:bg-blue-700">
                <Icon name="Bell" size={16} className="mr-2" />
                Подписаться на уведомления
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {newsData.map((news) => (
                <Card key={news.id} className="hover:shadow-lg transition-shadow animate-scale-in">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge 
                        variant={news.urgent ? "destructive" : "secondary"}
                        className={news.urgent ? "bg-government-red" : ""}
                      >
                        {news.category}
                      </Badge>
                      {news.urgent && <Icon name="AlertCircle" size={16} className="text-government-red" />}
                    </div>
                    <CardTitle className="text-lg">{news.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500">{news.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{news.excerpt}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Icon name="ArrowRight" size={16} className="mr-2" />
                      Читать полностью
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'leadership' && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-government-dark mb-4">Руководство области</h2>
              <p className="text-gray-600">Структура управления Мухосранской областью</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {leadershipData.map((leader) => (
                <Card key={leader.id} className="animate-scale-in">
                  <CardHeader>
                    <CardTitle className="text-xl text-government-blue">{leader.name}</CardTitle>
                    <CardDescription className="text-lg font-medium text-government-dark">
                      {leader.position}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{leader.description}</p>
                    <Separator className="my-4" />
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-sm">
                        <Icon name="Phone" size={16} className="text-government-blue" />
                        <span>{leader.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Icon name="Mail" size={16} className="text-government-blue" />
                        <span>{leader.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-government-blue text-white">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Building" size={24} />
                  <span>Структура управления</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <Icon name="Crown" size={32} className="mx-auto mb-2 text-government-gold" />
                    <h4 className="font-medium">Губернатор</h4>
                    <p className="text-sm text-blue-200">Высшее должностное лицо</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Users" size={32} className="mx-auto mb-2 text-government-gold" />
                    <h4 className="font-medium">Правительство</h4>
                    <p className="text-sm text-blue-200">Исполнительная власть</p>
                  </div>
                  <div className="text-center">
                    <Icon name="Scale" size={32} className="mx-auto mb-2 text-government-gold" />
                    <h4 className="font-medium">Дума области</h4>
                    <p className="text-sm text-blue-200">Законодательная власть</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-government-dark text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>г. Мухосранск, пл. Советская, 1</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 555-01-00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>info@muhosransk.gov.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Полезные ссылки</h3>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="hover:text-government-gold transition-colors">Госуслуги</a></div>
                <div><a href="#" className="hover:text-government-gold transition-colors">Налоговая служба</a></div>
                <div><a href="#" className="hover:text-government-gold transition-colors">МФЦ</a></div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Официальные ресурсы</h3>
              <div className="space-y-2 text-sm">
                <div><a href="#" className="hover:text-government-gold transition-colors">Правительство РФ</a></div>
                <div><a href="#" className="hover:text-government-gold transition-colors">Президент РФ</a></div>
                <div><a href="#" className="hover:text-government-gold transition-colors">Государственная Дума</a></div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-600" />
          <div className="text-center text-sm text-gray-400">
            © 2025 Правительство Мухосранской области. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;