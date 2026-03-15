import { Card } from "@/components/ui/card";
import { AlertCircle, FileText, ShieldCheck, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LeadForm } from "@/components/LeadForm";

const Terms = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 break-words">
            Условия выпуска <span className="text-gradient">УЦП</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 break-words">
            Утилитарные цифровые права, предоставляющие право на получение 1 кВт/ч электроэнергии 
            за 1 (один) токен, либо 5,5 рубля за один токен при погашении деньгами.
          </p>

          {/* GCP Model */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 break-words">Утилитарные цифровые права (УЦП)</h2>
            
            <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)] max-w-xl">
              <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                <FileText className="h-8 w-8 text-energy" />
              </div>
              <p className="text-muted-foreground mb-4 break-words">
                ЦФА совмещают признаки цифровых финансовых активов, предоставляя гибкие опции 
                использования (денежный расчёт, товар, услуга). Технически выпуск осуществляется через механизм ГЦП (гибридных цифровых прав).
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-energy mt-1">•</span>
                  Гибкие сценарии погашения
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy mt-1">•</span>
                  Возможность денежного расчёта
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy mt-1">•</span>
                  Выпуск через инвестиционную платформу (ОИП)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-energy mt-1">•</span>
                  Расширенные права приобретателя
                </li>
              </ul>
            </Card>
          </section>

          {/* Acquisition Process */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Процесс приобретения</h2>
            
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Идентификация",
                  description: "Прохождение процедуры KYC/KYB в соответствии с требованиями оператора инвестиционной платформы и законодательства РФ"
                },
                {
                  step: 2,
                  title: "Присоединение к правилам ОИС",
                  description: "Ознакомление и присоединение к правилам информационной системы, через которую осуществляется выпуск"
                },
                {
                  step: 3,
                    title: "Покупка цифровых прав",
                    description: "Приобретение ЦФА по установленной цене через интерфейс оператора или банка-оператора"
                  },
                {
                  step: 4,
                  title: "Поставка / Расчёт",
                  description: "Получение электроэнергии по графику поставки или реализация других прав в зависимости от модели"
                }
              ].map((item) => (
                <Card key={item.step} className="p-6 bg-card border-border hover:border-energy/30 transition-all shadow-[var(--shadow-card)]">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-full bg-energy/10 border-2 border-energy flex items-center justify-center text-xl font-bold text-energy">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground break-words">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-lg bg-card border border-energy/30">
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-energy shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-2">Выбор оператора информационной системы</h4>
                  <p className="text-sm text-muted-foreground mb-3 break-words">
                    Операторы ОИС для выпуска и обращения ЦФА включены в реестр Банка России. 
                    Ссылки на страницы операторов будут добавлены после выбора конкретного оператора.
                  </p>
                  <a 
                    href="https://cbr.ru/fintech/dfa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-energy hover:underline inline-flex items-center gap-2"
                  >
                    Реестр операторов ОИС ЦБ РФ
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Key Terms */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Ключевые условия</h2>
            
            <Card className="p-6 sm:p-8 bg-card border-border shadow-[var(--shadow-card)]">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Цена за кВт·ч</div>
                    <div className="text-2xl font-bold text-energy">3,85 ₽</div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Экономия относительно рынка</div>
                    <div className="text-2xl font-bold text-energy">~34,5%</div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Минимальный лот</div>
                    <div className="text-lg font-bold text-muted-foreground">TBD</div>
                    <div className="text-xs text-muted-foreground">Уточняется</div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Период поставки</div>
                    <div className="text-lg font-bold text-muted-foreground">TBD</div>
                    <div className="text-xs text-muted-foreground">Уточняется</div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Порядок расчётов</div>
                    <div className="text-lg font-bold text-muted-foreground">TBD</div>
                    <div className="text-xs text-muted-foreground">Уточняется</div>
                  </div>

                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Оператор ОИС</div>
                    <div className="text-lg font-bold text-muted-foreground">TBD</div>
                    <div className="text-xs text-muted-foreground">В процессе выбора</div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground break-words">
                    * Детальные условия выпуска будут опубликованы в решении о выпуске после согласования с оператором инвестиционной платформы
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Legal Notice */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Юридическая информация</h2>
            
            <Card className="p-6 bg-destructive/5 border-destructive/20 shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Важные ограничения и риски</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span className="break-words">Утилитарные цифровые права (УЦП) <strong>не являются банковским вкладом</strong> 
                        и <strong>не застрахованы</strong> по ФЗ-177 «О страховании вкладов физических лиц в банках РФ»</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span className="break-words"><strong>Инвестиционные риски несёт приобретатель.</strong> Стоимость и доступность 
                        поставки могут зависеть от технических и экономических факторов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span className="break-words">Данное предложение <strong>не адресовано лицам</strong> из юрисдикций с ограничениями 
                        на приобретение цифровых финансовых активов</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span className="break-words">Выпуск и обращение осуществляются в соответствии с <strong>ФЗ-259</strong> 
                        «О цифровых финансовых активах, цифровой валюте и о внесении изменений 
                        в отдельные законодательные акты Российской Федерации»</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-destructive/20">
                    <h4 className="font-semibold mb-2">Нормативная база</h4>
                    <p className="text-sm text-muted-foreground break-words">
                      Федеральный закон от 31.07.2020 № 259-ФЗ. Оператор информационной системы 
                      должен быть включён в реестр Банка России.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* CTA */}
          <section>
            <Card className="p-6 sm:p-8 bg-gradient-to-br from-card via-card to-energy/5 border-energy/30 text-center shadow-[var(--shadow-card)]">
              <ShieldCheck className="h-12 w-12 text-energy mx-auto mb-4" />
              <h2 className="text-xl sm:text-2xl font-bold mb-4 break-words">
                Готовы приобрести цифровые права?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto break-words">
                Оставьте заявку, и мы проконсультируем вас по условиям выпуска УЦП 
                и процессу приобретения.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="energy" size="lg">
                    Оставить заявку
                    <ArrowRight className="ml-2 h-5 w-5" />
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
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
