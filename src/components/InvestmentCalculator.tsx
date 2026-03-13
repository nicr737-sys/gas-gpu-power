import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator } from "lucide-react";

export const InvestmentCalculator = () => {
  const [amount, setAmount] = useState<string>("100000");

  const rate = 0.25;
  const nominal = 1000;
  const amountNum = Number(amount) || 0;
  const cfaCount = Math.floor(amountNum / nominal);
  const investedSum = cfaCount * nominal;
  const annualIncome = investedSum * rate;
  const quarterlyIncome = annualIncome / 4;
  const totalReturn = investedSum + annualIncome;

  return (
    <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-energy/10">
          <Calculator className="h-6 w-6 text-energy" />
        </div>
        <h3 className="text-2xl font-bold">Калькулятор доходности</h3>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="amount">Сумма инвестиций (₽)</Label>
          <Input
            id="amount"
            type="text"
            inputMode="numeric"
            value={amount}
            onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
            onFocus={(e) => e.target.select()}
            placeholder="Введите сумму"
            className="mt-2"
          />
        </div>
      </div>

      <div className="space-y-3 p-4 rounded-lg bg-muted/30">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Количество ЦФА:</span>
          <span className="font-semibold">{cfaCount.toLocaleString()} шт.</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Инвестированная сумма:</span>
          <span className="font-semibold">{investedSum.toLocaleString()} ₽</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Ставка:</span>
          <span className="font-semibold">25% годовых</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Доход за квартал:</span>
          <span className="font-semibold text-energy">~{quarterlyIncome.toLocaleString()} ₽</span>
        </div>

        <div className="pt-3 border-t border-border">
          <div className="flex justify-between items-center">
            <span className="font-bold">Доход за год:</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-energy">
                {annualIncome.toLocaleString()} ₽
              </div>
            </div>
          </div>

          <div className="mt-3 flex justify-between items-center">
            <span className="font-bold">Итого к получению:</span>
            <div className="text-right">
              <div className="text-2xl font-bold text-gradient">
                {totalReturn.toLocaleString()} ₽
              </div>
              <div className="text-sm text-muted-foreground">
                номинал + доход
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
