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
  CheckCircle2
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="absolute inset-0 gradient-radial" />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Электроэнергия по УЦП/ГЦП за 3,6 ₽/кВт·ч</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-foreground/80 mb-8">
              Энерго-контейнеры с газовыми ГПУ для майнинга
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Снижение энергозатрат до ~35% относительно рынка. Поставка от собственных ГПУ. 
              По ТУ — масштабируемость до 37 МВт.
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

      {/* Advantages */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Преимущества</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <TrendingDown className="h-8 w-8 text-energy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Себестоимость и предсказуемость</h3>
              <p className="text-muted-foreground">
                Фиксированный тариф 3,6 ₽/кВт·ч против рыночных ~5,5 ₽/кВт·ч. Прозрачное ценообразование.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <Zap className="h-8 w-8 text-energy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Автономность и отказоустойчивость</h3>
              <p className="text-muted-foreground">
                Собственная генерация на базе газовых ГПУ. Независимость от внешних сетей.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <Gauge className="h-8 w-8 text-energy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Масштабируемость</h3>
              <p className="text-muted-foreground">
                Текущие мощности расширяются. Потенциал до 37 МВт по техническим условиям.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <ShieldCheck className="h-8 w-8 text-energy" />
              </div>
              <h3 className="text-xl font-bold mb-3">Юридическая чистота</h3>
              <p className="text-muted-foreground">
                Работаем по ФЗ-259. Выпуск через операторов информационных систем из реестра ЦБ РФ.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Как это работает</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-energy/10 border-2 border-energy flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-energy">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Выпуск УЦП/ГЦП</h3>
                <p className="text-muted-foreground">
                  Цифровые права на электроэнергию выпускаются через ОИС в соответствии с ФЗ-259
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-energy/10 border-2 border-energy flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-energy">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Оплата и поставка</h3>
                <p className="text-muted-foreground">
                  Приобретение токенов и получение кВт·ч по фиксированной цене 3,6 ₽/кВт·ч
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-energy/10 border-2 border-energy flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-energy">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Экономия на тарифе</h3>
                <p className="text-muted-foreground">
                  Снижение затрат на электроэнергию до ~35% относительно рыночных тарифов
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <SavingsCalculator />
        </div>
      </section>

      {/* Current Capacities */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Текущие мощности</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="text-4xl font-bold text-energy mb-2">5×400</div>
              <div className="text-sm text-muted-foreground">кВт установлено</div>
              <CheckCircle2 className="h-6 w-6 text-energy mx-auto mt-4" />
            </Card>

            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="text-4xl font-bold text-energy mb-2">12×250</div>
              <div className="text-sm text-muted-foreground">кВт (номинал 200 кВт)</div>
              <CheckCircle2 className="h-6 w-6 text-energy mx-auto mt-4" />
            </Card>

            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="text-4xl font-bold text-energy-dim mb-2">+10×250</div>
              <div className="text-sm text-muted-foreground">кВт в процессе установки</div>
              <div className="h-6 w-6 mx-auto mt-4 border-2 border-dashed border-energy-dim rounded-full" />
            </Card>

            <Card className="p-6 bg-card border-energy/30 border-2 text-center shadow-[var(--shadow-card)] glow">
              <div className="text-4xl font-bold text-gradient mb-2">37 МВт</div>
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
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-12 bg-gradient-to-br from-card via-card to-energy/5 border-energy/30 text-center shadow-[var(--shadow-card)]">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Готовы снизить затраты на электроэнергию?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами для обсуждения условий поставки 
              электроэнергии по УЦП/ГЦП или предзаказа контейнера.
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
