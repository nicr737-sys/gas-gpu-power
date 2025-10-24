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
          <h1 className="text-5xl font-bold mb-6">
            Условия выпуска <span className="text-gradient">УЦП/ГЦП</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Цифровые финансовые активы, предоставляющие право на получение электроэнергии 
            по фиксированному тарифу 3,6 ₽/кВт·ч.
          </p>

          {/* Models */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Модели цифровых прав</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                  <FileText className="h-8 w-8 text-energy" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Модель 1: УЦП</h3>
                <h4 className="text-lg font-semibold text-energy mb-4">Утилитарные цифровые права</h4>
                <p className="text-muted-foreground mb-4">
                  УЦП предоставляют право на получение определённого количества электроэнергии 
                  (кВт·ч) по фиксированной цене 3,6 ₽/кВт·ч.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Право на поставку кВт·ч по графику
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Фиксированная цена 3,6 ₽/кВт·ч
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Поставка от собственных ГПУ
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Учёт через систему ОИС
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                  <FileText className="h-8 w-8 text-energy" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Модель 2: ГЦП</h3>
                <h4 className="text-lg font-semibold text-energy mb-4">Гибридные цифровые права</h4>
                <p className="text-muted-foreground mb-4">
                  ГЦП совмещают признаки УЦП и ЦФА, предоставляя дополнительные опции 
                  использования (денежный расчёт, товар, услуга).
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
                    Поддержка ОИС (в зависимости от оператора)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Расширенные права приобретателя
                  </li>
                </ul>
              </Card>
            </div>

            <div className="p-4 rounded-lg bg-muted/50 border border-border">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Важно:</strong> Окончательный выбор модели 
                (УЦП или ГЦП) зависит от возможностей выбранного оператора информационной системы 
                и согласования условий выпуска.
              </p>
            </div>
          </section>

          {/* Acquisition Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Процесс приобретения</h2>
            
            <div className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Идентификация",
                  description: "Прохождение процедуры KYC/KYB в соответствии с требованиями оператора ОИС и законодательства РФ"
                },
                {
                  step: 2,
                  title: "Присоединение к правилам ОИС",
                  description: "Ознакомление и присоединение к правилам информационной системы, через которую осуществляется выпуск"
                },
                {
                  step: 3,
                  title: "Покупка цифровых прав",
                  description: "Приобретение УЦП/ГЦП по установленной цене через интерфейс оператора или банка-оператора"
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
                      <p className="text-muted-foreground">{item.description}</p>
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
                  <p className="text-sm text-muted-foreground mb-3">
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
            <h2 className="text-3xl font-bold mb-8">Ключевые условия</h2>
            
            <Card className="p-8 bg-card border-border shadow-[var(--shadow-card)]">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Цена за кВт·ч</div>
                    <div className="text-2xl font-bold text-energy">3,6 ₽</div>
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
                  <p className="text-sm text-muted-foreground">
                    * Детальные условия выпуска будут опубликованы в решении о выпуске после согласования с оператором ОИС
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Legal Notice */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Юридическая информация</h2>
            
            <Card className="p-6 bg-destructive/5 border-destructive/20 shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-0.5" />
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Важные ограничения и риски</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        Цифровые финансовые активы (УЦП/ГЦП) <strong>не являются банковским вкладом</strong> 
                        и <strong>не застрахованы</strong> по ФЗ-177 «О страховании вкладов физических лиц в банках РФ»
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <strong>Инвестиционные риски несёт приобретатель.</strong> Стоимость и доступность 
                        поставки могут зависеть от технических и экономических факторов
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        Данное предложение <strong>не адресовано лицам</strong> из юрисдикций с ограничениями 
                        на приобретение цифровых финансовых активов
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        Выпуск и обращение осуществляются в соответствии с <strong>ФЗ-259</strong> 
                        «О цифровых финансовых активах, цифровой валюте и о внесении изменений 
                        в отдельные законодательные акты Российской Федерации»
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-destructive/20">
                    <h4 className="font-semibold mb-2">Нормативная база</h4>
                    <p className="text-sm text-muted-foreground">
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
            <Card className="p-8 bg-gradient-to-br from-card via-card to-energy/5 border-energy/30 text-center shadow-[var(--shadow-card)]">
              <ShieldCheck className="h-12 w-12 text-energy mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Готовы приобрести цифровые права?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Оставьте заявку, и мы проконсультируем вас по условиям выпуска УЦП/ГЦП 
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
