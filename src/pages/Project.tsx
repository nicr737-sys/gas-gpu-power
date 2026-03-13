import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Cpu, Wind, Gauge, Zap, ThermometerSnowflake, Volume2, Settings, ExternalLink } from "lucide-react";

const Project = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 break-words">
            Проект <span className="text-gradient">«электротокены»</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 break-words">
            Автономный энергетический модуль 1 МВт (АЭМ-1), объединяющий газовую электростанцию и майнинговое оборудование в единую энергоэффективную систему.
          </p>

          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 break-words">Энергетический центр проекта: Параметры площадки и газовой инфраструктуры</h2>
            <p className="text-muted-foreground mb-8 break-words">Проект реализуется на специально подготовленной промышленной территории с обеспеченными лимитами на газ, что позволяет развернуть мощную генерацию на базе газопоршневых установок (ГПУ).</p>

            <div className="space-y-8">
              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit shrink-0"><Box className="h-6 w-6 text-energy" /></div>
                  <div><h3 className="text-xl font-bold mb-2">1. Земельный участок</h3><p className="text-muted-foreground break-words">Площадка под размещение энергоцентра находится в долгосрочной аренде с правом последующего выкупа.</p></div>
                </div>
                <div className="pl-0 sm:pl-14 space-y-3 text-muted-foreground">
                  <p className="break-words"><span className="font-semibold text-foreground">Локация:</span> Республика Марий Эл, Медведевский район, пгт. Медведево (промышленная зона).</p>
                  <p className="break-words"><span className="font-semibold text-foreground">Площадь участка:</span> 16 320 кв. м (1,63 Га).</p>
                  <p className="break-words"><span className="font-semibold text-foreground">Категория и назначение:</span> Земли населенных пунктов, для производственных нужд.</p>
                  <p className="break-words"><span className="font-semibold text-foreground">Юридический статус:</span> Договор аренды на 10 лет (до сентября 2035 года).</p>
                  <p className="break-words"><span className="font-semibold text-foreground">Перспектива собственности:</span> Исключительное право на приобретение участка в собственность.</p>
                  <p className="break-words"><span className="font-semibold text-foreground">Стоимость владения:</span> ~2,02 млн руб. в год.</p>
                  <div className="mt-4"><Button asChild size="sm" variant="energy"><a href="/!DOC/DOGOVOR-01-2A25/index.html" target="_blank" rel="noopener noreferrer">Посмотреть договор<ExternalLink className="ml-2 h-4 w-4" /></a></Button></div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit shrink-0"><Wind className="h-6 w-6 text-energy" /></div>
                  <div><h3 className="text-xl font-bold mb-2">2. Газовая инфраструктура</h3><p className="text-muted-foreground break-words">Подписан договор о технологическом присоединении с ООО «Газпром газораспределение Йошкар-Ола».</p></div>
                </div>
                <div className="pl-0 sm:pl-14 space-y-3 text-muted-foreground">
                  <div><p className="font-semibold text-foreground mb-1 break-words">Выделенный объем газа (Лимит): 10 000 куб. м в час.</p><p className="ml-0 sm:ml-4 text-sm break-words"><span className="font-semibold text-foreground">Для инвестора:</span> Данный объем газа позволяет обеспечить работу энергоцентра электрической мощностью порядка 40 МВт.</p></div>
                  <div><p className="font-semibold text-foreground">Параметры подключения:</p><p className="ml-0 sm:ml-4 break-words">Газопровод высокого давления (0,6 МПа).</p></div>
                  <p className="break-words"><span className="font-semibold text-foreground">Точка подключения:</span> Граница земельного участка.</p>
                  <p className="break-words"><span className="font-semibold text-foreground">Сроки газификации:</span> Март-апрель 2026.</p>
                  <div className="mt-4"><Button asChild size="sm" variant="energy"><a href="/!DOC/Dogovor-821-2025/index.html" target="_blank" rel="noopener noreferrer">Посмотреть договор<ExternalLink className="ml-2 h-4 w-4" /></a></Button></div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit shrink-0"><Gauge className="h-6 w-6 text-energy" /></div>
                  <div><h3 className="text-xl font-bold mb-2">3. Экономика подключения и тарифы</h3><p className="text-muted-foreground break-words">Проект зафиксировал выгодные условия на вход в энергетическую инфраструктуру.</p></div>
                </div>
                <div className="pl-0 sm:pl-14 space-y-3 text-muted-foreground">
                  <div><p className="font-semibold text-foreground mb-1">Стоимость техприсоединения (CAPEX):</p><p className="ml-0 sm:ml-4 break-words">Плата за подключение составляет <span className="font-semibold text-foreground">5 493 150,44 руб.</span> (включая НДС).</p></div>
                  <p className="break-words"><span className="font-semibold text-foreground">Условия оплаты:</span> Рассрочка платежей на период строительства (25% сразу, 25% в течение 3 месяцев, 35% в течение года, 15% после подписания акта).</p>
                  <div><p className="font-semibold text-foreground mb-1">Стоимость потребления (OPEX):</p><p className="ml-0 sm:ml-4 break-words">Цена газа будет определяться отдельным договором поставки с региональным поставщиком после ввода объекта в эксплуатацию.</p></div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-energy/10 to-transparent border-energy/30">
                <h3 className="text-xl font-bold mb-3 text-energy">Резюме для инвестора</h3>
                <p className="text-foreground leading-relaxed break-words">Проект обладает юридически закрепленными правами на земельный актив и подтвержденными техническими условиями на огромный объем газа (10 000 м³/час) по высокому давлению. Низкая стоимость присоединения (~5,5 млн руб.) существенно повышает рентабельность (ROI) будущего энергоцентра.</p>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 break-words">Конструкция автономного энергетического модуля</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4"><Zap className="h-8 w-8 text-energy" /></div>
                <h3 className="text-2xl font-bold mb-3">Отсек А</h3>
                <h4 className="text-lg font-semibold text-energy mb-3">Газопоршневая электростанция</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {["5 газопоршневых установок (ГПУ)","Газопоршневой двигатель WEICHAI WP 13 D317E300NG","Синхронный генератор ENGGA","Система автоматического управления SmartGen 8120Z","Шкафы ЩАУ с системой учёта электроэнергии","Система охлаждения и вентиляции","Корпус шумоподавления","Глушитель"].map((t,i) => <li key={i} className="flex items-start gap-2"><span className="text-energy mt-1">•</span>{t}</li>)}
                </ul>
              </Card>
              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4"><Cpu className="h-8 w-8 text-energy" /></div>
                <h3 className="text-2xl font-bold mb-3">Отсек B</h3>
                <h4 className="text-lg font-semibold text-energy mb-3">ASIC-стойки для майнинга</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {["Монтажные стойки для ASIC-майнеров","Приточно-вытяжная вентиляция","Высокоэффективные пылевые фильтры","Система шумоглушения","Распределённые PDU с поканальным учётом"].map((t,i) => <li key={i} className="flex items-start gap-2"><span className="text-energy mt-1">•</span>{t}</li>)}
                </ul>
              </Card>
            </div>

            <h3 className="text-2xl font-bold mt-10 mb-6">Паспорт ГПУ-250</h3>
            <Card className="p-6 sm:p-8 bg-card border-border shadow-[var(--shadow-card)]">
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    { icon: Gauge, label: "Максимальная мощность", value: "250 кВт" },
                    { icon: Gauge, label: "Номинальная мощность", value: "200 кВт" },
                    { icon: Settings, label: "Двигатель", value: "WEICHAI WP 13 D317E300NG" },
                    { icon: Zap, label: "Генератор", value: "ENGGA EG280-250N" },
                    { icon: Wind, label: "Расход газа (номинал)", value: "45 нм³/ч" },
                    { icon: Zap, label: "Выходное напряжение", value: "400 В, 50 Гц" },
                    { icon: Settings, label: "Контроллер", value: "SmartGen 8120Z" },
                    { icon: ThermometerSnowflake, label: "Охлаждение", value: "Жидкостное, закрытое" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 text-energy shrink-0" />
                      <div><div className="text-sm text-muted-foreground">{item.label}</div><div className="font-bold">{item.value}</div></div>
                    </div>
                  ))}
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground break-words">* Подробные технические характеристики доступны в <a href="/docs" className="text-energy hover:underline">паспорте ГПУ-250</a></p>
                </div>
              </div>
            </Card>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Инженерные решения</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Wind, title: "Газоснабжение", desc: "Подключение к магистральному газопроводу. Система контроля давления и аварийного отключения." },
                { icon: ThermometerSnowflake, title: "Охлаждение", desc: "Комбинированная система: жидкостное охлаждение двигателя + приточно-вытяжная вентиляция майнинг-отсека." },
                { icon: Zap, title: "АВР и учёт электроэнергии", desc: "Автоматический ввод резерва, поканальный учёт потребления, защита от перегрузок." },
                { icon: Volume2, title: "Шумоглушение", desc: "Промышленные глушители на выхлопе, звукоизоляция стен контейнера. Уровень шума ≤ 75 дБ на расстоянии 1 м." },
              ].map((item, i) => (
                <Card key={i} className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                  <item.icon className="h-6 w-6 text-energy mb-3" />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground break-words">{item.desc}</p>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Project;
