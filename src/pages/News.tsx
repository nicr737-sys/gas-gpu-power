import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      date: "2025-03-15",
      title: "Запуск дополнительных 10×250 кВт ГПУ",
      excerpt: "Продолжается ввод в эксплуатацию новых газопоршневых установок. Ожидаемый срок полного запуска — апрель 2025.",
      category: "Мощности"
    },
    {
      date: "2025-03-01",
      title: "Подготовка документов для выпуска ГЦП",
      excerpt: "Началась работа над проектом решения о выпуске цифровых финансовых активов. Публикация ожидается после согласования с оператором ОИС.",
      category: "Документы"
    },
    {
      date: "2025-02-20",
      title: "Выбор оператора информационной системы",
      excerpt: "Проводится анализ операторов ОИС из реестра Банка России для выбора оптимальной платформы для выпуска ГЦП.",
      category: "Юридическое"
    },
    {
      date: "2025-02-10",
      title: "Успешное тестирование контейнера Dual 2×250 кВт",
      excerpt: "Завершены испытания двухсекционного контейнера с двумя ГПУ по 250 кВт. Все системы работают в штатном режиме.",
      category: "Тестирование"
    },
    {
      date: "2025-01-25",
      title: "Расширение технических условий до 37 МВт",
      excerpt: "Получены технические условия на подключение дополнительных мощностей. Потенциал проекта увеличен до 37 МВт.",
      category: "Развитие"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Новости и обновления</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Актуальная информация о вводе новых мощностей, подготовке документов и развитии проекта.
          </p>

          <div className="space-y-6">
            {newsItems.map((item, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-energy/30 transition-all shadow-[var(--shadow-card)]"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-3 md:flex-col md:items-start">
                    <div className="p-2 rounded-lg bg-energy/10 shrink-0">
                      <Calendar className="h-5 w-5 text-energy" />
                    </div>
                    <time className="text-sm text-muted-foreground whitespace-nowrap">
                      {formatDate(item.date)}
                    </time>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <span className="px-3 py-1 rounded-full bg-energy/10 text-energy text-sm font-medium shrink-0">
                        {item.category}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground">
                      {item.excerpt}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-muted/30 border border-border">
            <div className="flex items-start gap-3">
              <ArrowRight className="h-6 w-6 text-energy shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold mb-2">Подписаться на обновления</h3>
                <p className="text-muted-foreground">
                  Чтобы получать уведомления о важных обновлениях проекта, оставьте заявку на странице{" "}
                  <a href="/contact" className="text-energy hover:underline">
                    Контакты
                  </a>
                  {" "}и укажите в комментарии желание подписаться на новости.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
