import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

export const SavingsCalculator = () => {
  const [power, setPower] = useState<string>("100");
  const [hoursPerDay, setHoursPerDay] = useState<string>("24");
  const [daysPerMonth, setDaysPerMonth] = useState<string>("30");

  const marketPrice = 5.5;
  const ucpPrice = 3.85;

  const powerNum = Number(power) || 0;
  const hoursNum = Number(hoursPerDay) || 0;
  const daysNum = Number(daysPerMonth) || 0;

  const kWhPerMonth = powerNum * hoursNum * daysNum;
  const marketCost = kWhPerMonth * marketPrice;
  const ucpCost = kWhPerMonth * ucpPrice;
  const savings = marketCost - ucpCost;
  const savingsPercent = marketCost > 0 ? ((savings / marketCost) * 100).toFixed(1) : "0";

  return (
    <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-energy/10">
          <Calculator className="h-6 w-6 text-energy" />
        </div>
        <h3 className="text-2xl font-bold">Калькулятор экономии</h3>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="power">Мощность потребления (кВт)</Label>
          <Input
            id="power"
            type="text"
            inputMode="numeric"
            value={power}
            onChange={(e) => setPower(e.target.value.replace(/[^0-9]/g, ''))}
            onFocus={(e) => e.target.select()}
            placeholder="Введите мощность"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="hours">Часов работы в сутки</Label>
          <Input
            id="hours"
            type="text"
            inputMode="numeric"
            value={hoursPerDay}
            onChange={(e) => setHoursPerDay(e.target.value.replace(/[^0-9]/g, ''))}
            onFocus={(e) => e.target.select()}
            placeholder="Введите часы"
            className="mt-2"
          />
        </div>

        <div>
          <Label htmlFor="days">Дней в месяц</Label>
          <Input
            id="days"
            type="text"
            inputMode="numeric"
            value={daysPerMonth}
            onChange={(e) => setDaysPerMonth(e.target.value.replace(/[^0-9]/g, ''))}
            onFocus={(e) => e.target.select()}
            placeholder="Введите дни"
            className="mt-2"
          />
        </div>
      </div>

      <div className="space-y-3 p-4 rounded-lg bg-muted/30">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Потребление в месяц:</span>
          <span className="font-semibold">{kWhPerMonth.toLocaleString()} кВт·ч</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Рыночная стоимость (5,5 ₽):</span>
          <span className="font-semibold">{marketCost.toLocaleString()} ₽</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">По ЦФА (3,85 ₽):</span>
          <span className="font-semibold text-energy">{ucpCost.toLocaleString()} ₽</span>
        </div>

        <div className="pt-3 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="font-bold">Экономия:</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-energy">
                {savings.toLocaleString()} ₽
              </div>
              <div className="text-sm text-muted-foreground">
                (~{savingsPercent}% / месяц)
              </div>
            </div>
          </div>

          <div className="mt-2 text-sm text-muted-foreground text-right">
            {(savings * 12).toLocaleString()} ₽ в год
          </div>
        </div>
      </div>
    </Card>
  );
};
