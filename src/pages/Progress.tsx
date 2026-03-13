import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import progressPhoto1 from "@/assets/progress-photo-1.jpg";
import progressPhoto2 from "@/assets/progress-photo-2.jpg";
import progressPhoto3 from "@/assets/progress-photo-3.jpg";
import progressPhoto5 from "@/assets/progress-photo-5.jpg";
import progressPhoto6 from "@/assets/progress-photo-6.jpg";
import progressPhoto7 from "@/assets/progress-photo-7.jpg";
import progressPhoto9 from "@/assets/progress-photo-9.jpg";
import warehouseImg from "@/assets/progress-warehouse.jpg";
import gasLaying1 from "@/assets/gas-laying-1.jpg";
import gasLaying2 from "@/assets/gas-laying-2.jpg";
import gasLaying3 from "@/assets/gas-laying-3.jpg";
import energyContainer1 from "@/assets/energy-container-1.jpg";
import energyContainer2 from "@/assets/energy-container-2.jpg";
import { CheckCircle2, Calendar, MapPin, Flame, Container } from "lucide-react";

const Progress = () => {
  const productionPhotos = [
    { src: progressPhoto3, alt: "Производственный цех" },
    { src: progressPhoto6, alt: "Контейнеры в производственном помещении" },
  ];
  const photos = [
    { src: progressPhoto1, alt: "Площадка с контейнерами и оборудованием" },
    { src: progressPhoto2, alt: "Двигатель газопоршневой установки" },
    { src: progressPhoto5, alt: "Строительная площадка" },
    { src: progressPhoto7, alt: "Вычислительное оборудование с панелью управления" },
    { src: progressPhoto9, alt: "Модульные контейнеры с газовой обвязкой" },
    { src: warehouseImg, alt: "Производственное помещение" },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gradient break-words">Реализация проекта</h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto break-words">Фактическое состояние развертывания энергетического центра на промышленной площадке</p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 break-words flex items-center justify-center gap-3">
            <Container className="w-7 h-7 text-energy" />Готовим места для энергоконтейнеров
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">Подготовка площадок и размещение оборудования для энергетических модулей — февраль 2026</p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[{ src: energyContainer1, alt: "Блок энергоконтейнеров" },{ src: energyContainer2, alt: "Подготовка мест для установки" }].map((photo, index) => (
              <Card key={index} className="card-hover overflow-hidden"><CardContent className="p-4"><img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover rounded-lg" /><p className="text-sm text-muted-foreground mt-2 text-center break-words">{photo.alt}</p></CardContent></Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2 break-words flex items-center justify-center gap-3">
            <Flame className="w-7 h-7 text-energy" />Прокладка газа уже началась!
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">Активная фаза строительства газовой инфраструктуры на площадке — февраль 2026</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[{ src: gasLaying1, alt: "Монтаж газовых труб на площадке" },{ src: gasLaying2, alt: "Подготовка газовой обвязки и трубопроводов" },{ src: gasLaying3, alt: "Земляные работы для прокладки газопровода" }].map((photo, index) => (
              <Card key={index} className="card-hover overflow-hidden"><CardContent className="p-4"><img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover rounded-lg" /><p className="text-sm text-muted-foreground mt-2 text-center break-words">{photo.alt}</p></CardContent></Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden">
              <iframe width="100%" height="100%" src="https://rutube.ru/play/embed/1e20f8d3b6f99bafcc48b3207cfab7f1" allow="clipboard-write; autoplay" allowFullScreen className="rounded-lg" />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Фотоматериалы с объекта</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {photos.map((photo, index) => (
              <Card key={index} className="card-hover overflow-hidden"><CardContent className="p-4"><img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover rounded-lg" /><p className="text-sm text-muted-foreground mt-2 text-center break-words">{photo.alt}</p></CardContent></Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 break-words">Собственное производство майнинг-контейнеров</h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {productionPhotos.map((photo, index) => (
              <Card key={index} className="card-hover overflow-hidden"><CardContent className="p-4"><img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover rounded-lg" /><p className="text-sm text-muted-foreground mt-2 text-center break-words">{photo.alt}</p></CardContent></Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Calendar className="w-5 h-5 text-energy" />Хронология развертывания (1 этап)</CardTitle>
              <CardDescription className="mt-2 break-words">В представленной модели отражен первый этап развертывания — подключение 17 автономных энергетических модулей. Все финансовые расчеты и сроки приведены в рамках этого этапа. В перспективе планируется развертывание до 37 модулей.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ноябрь 2025 — Оформление участка и газ</h3>
                  <p className="text-muted-foreground mb-3 break-words">Подписаны твердые контракты, обеспечивающие базу проекта.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-0 sm:ml-4">
                    <li className="break-words"><strong>Земля:</strong> Оформлен договор долгосрочной аренды (до 2035 года) промышленного участка 1,63 Га в пгт. Медведево с правом выкупа.</li>
                    <li className="break-words"><strong>Газ (ТУ):</strong> Заключен договор с «Газпром газораспределение Йошкар-Ола» на техприсоединение (5,5 млн руб.). Зафиксирован лимит газа 10 000 м³/час.</li>
                  </ul>
                </div>
              </div>

              {[
                { title: "Январь – июнь 2026 — Инвестиционная фаза", desc: "Период активных капитальных вложений и строительства.", items: ["Моторокомплекты: Начало платежей за поставку энергетического оборудования. Общая сумма инвестиций в агрегаты составляет 320 000 000 руб."] },
                { title: "Март – май 2026 — Подготовка периметра и сетей", desc: "Активная фаза работ на площадке.", items: ["Благоустройство: Установка ограждения (2 млн руб.), ворот и планировка территории (2,9 млн руб.).", "Внешние сети: Оплата этапов технологического присоединения газа согласно графику договора."] },
                { title: "Апрель – май 2026 — СМР и газовая обвязка", desc: "Самый ответственный технический этап строительства.", items: ["Инженерная инфраструктура: Монтаж системы газовой обвязки — создание \"кровеносной системы\" энергоцентра.", "Здания и сооружения: Возведение складских помещений, бытовых корпусов для персонала и обслуживания оборудования."] },
              ].map((phase, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 flex-shrink-0 mt-1 border-2 border-energy rounded-full flex items-center justify-center"><div className="w-3 h-3 bg-energy rounded-full animate-pulse" /></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{phase.title}</h3>
                    <p className="text-muted-foreground mb-3 break-words">{phase.desc}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground ml-0 sm:ml-4">
                      {phase.items.map((item, j) => <li key={j} className="break-words"><strong>{item.split(":")[0]}:</strong>{item.substring(item.indexOf(":") + 1)}</li>)}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1 bg-gradient-to-br from-energy to-primary rounded-full flex items-center justify-center"><CheckCircle2 className="w-4 h-4 text-foreground" /></div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Июль 2026 — Эксплуатационная фаза</h3>
                  <p className="text-muted-foreground mb-3 break-words">Начало коммерческой эксплуатации энергоцентра.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-0 sm:ml-4">
                    <li className="break-words"><strong>Безопасность и связь:</strong> Развертывание системы видеонаблюдения, подключение высокоскоростного интернета и установка охранных комплексов.</li>
                    <li className="break-words"><strong>Пусконаладка:</strong> Интеграция моторокомплектов в систему, пробные пуски и выход на проектную мощность генерации.</li>
                    <li className="break-words"><strong>Готовность:</strong> Завершение всех капитальных оплат и строительных работ. Старт генерации электроэнергии.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Текущее состояние объекта</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            <Card className="card-hover"><CardHeader><CardTitle className="text-lg">Локация</CardTitle></CardHeader><CardContent><div className="flex items-start gap-2"><MapPin className="w-5 h-5 text-energy flex-shrink-0 mt-1" /><p className="text-sm text-muted-foreground break-words">Республика Марий Эл, Медведевский район, пгт. Медведево (промышленная зона)</p></div></CardContent></Card>
            <Card className="card-hover"><CardHeader><CardTitle className="text-lg">Площадь</CardTitle></CardHeader><CardContent><p className="text-2xl sm:text-3xl font-bold text-energy">16 320 м²</p><p className="text-sm text-muted-foreground mt-2 break-words">Земли населенных пунктов для производственных нужд</p></CardContent></Card>
            <Card className="card-hover"><CardHeader><CardTitle className="text-lg">Оборудование</CardTitle></CardHeader><CardContent><p className="text-2xl sm:text-3xl font-bold text-energy">400+ единиц</p><p className="text-sm text-muted-foreground mt-2 break-words">Вычислительное оборудование размещено и готово к интеграции</p></CardContent></Card>
          </div>
        </div>

        <Card className="mt-16 bg-gradient-to-br from-energy/10 to-transparent border-energy/20">
          <CardHeader><CardTitle className="text-xl sm:text-2xl">Инвестиционная привлекательность</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground break-words">Проект находится на активной стадии реализации с подтвержденными правами на земельный участок и зафиксированными условиями газификации. Низкая стоимость технологического присоединения (~5,5 млн руб. за 10 000 м³/час) и выгодные арендные условия обеспечивают высокую рентабельность будущего энергоцентра.</p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-background/50 rounded-lg"><p className="text-xl sm:text-2xl font-bold text-energy mb-1">40 МВт</p><p className="text-sm text-muted-foreground">Планируемая мощность ГПУ</p></div>
              <div className="text-center p-4 bg-background/50 rounded-lg"><p className="text-xl sm:text-2xl font-bold text-energy mb-1">10 лет</p><p className="text-sm text-muted-foreground">Гарантированная аренда участка</p></div>
              <div className="text-center p-4 bg-background/50 rounded-lg"><p className="text-xl sm:text-2xl font-bold text-energy mb-1">2026</p><p className="text-sm text-muted-foreground">Запуск газопоршневых установок</p></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;
