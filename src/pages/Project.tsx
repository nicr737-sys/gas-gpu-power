import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Box, 
  Cpu, 
  Wind, 
  Gauge, 
  Zap,
  ThermometerSnowflake,
  Volume2,
  Settings,
  ExternalLink
} from "lucide-react";

const Project = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Проект <span className="text-gradient">«Энерго-контейнер»</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Двухсекционный модульный контейнер, объединяющий газовую электростанцию 
            и майнинговое оборудование в единую энергоэффективную систему.
          </p>

          {/* Energy Center Parameters */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Энергетический центр проекта: Параметры площадки и газовой инфраструктуры</h2>
            
            <p className="text-muted-foreground mb-8">
              Проект реализуется на специально подготовленной промышленной территории с обеспеченными лимитами на газ, 
              что позволяет развернуть мощную генерацию на базе газопоршневых установок (ГПУ). Ниже приведены фактические 
              данные из подписанных контрактов.
            </p>

            <div className="space-y-8">
              {/* Land Plot */}
              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit">
                    <Box className="h-6 w-6 text-energy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">1. Земельный участок</h3>
                    <p className="text-muted-foreground">
                      Площадка под размещение энергоцентра находится в долгосрочной аренде с правом последующего выкупа, 
                      что гарантирует стабильность размещения оборудования.
                    </p>
                  </div>
                </div>
                
                <div className="pl-14 space-y-3 text-muted-foreground">
                  <p>
                    <span className="font-semibold text-foreground">Локация:</span> Республика Марий Эл, 
                    Медведевский район, пгт. Медведево (промышленная зона).
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Площадь участка:</span> 16 320 кв. м (1,63 Га) — 
                    достаточно для размещения масштабного парка ГПУ и вспомогательной инфраструктуры.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Категория и назначение:</span> Земли населенных пунктов, 
                    вид разрешенного использования — для производственных нужд.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Юридический статус:</span> Договор аренды заключен 
                    сроком на 10 лет (до сентября 2035 года).
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Перспектива собственности:</span> Арендатор имеет 
                    исключительное право на приобретение участка в собственность после завершения строительства и 
                    регистрации энергоблока.
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Стоимость владения:</span> Годовая арендная плата 
                    зафиксирована на уровне ~2,02 млн руб.
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <a href="/!DOC/DOGOVOR-01-2A25/" target="_blank" rel="noopener noreferrer">
                        Посмотреть договор
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Gas Infrastructure */}
              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit">
                    <Wind className="h-6 w-6 text-energy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">2. Газовая инфраструктура</h3>
                    <p className="text-muted-foreground">
                      Подписан договор о технологическом присоединении с ООО «Газпром газораспределение Йошкар-Ола», 
                      обеспечивающий проект необходимым топливом для генерации электроэнергии.
                    </p>
                  </div>
                </div>
                
                <div className="pl-14 space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Выделенный объем газа (Лимит): 10 000 куб. м в час.</p>
                    <p className="ml-4 text-sm">
                      <span className="font-semibold text-foreground">Для инвестора:</span> Данный объем газа позволяет 
                      обеспечить работу энергоцентра электрической мощностью порядка 40 МВт (при среднем расходе газа ~0,25 м³/кВт·ч).
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Параметры подключения:</p>
                    <p className="ml-4">
                      Газопровод высокого давления (0,6 МПа), что является оптимальным для промышленных ГПУ и снижает 
                      затраты на дожимное компрессорное оборудование.
                    </p>
                  </div>
                  <p>
                    <span className="font-semibold text-foreground">Точка подключения:</span> Граница земельного участка 
                    (газопровод высокого давления проложен непосредственно к участку).
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Сроки газификации:</span> Плановый срок выполнения 
                    мероприятий по подключению и пуску газа — 1,5 года с момента заключения договора (ноябрь 2025 г.), 
                    то есть ориентировочно к середине 2027 года.
                  </p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <a href="/!DOC/Dogovor-821-2025/" target="_blank" rel="noopener noreferrer">
                        Посмотреть договор
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Economics */}
              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit">
                    <Gauge className="h-6 w-6 text-energy" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">3. Экономика подключения и тарифы</h3>
                    <p className="text-muted-foreground">
                      Проект зафиксировал выгодные условия на вход в энергетическую инфраструктуру.
                    </p>
                  </div>
                </div>
                
                <div className="pl-14 space-y-3 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Стоимость техприсоединения (CAPEX):</p>
                    <p className="ml-4">
                      Плата за подключение составляет <span className="font-semibold text-foreground">5 493 150,44 руб.</span> (включая НДС). 
                      Это крайне низкая стоимость капитальных затрат для заявленной мощности (10 000 м³/час), достигнутая 
                      благодаря применению стандартизированных тарифных ставок.
                    </p>
                  </div>
                  <p>
                    <span className="font-semibold text-foreground">Условия оплаты:</span> Рассрочка платежей на период 
                    строительства (25% сразу, 25% в течение 3 месяцев, 35% в течение года, 15% после подписания акта).
                  </p>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Стоимость потребления (OPEX):</p>
                    <p className="ml-4">
                      Договор на техприсоединение фиксирует стоимость доступа к сети. Непосредственная цена газа (тариф за 1000 м³) 
                      будет определяться отдельным договором поставки газа с региональным поставщиком после ввода объекта в эксплуатацию, 
                      что дает возможность заключить контракт по регулируемым оптовым ценам для промышленности.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Investor Summary */}
              <Card className="p-6 bg-gradient-to-br from-energy/10 to-transparent border-energy/30">
                <h3 className="text-xl font-bold mb-3 text-energy">Резюме для инвестора</h3>
                <p className="text-foreground leading-relaxed">
                  Проект обладает юридически закрепленными правами на земельный актив и, что наиболее важно, 
                  подтвержденными техническими условиями на огромный объем газа (10 000 м³/час) по высокому давлению. 
                  Низкая стоимость присоединения (~5,5 млн руб.) существенно повышает рентабельность (ROI) будущего 
                  энергоцентра по сравнению с проектами, где требуется строительство протяженных газопроводов.
                </p>
              </Card>
            </div>
          </section>

          {/* Container Structure */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Конструкция контейнера</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                  <Zap className="h-8 w-8 text-energy" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Отсек А</h3>
                <h4 className="text-lg font-semibold text-energy mb-3">Газопоршневая электростанция</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Газопоршневой двигатель WEICHAI WP13
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Синхронный генератор ENGGA
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Система автоматического управления SmartGen 8120Z
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Шкафы ЩАУ с системой учёта электроэнергии
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Система охлаждения и вентиляции
                  </li>
                </ul>
              </Card>

              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                  <Cpu className="h-8 w-8 text-energy" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Отсек B</h3>
                <h4 className="text-lg font-semibold text-energy mb-3">ASIC-стойки для майнинга</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Монтажные стойки для ASIC-майнеров
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Приточно-вытяжная вентиляция
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Высокоэффективные пылевые фильтры
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Система шумоглушения
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-energy mt-1">•</span>
                    Распределённые PDU с поканальным учётом
                  </li>
                </ul>
              </Card>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Технические характеристики ГПУ-250</h2>
            
            <Card className="p-8 bg-card border-border shadow-[var(--shadow-card)]">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  <div className="flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-energy shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Максимальная мощность</div>
                      <div className="font-bold text-lg">250 кВт</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Gauge className="h-5 w-5 text-energy shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Номинальная мощность</div>
                      <div className="font-bold text-lg">175 кВт</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-energy shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Двигатель</div>
                      <div className="font-bold">WEICHAI WP13-49</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-energy shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Генератор</div>
                      <div className="font-bold">ENGGA EG280-250N</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Wind className="h-5 w-5 text-energy shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Расход газа (номинал)</div>
                      <div className="font-bold text-lg">45 нм³/ч</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-energy shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Выходное напряжение</div>
                      <div className="font-bold">400 В, 50 Гц</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Settings className="h-5 w-5 text-energy shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Контроллер</div>
                      <div className="font-bold">SmartGen 8120Z</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <ThermometerSnowflake className="h-5 w-5 text-energy shrink-0" />
                    <div>
                      <div className="text-sm text-muted-foreground">Охлаждение</div>
                      <div className="font-bold">Жидкостное, закрытое</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    * Подробные технические характеристики доступны в{" "}
                    <a href="/docs" className="text-energy hover:underline">
                      паспорте ГПУ-250
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Configurations */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Доступные конфигурации</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
                <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                  <Box className="h-8 w-8 text-energy" />
                </div>
                <h3 className="text-xl font-bold mb-2">Single</h3>
                <div className="text-3xl font-bold text-energy mb-3">1×250 кВт</div>
                <p className="text-sm text-muted-foreground">
                  Компактная конфигурация для малых и средних майнинг-ферм
                </p>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
                <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                  <Box className="h-8 w-8 text-energy" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dual</h3>
                <div className="text-3xl font-bold text-energy mb-3">2×250 кВт</div>
                <p className="text-sm text-muted-foreground">
                  Удвоенная мощность с резервированием для крупных объектов
                </p>
              </Card>

              <Card className="p-6 bg-card border-border hover:border-energy/50 transition-all duration-300 shadow-[var(--shadow-card)]">
                <div className="p-3 rounded-lg bg-energy/10 w-fit mb-4">
                  <Box className="h-8 w-8 text-energy" />
                </div>
                <h3 className="text-xl font-bold mb-2">400-кВт</h3>
                <div className="text-3xl font-bold text-energy mb-3">1×400 кВт</div>
                <p className="text-sm text-muted-foreground">
                  Максимальная мощность для промышленных масштабов
                </p>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-6 text-sm">
              Детальные спецификации для каждой конфигурации — по запросу
            </p>
          </section>

          {/* Engineering */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Инженерные решения</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <Wind className="h-6 w-6 text-energy mb-3" />
                <h3 className="text-lg font-bold mb-2">Газоснабжение</h3>
                <p className="text-muted-foreground">
                  Подключение к магистральному газопроводу. Система контроля давления и аварийного отключения.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <ThermometerSnowflake className="h-6 w-6 text-energy mb-3" />
                <h3 className="text-lg font-bold mb-2">Охлаждение</h3>
                <p className="text-muted-foreground">
                  Комбинированная система: жидкостное охлаждение двигателя + приточно-вытяжная вентиляция майнинг-отсека.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <Zap className="h-6 w-6 text-energy mb-3" />
                <h3 className="text-lg font-bold mb-2">АВР и учёт электроэнергии</h3>
                <p className="text-muted-foreground">
                  Автоматический ввод резерва, поканальный учёт потребления, защита от перегрузок.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <Volume2 className="h-6 w-6 text-energy mb-3" />
                <h3 className="text-lg font-bold mb-2">Шумоглушение</h3>
                <p className="text-muted-foreground">
                  Промышленные глушители на выхлопе, звукоизоляция стен контейнера. Уровень шума ≤ 75 дБ на расстоянии 1 м.
                </p>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Project;
