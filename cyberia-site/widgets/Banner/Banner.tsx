import { Button } from '@/shared/ui/Button';

export const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-16 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-unbounded mb-4">
            Обсудим ваш проект?
          </h2>
          <p className="text-gray-600 text-lg">
            Сформируем четкий план реализации проекта в кратчайшие сроки и в рамках вашего бюджета.
          </p>
        </div>
        <div className="md:w-1/3">
          <Button variant="primary" size="lg" fullWidth>
            Обсудить проект
          </Button>
        </div>
      </div>
    </section>
  );
};