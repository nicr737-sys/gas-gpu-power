import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LeadForm } from "@/components/LeadForm";
import { 
  Zap, 
  TrendingDown, 
  ShieldCheck, 
  ArrowUpRight, 
  Download,
  Gauge,
  FileText,
  CheckCircle2,
  Server,
  Clock
} from "lucide-react";
import logo from "@/assets/logo.svg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="absolute inset-0 gradient-radial" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8">
              <img src={logo} alt="ЭнергоТех" className="h-24 sm:h-32 w-auto mx-auto" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight break-words">
              Инфраструктурный Энерго-Юнит <span className="text-gradient">(IEU)</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 break-words">
              УЦП на комплексную услугу размещения вычислительного оборудования в контейнерном ЦОД с собственной ГПЭС. Стоимость — <span className="text-energy font-bold">3,85 ₽/кВт·ч</span>
            </p>
            
            <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto break-words">
              Один токен = 1 кВт × 1 час. Полный цикл: генерация, вентиляция, мониторинг, охрана, интернет.
              Единый ликвидный инструмент для всех типов клиентов.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="energy" size="lg" className="text-lg">
                    Оставить заявку
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Оставить заявку</DialogTitle>
                  </DialogHeader>
                  <LeadForm />
                </DialogContent>
              </Dialog>

              <Button variant="hero" size="lg" className="text-lg" asChild>
                <a href="/docs">
                  <Download className="mr-2 h-5 w-5" />
                  Скачать паспорт ГПУ
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 break-words">Состояние объекта на 20 декабря 2025 года</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://rutube.ru/play/embed/1de73152140b0f3ea78727fbf9a83db5/"
                style={{ border: 'none' }} 
                allow="clipboard-write; autoplay" 
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Token Description */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">Что такое токен IEU</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto break-words">
            Базовый актив — право требования комплексной услуги по размещению и обеспечению непрерывной работы вычислительного оборудования
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <Zap className="h-8 w-8 text-energy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Генерация электроэнергии</h3>
              <p className="text-muted-foreground break-words">
                Собственная газопоршневая электростанция (ГПЭС) — независимость от внешних сетей
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <Gauge className="h-8 w-8 text-energy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Вентиляция и охлаждение</h3>
              <p className="text-muted-foreground break-words">
                Промышленная приточно-вытяжная вентиляция и отвод тепла для стабильной работы оборудования
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <ShieldCheck className="h-8 w-8 text-energy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Мониторинг и охрана</h3>
              <p className="text-muted-foreground break-words">
                Технический мониторинг, физическая охрана объекта и высокоскоростной доступ в интернет
              </p>
            </Card>
          </div>

          {/* Token Parameters */}
          <Card className="p-6 sm:p-8 bg-gradient-to-br from-card via-card to-energy/5 border-energy/30 max-w-3xl mx-auto shadow-[var(--shadow-card)]">
            <h3 className="text-2xl font-bold mb-6 text-center">Параметры 1 токена IEU</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <Zap className="h-5 w-5 text-energy shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground">Электрическая мощность</div>
                  <div className="font-bold">1 кВт</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <Clock className="h-5 w-5 text-energy shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground">Длительность услуги</div>
                  <div className="font-bold">60 минут</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <Server className="h-5 w-5 text-energy shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground">Тип размещения</div>
                  <div className="font-bold">Контейнерный ЦОД</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                <Gauge className="h-5 w-5 text-energy shrink-0" />
                <div>
                  <div className="text-sm text-muted-foreground">Источник генерации</div>
                  <div className="font-bold">Собственная ГПЭС</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Как это работает</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-energy/10 border-2 border-energy flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-energy">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Выпуск УЦП</h3>
                <p className="text-muted-foreground break-words">
                  Токены IEU выпускаются через ОИС в соответствии с ФЗ-259. Каждый токен — право на 1 инфраструктурный час
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-energy/10 border-2 border-energy flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-energy">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Размещение оборудования</h3>
                <p className="text-muted-foreground break-words">
                  Вычислительное оборудование размещается в контейнерном ЦОД с полным обеспечением работы
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-energy/10 border-2 border-energy flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-energy">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Учёт через Jeensys</h3>
                <p className="text-muted-foreground break-words">
                  Система <a href="https://jeensys.com/" target="_blank" rel="noopener noreferrer" className="text-energy hover:underline">Jeensys</a> фиксирует потребление. 1 кВт = 1 токен/час, 3 кВт = 3 токена/час
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Преимущества</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <TrendingDown className="h-8 w-8 text-energy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Единый инструмент</h3>
              <p className="text-muted-foreground break-words">
                Один ликвидный токен для всех типов клиентов — без дробления на отдельные сущности под разные модели оборудования
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <Zap className="h-8 w-8 text-energy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Автономность</h3>
              <p className="text-muted-foreground break-words">
                Собственная ГПЭС на базе газовых ГПУ. Полная независимость от внешних электросетей
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <Gauge className="h-8 w-8 text-energy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Масштабируемость</h3>
              <p className="text-muted-foreground break-words">
                Текущие мощности расширяются. Потенциал до 37 МВт по техническим условиям
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <ShieldCheck className="h-8 w-8 text-energy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Юридическая чистота</h3>
              <p className="text-muted-foreground break-words">
                Токен закрепляет обязательство оказать услугу по ФЗ-259, исключая риски признания деятельности продажей электроэнергии
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <SavingsCalculator />
        </div>
      </section>

      {/* Current Capacities */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Текущие мощности</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="text-3xl sm:text-4xl font-bold text-energy mb-2">5×400</div>
              <div className="text-sm text-muted-foreground">кВт установлено</div>
              <CheckCircle2 className="h-6 w-6 text-energy mx-auto mt-4" />
            </Card>

            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="text-3xl sm:text-4xl font-bold text-energy mb-2">12×250</div>
              <div className="text-sm text-muted-foreground">кВт (номинал 200 кВт)</div>
              <CheckCircle2 className="h-6 w-6 text-energy mx-auto mt-4" />
            </Card>

            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="text-3xl sm:text-4xl font-bold text-energy-dim mb-2">+10×250</div>
              <div className="text-sm text-muted-foreground">кВт в процессе установки</div>
              <div className="h-6 w-6 mx-auto mt-4 border-2 border-dashed border-energy-dim rounded-full" />
            </Card>

            <Card className="p-6 bg-card border-energy/30 border-2 text-center shadow-[var(--shadow-card)] glow">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">37 МВт</div>
              <div className="text-sm text-muted-foreground">потенциал по ТУ</div>
              <ArrowUpRight className="h-6 w-6 text-energy mx-auto mt-4" />
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            <span className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Данные обновляются по мере ввода новых мощностей
            </span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-card via-card to-energy/5 border-energy/30 text-center shadow-[var(--shadow-card)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 break-words">
              Готовы разместить оборудование?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto break-words">
              Оставьте заявку, и мы свяжемся с вами для обсуждения условий размещения 
              вычислительного оборудования и приобретения токенов IEU.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="energy" size="lg" className="text-lg">
                  Оставить заявку
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Оставить заявку</DialogTitle>
                </DialogHeader>
                <LeadForm />
              </DialogContent>
            </Dialog>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
