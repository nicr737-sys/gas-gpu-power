import { AlertCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 border border-border mb-6">
          <AlertCircle className="h-5 w-5 text-energy shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            <p className="font-semibold text-foreground mb-1">Правовая информация</p>
            <p className="break-words">
              Гибридные цифровые права (ГЦП) не являются банковским вкладом и не застрахованы
              по ФЗ-177 «О страховании вкладов физических лиц в банках Российской Федерации».
              Инвестиционные риски несёт приобретатель. Данное предложение не адресовано лицам
              из юрисдикций с ограничениями на приобретение цифровых финансовых активов.
              Выпуск и обращение осуществляются в соответствии с ФЗ-259 «О цифровых финансовых активах,
              цифровой валюте и о внесении изменений в отдельные законодательные акты Российской Федерации»
              и ФЗ-489.
            </p>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 Электротокены. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
