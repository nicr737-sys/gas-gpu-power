import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, BarChart3 } from "lucide-react";

const GrowthDashboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setIsVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <Card className="p-8 bg-card border-border shadow-[var(--shadow-card)]" ref={ref}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-lg bg-energy/10">
          <BarChart3 className="h-6 w-6 text-energy" />
        </div>
        <h2 className="text-2xl font-bold">Финансовые результаты 2024–2025</h2>
      </div>

      <p className="text-center text-lg font-semibold text-foreground mb-8">История роста компании</p>

      {/* Key metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        <MetricCard label="Выручка 2025" value={474} suffix=" млн ₽" delta="+447% к 2024 году" animate={isVisible} duration={1600} />
        <MetricCard label="Чистая прибыль 2025" value={35} suffix=" млн ₽" delta="+484% к 2024 году" animate={isVisible} duration={2000} />
        <div className="border border-energy/20 rounded-xl p-5 bg-card">
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">Компания на рынке</span>
          <span className="block text-3xl font-bold text-foreground">3+ лет</span>
          <span className="block text-xs text-muted-foreground mt-2">С октября 2022 года</span>
        </div>
      </div>

      {/* Bar chart */}
      <div className="mb-8">
        <div className="flex gap-4 mb-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-energy inline-block" />Выручка, млн ₽</span>
          <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-sm bg-energy/30 inline-block" />Чистая прибыль, млн ₽</span>
        </div>
        <BarChartSimple animate={isVisible} />
      </div>

      {/* Financial ratios */}
      <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-3">Финансовые коэффициенты</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
        <RatioCard label="Долг / EBITDA" value="0,14" unit="×" desc="Норма — ниже 3×" badge="минимальная нагрузка" />
        <RatioCard label="Покрытие процентов" value="217" unit="×" desc="Норма — выше 3×" badge="исключительный уровень" />
        <RatioCard label="Рентабельность продаж" value="7,4" unit="%" desc="Чистая прибыль / выручка" badge="выше среднего" />
        <RatioCard label="ROE" value="89" unit="%" desc="Доходность капитала" badge="высокая отдача" />
        <RatioCard label="Долг / Выручка" value="1,4" unit="%" desc="Норма — ниже 30%" badge="практически нулевой" />
        <RatioCard label="Оборачиваемость активов" value="2,9" unit="×" desc="Выручка / активы" badge="высокая эффективность" />
      </div>

      {/* Timeline */}
      <div className="relative mb-6">
        <div className="hidden sm:block absolute top-4 left-[12.5%] right-[12.5%] h-px bg-energy/20" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center relative z-10">
          <TimelineItem year="окт. 2022" label="Основание" dotClass="bg-muted-foreground/30 border-muted-foreground/50" />
          <TimelineItem year="2024" label="87 млн ₽" dotClass="bg-energy/30 border-energy/50" />
          <TimelineItem year="2025" label="474 млн ₽" dotClass="bg-energy border-energy" />
          <TimelineItem year="март 2026" label="Допуск к ЦФА" dotClass="bg-energy border-energy shadow-[0_0_8px_rgba(127,224,0,0.6)]" />
        </div>
      </div>

      <p className="text-center text-[10px] text-muted-foreground leading-relaxed">
        Данные бухгалтерской отчётности ООО «ЭнергоТех» за 2025 г. · Анализ проведён 24.03.2026<br />
        Коэффициенты рассчитаны на основе официальной отчётности по методологии кредитного анализа
      </p>
    </Card>
  );
};

function MetricCard({ label, value, suffix, delta, animate, duration }: { label: string; value: number; suffix: string; delta: string; animate: boolean; duration: number }) {
  const [display, setDisplay] = useState(0);
  
  useEffect(() => {
    if (!animate) return;
    const start = performance.now();
    const step = (ts: number) => {
      const p = Math.min((ts - start) / duration, 1);
      setDisplay(Math.round((1 - Math.pow(1 - p, 3)) * value));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [animate, value, duration]);

  return (
    <div className="border border-energy/20 rounded-xl p-5 bg-card">
      <span className="block text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-2">{label}</span>
      <span className="block text-3xl font-bold text-foreground">{display}<span className="text-sm font-normal text-muted-foreground">{suffix}</span></span>
      <div className="flex items-center gap-1.5 text-xs font-semibold text-energy mt-2">
        <span className="w-4 h-4 rounded-full bg-energy/15 inline-flex items-center justify-center text-[9px]">↑</span>
        {delta}
      </div>
    </div>
  );
}

function RatioCard({ label, value, unit, desc, badge }: { label: string; value: string; unit: string; desc: string; badge: string }) {
  return (
    <div className="border border-energy/15 rounded-lg p-4 bg-energy/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-energy/25" />
      <span className="block text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-2 leading-snug">{label}</span>
      <span className="block text-2xl font-bold text-energy">{value}<span className="text-sm font-normal text-energy/55">{unit}</span></span>
      <span className="block text-[11px] text-muted-foreground mt-1">{desc}</span>
      <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full mt-2 bg-energy/10 text-energy">{badge}</span>
    </div>
  );
}

function TimelineItem({ year, label, dotClass }: { year: string; label: string; dotClass: string }) {
  return (
    <div>
      <div className={`w-3.5 h-3.5 rounded-full mx-auto mb-2 border-2 ${dotClass}`} />
      <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{year}</div>
      <div className="text-xs font-bold text-foreground mt-1">{label}</div>
    </div>
  );
}

function BarChartSimple({ animate }: { animate: boolean }) {
  const maxVal = 474;
  const data = [
    { year: "2024", revenue: 87, profit: 6 },
    { year: "2025", revenue: 474, profit: 35 },
  ];

  return (
    <div className="flex items-end gap-8 justify-center h-48">
      {data.map((d) => (
        <div key={d.year} className="flex flex-col items-center gap-2">
          <div className="flex items-end gap-1.5 h-36">
            <div className="w-10 rounded-lg bg-energy transition-all duration-1000 ease-out"
              style={{ height: animate ? `${(d.revenue / maxVal) * 144}px` : "0px" }} />
            <div className="w-10 rounded-lg bg-energy/25 border border-energy/45 transition-all duration-1000 ease-out"
              style={{ height: animate ? `${(d.profit / maxVal) * 144}px` : "0px" }} />
          </div>
          <span className="text-sm font-semibold text-muted-foreground">{d.year}</span>
        </div>
      ))}
    </div>
  );
}

export default GrowthDashboard;
