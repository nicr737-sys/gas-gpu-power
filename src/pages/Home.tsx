import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { InvestmentCalculator } from "@/components/InvestmentCalculator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LeadForm } from "@/components/LeadForm";
import {
  TrendingUp, ShieldCheck, ArrowUpRight, Download, Gauge, FileText,
  CheckCircle2, Calendar, Percent, Banknote, Scale
} from "lucide-react";
import logo from "@/assets/logo.svg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden pt-32 pb-20 px-4">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="absolute inset-0 gradient-radial" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img src={logo} alt="ЭнергоТех" className="h-24 sm:h-32 w-auto mx-auto" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight break-words">
              Долговые ГЦП <span className="text-gradient">25% годовых</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 mb-8 break-words">
              Инвестируйте в энергетическую инфраструктуру через гибридные цифровые права
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto break-words">
              Номинал 1 000 ₽ · Срок 1 год · Ежеквартальные выплаты · Погашение 05.03.2027.
              Выпуск через АО «СТАТУС» (реестр ЦБ РФ) по ФЗ-259.
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
                <a href="/pdf?file=/docs/reshenie-o-vypuske-cfa.pdf&title=Решение о выпуске ГЦП">
                  <Download className="mr-2 h-5 w-5" />
                  Решение о выпуске ГЦП
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Условия выпуска</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mx-auto mb-4"><Banknote className="h-8 w-8 text-energy" /></div>
              <div className="text-3xl font-bold text-energy mb-1">1 000 ₽</div>
              <div className="text-sm text-muted-foreground">Номинал 1 ГЦП</div>
            </Card>
            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mx-auto mb-4"><Percent className="h-8 w-8 text-energy" /></div>
              <div className="text-3xl font-bold text-energy mb-1">25%</div>
              <div className="text-sm text-muted-foreground">Годовая ставка</div>
            </Card>
            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mx-auto mb-4"><Calendar className="h-8 w-8 text-energy" /></div>
              <div className="text-3xl font-bold text-energy mb-1">1 год</div>
              <div className="text-sm text-muted-foreground">Срок до погашения</div>
            </Card>
            <Card className="p-6 bg-card border-energy/30 border-2 text-center shadow-[var(--shadow-card)] glow">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mx-auto mb-4"><TrendingUp className="h-8 w-8 text-energy" /></div>
              <div className="text-3xl font-bold text-gradient mb-1">50 000</div>
              <div className="text-sm text-muted-foreground">Количество ГЦП</div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Преимущества</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4"><Percent className="h-8 w-8 text-energy" /></div>
              <h3 className="text-xl font-bold mb-3">Высокая доходность</h3>
              <p className="text-muted-foreground break-words">25% годовых с ежеквартальными выплатами. Доходность выше банковских депозитов и облигаций.</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4"><ShieldCheck className="h-8 w-8 text-energy" /></div>
              <h3 className="text-xl font-bold mb-3">Юридическая чистота</h3>
              <p className="text-muted-foreground break-words">Выпуск через АО «СТАТУС» — оператор из реестра ЦБ РФ. Полное соответствие ФЗ-259.</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4"><Gauge className="h-8 w-8 text-energy" /></div>
              <h3 className="text-xl font-bold mb-3">Реальный актив</h3>
              <p className="text-muted-foreground break-words">Средства обеспечены энергетической инфраструктурой и активами эмитента ООО «ЭнергоТех».</p>
            </Card>
            <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4"><Scale className="h-8 w-8 text-energy" /></div>
              <h3 className="text-xl font-bold mb-3">Прозрачность</h3>
              <p className="text-muted-foreground break-words">Открытое решение о выпуске. Эмитент ООО «Энерготех» — выручка 271 млн ₽ за 9 мес. 2025.</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Как это работает</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: 1, t: "Приобретение ГЦП", d: "Регистрация на платформе АО «СТАТУС» и покупка ГЦП по номиналу 1 000 ₽ за штуку" },
                { n: 2, t: "Ежеквартальный доход", d: "Получение дополнительного дохода 4 раза в год из расчёта 25% годовых от номинала" },
                { n: 3, t: "Погашение", d: "05.03.2027 — возврат номинальной стоимости плюс последняя купонная выплата" },
              ].map(s => (
                <div key={s.n} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-energy/10 border-2 border-energy flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-energy">{s.n}</div>
                  <h3 className="text-xl font-bold mb-3">{s.t}</h3>
                  <p className="text-muted-foreground break-words">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">График выплат</h2>
          <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)] overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-muted-foreground font-semibold">Период</th>
                <th className="text-left py-3 px-2 text-muted-foreground font-semibold">Начало</th>
                <th className="text-left py-3 px-2 text-muted-foreground font-semibold">Окончание</th>
                <th className="text-right py-3 px-2 text-muted-foreground font-semibold">Выплата на 1 ГЦП</th>
              </tr></thead>
              <tbody>
                {[
                  ["1-й квартал","06.03.2026","05.06.2026","~62,67 ₽"],
                  ["2-й квартал","06.06.2026","05.09.2026","~62,67 ₽"],
                  ["3-й квартал","06.09.2026","05.12.2026","~62,33 ₽"],
                  ["4-й квартал","06.12.2026","05.03.2027","~61,64 ₽ + номинал"],
                ].map(([p,s,e,v], i) => (
                  <tr key={i} className={i < 3 ? "border-b border-border/50" : ""}>
                    <td className="py-3 px-2 font-medium">{p}</td>
                    <td className="py-3 px-2 text-muted-foreground">{s}</td>
                    <td className="py-3 px-2 text-muted-foreground">{e}</td>
                    <td className="py-3 px-2 text-right font-semibold text-energy">{v}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot><tr className="border-t-2 border-energy/30">
                <td colSpan={3} className="py-3 px-2 font-bold">Итого доход на 1 ГЦП</td>
                <td className="py-3 px-2 text-right font-bold text-energy text-lg">~249,32 ₽</td>
              </tr></tfoot>
            </table>
          </Card>
          <p className="text-center text-sm text-muted-foreground mt-4">* Расчёт приблизительный, точные суммы зависят от количества дней в периоде</p>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <InvestmentCalculator />
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 break-words">Состояние объекта на 20 декабря 2025 года</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-[var(--shadow-card)]">
              <iframe width="100%" height="100%" src="https://rutube.ru/play/embed/1de73152140b0f3ea78727fbf9a83db5/" style={{ border: 'none' }} allow="clipboard-write; autoplay" allowFullScreen className="absolute inset-0" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Параметры выпуска</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="text-3xl sm:text-4xl font-bold text-energy mb-2">50 000</div>
              <div className="text-sm text-muted-foreground">ГЦП в выпуске</div>
              <CheckCircle2 className="h-6 w-6 text-energy mx-auto mt-4" />
            </Card>
            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="text-3xl sm:text-4xl font-bold text-energy mb-2">1 000 ₽</div>
              <div className="text-sm text-muted-foreground">номинал 1 ГЦП</div>
              <CheckCircle2 className="h-6 w-6 text-energy mx-auto mt-4" />
            </Card>
            <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
              <div className="text-3xl sm:text-4xl font-bold text-energy mb-2">25%</div>
              <div className="text-sm text-muted-foreground">годовых</div>
              <CheckCircle2 className="h-6 w-6 text-energy mx-auto mt-4" />
            </Card>
            <Card className="p-6 bg-card border-energy/30 border-2 text-center shadow-[var(--shadow-card)] glow">
              <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">50 млн ₽</div>
              <div className="text-sm text-muted-foreground">объём выпуска</div>
              <ArrowUpRight className="h-6 w-6 text-energy mx-auto mt-4" />
            </Card>
          </div>
          <p className="text-center text-muted-foreground mt-8">
            <span className="inline-flex items-center gap-2"><FileText className="h-4 w-4" />Подробности в решении о выпуске ГЦП</span>
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-8 sm:p-12 bg-gradient-to-br from-card via-card to-energy/5 border-energy/30 text-center shadow-[var(--shadow-card)]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 break-words">Готовы инвестировать под 25% годовых?</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto break-words">
              Оставьте заявку, и мы свяжемся с вами для обсуждения условий приобретения долговых ЦФА ООО «Энерготех».
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="energy" size="lg" className="text-lg">Оставить заявку<ArrowUpRight className="ml-2 h-5 w-5" /></Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader><DialogTitle className="text-2xl">Оставить заявку</DialogTitle></DialogHeader>
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
