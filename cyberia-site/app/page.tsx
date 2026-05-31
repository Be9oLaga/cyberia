import { Header } from '@/widgets/Header';
import { Footer } from '@/widgets/Footer';
import { Banner } from '@/widgets/Banner';
import { ProjectsList } from '@/features/project/ui/ProjectsList';
import { projectApi } from '@/entities/project/api/client';
import { Button } from '@/shared/ui/Button';
import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

// Награды – пути к реальным файлам из папки public/images
const awards = [
  {
    title: '30 место по России. Рейтинг Рунета, 2025',
    desc: 'Разработка сайтов и веб-сервисов в среднем ценовом сегменте',
    icon: '/images/award-silver.png',        // есть на скрине
  },
  {
    title: '23 место по России. Рейтинг Рунета, 2025',
    desc: 'Разработка решений на базе ИИ',
    icon: '/images/award-silver-ruward.png',  // переименуйте файл, если нужно
  },
  {
    title: 'Золото. Рейтинг Рунета, 2025',
    desc: 'Разработка интернет-магазинов / Барнаул',
    icon: '/images/award-gold.png',
  },
];

const extraAwards = [
  { medal: 'Серебро. Золотой сайт XXVI', desc: 'Сайт телекоммуникационной компании / Комфортел', icon: '/images/award-silver-goldsite.png' },
  { medal: 'Серебро. Ruward Award, 2025', desc: 'Кейс года / Форкагро', icon: '/images/award-silver-ruward.png' },
  { medal: 'Бронза. Tagline, 2025', desc: 'Лучшая разработка / интеграция', icon: '/images/award-bronze.png' },
];

const projectFilters = ['CRM-системы', 'Интернет-магазины', 'Корпоративные сайты', 'Агрегаторы, маркетплейсы', 'Логические сервисы'];

const stats = [
  { value: '40', label: 'штатных сотрудников: аналитики, дизайнеры, разработчики, тестировщики, devops' },
  { value: '15', label: 'лет — опыт работы топ-менеджеров компании в разработке' },
  { value: '5', label: 'лет на рынке разработки' },
  { value: '90', label: 'реализованных проектов' },
];

const testimonials = [
  {
    text: 'Очень внимательное отношение к клиенту и гибкий подход, структурированная работа по задачам. Нам было предложено много интересных решений по сайту, которые мы начали внедрять...',
    author: 'Михаил Евгеньев',
    position: 'Генеральный директор',
    company: 'Калькулятор парикмахера',
  },
];

const newsItems = [
  {
    title: 'Кибергия на чемпионате «Профессионалы»!',
    desc: '«Профессионалы» — Всероссийский чемпионат по профмастерству среди студентов СПО, проводится с 13 по 20 февраля при поддержке Министерства просвещения РФ',
    date: '16.01.2026',
  },
  {
    title: 'Проект Киберни стал призёром Tagline Awards 2025',
    desc: 'Наш проект Forkagro получил призовое место на премии Tagline Awards 2025. Для команды это дебютное участие...',
    date: '14.01.2026',
  },
  {
    title: 'Киберная на IT-форуме по направлениям промышленной разработки и дизайна',
    desc: 'Межрегиональный форум «IT-трансформация 2025: профессионалы цифрового будущего» в АлтГУ',
    date: '22.10.2025',
  },
];

export default async function Home() {
  const projects = await projectApi.getProjects();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-20">
        {/* Герой с телефоном */}
        <section className="container mx-auto px-4 py-12 md:py-20">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-unbounded leading-tight">
                Разрабатываем сложные IT-продукты: e-ком, веб-сервисы, ИИ
              </h1>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg">Обсудить проект</Button>
                <Button variant="outline" size="lg">23 мес</Button>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-6 text-gray-700">
                <div className="flex items-center gap-2"><Phone size={20} /> +7 960 959 18 66</div>
                <div className="flex items-center gap-2"><Mail size={20} /> hello@cyberia.studio</div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-64 h-96">
                <Image
                  src="/images/phone-mockup.png"
                  alt="Мобильное приложение"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Награды студии с иконками */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-unbounded mb-10 text-center">Награды студии</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm flex gap-4 items-start">
                  <div className="relative w-12 h-12 flex-shrink-0">
                    <Image src={award.icon} alt="" fill className="object-contain" sizes="48px" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                    <p className="text-gray-600">{award.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Дополнительные награды */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {extraAwards.map((award, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-yellow-500 flex gap-3 items-start">
                  <div className="relative w-10 h-10 flex-shrink-0">
                    <Image src={award.icon} alt="" fill className="object-contain" sizes="40px" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-500">{award.medal}</div>
                    <div className="font-semibold mt-1">{award.desc}</div>
                    <Button variant="outline" size="sm" className="mt-3">Активировать</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Наши проекты */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-unbounded mb-6">Наши проекты</h2>
            <div className="flex flex-wrap gap-3 mb-10">
              {projectFilters.map((filter) => (
                <button key={filter} className="px-4 py-2 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition">
                  {filter}
                </button>
              ))}
            </div>
            <ProjectsList initialProjects={projects} />
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">Загрузить еще</Button>
            </div>
          </div>
        </section>

        {/* Наша команда */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-unbounded mb-4">Наша команда</h2>
                <p className="text-gray-600 text-lg">
                  Благодаря многолетнему опыту мы гибко используем современные методологии разработки — Scrum, Agile, Lean, Kanban, применяя и адаптируя их под нужды проекта.
                </p>
                <Button variant="primary" className="mt-6">Подробнее</Button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white p-4 rounded-xl shadow text-center">
                    <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Нам доверяют */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-unbounded text-center mb-12">Нам доверяют</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-gray-50 p-6 rounded-2xl">
                  <p className="text-gray-700 italic">“{t.text}”</p>
                  <div className="mt-4">
                    <div className="font-bold">{t.author}</div>
                    <div className="text-sm text-gray-500">{t.position}</div>
                    <div className="text-sm text-blue-600">{t.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Banner />

        {/* Новости */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-unbounded mb-10">Новости</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="p-5">
                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600 line-clamp-3">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Button variant="outline">Все новости</Button>
            </div>
          </div>
        </section>

        {/* Карьера */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-unbounded mb-4">Мы всегда ищем новые таланты в нашу команду</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Работая в нашей команде, каждый день ты будешь делать и узнавать что-то новое и интересное.
              Крутые знакомства, долгосрочные проекты и необычные задачи – то, что ждет тебя в Киберни.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg">Присоединяйся</Button>
              <Button variant="outline" size="lg">Вакансии на hh.ru</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}