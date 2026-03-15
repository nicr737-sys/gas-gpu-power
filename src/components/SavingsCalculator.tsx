import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

export const SavingsCalculator = () => {
  const [power, setPower] = useState<string>("3");
  const [hoursPerDay, setHoursPerDay] = useState<string>("24");
  const [daysPerMonth, setDaysPerMonth] = useState<string>("30");

  const powerNum = Number(power) || 0;
  const hoursNum = Number(hoursPerDay) || 0;
  const daysNum = Number(daysPerMonth) || 0;

  const tokensPerMonth = powerNum * hoursNum * daysNum;
  const tokensPerYear = tokensPerMonth * 12;

  return (
    <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-energy/10">
          <Calculator className="h-6 w-6 text-energy" />
        </div>
        <h3 className="text-2xl font-bold">Калькулятор токенов IEU</h3>
      </div>

      <p className="text-sm text-muted-foreground mb-6">
        Рассчитайте количество токенов для вашего оборудования. 1 токен = 1 кВт × 1 час.
      </p>

      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="power">Мощность оборудования (кВт)</Label>
          <Input
            id="power"
            type="text"
            inputMode="numeric"
            value={power}
            onChange={(e) => setPower(e.target.value.replace(/[^0-9.]/g, ''))}
            onFocus={(e) => e.target.select()}
            placeholder="Например, 3"
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
          <span className="text-muted-foreground">Мощность оборудования:</span>
          <span className="font-semibold">{powerNum} кВт</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Токенов в час:</span>
          <span className="font-semibold text-energy">{powerNum}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Токенов в сутки:</span>
          <span className="font-semibold">{(powerNum * hoursNum).toLocaleString()}</span>
        </div>

        <div className="pt-3 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="font-bold">Токенов в месяц:</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-energy">
                {tokensPerMonth.toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">
                инфраструктурных часов
              </div>
            </div>
          </div>

          <div className="mt-2 text-sm text-muted-foreground text-right">
            {tokensPerYear.toLocaleString()} токенов в год
          </div>
        </div>
      </div>
    </Card>
  );
};
