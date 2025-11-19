import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import warehouseImg from "@/assets/progress-warehouse.jpg";
import rack1Img from "@/assets/progress-rack-1.jpg";
import rack2Img from "@/assets/progress-rack-2.jpg";
import video1 from "@/assets/progress-video-1.mp4";
import video2 from "@/assets/progress-video-2.mp4";
import video3 from "@/assets/progress-video-3.mp4";
import { CheckCircle2, Calendar, MapPin } from "lucide-react";

const Progress = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Реализация проекта
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Фактическое состояние развертывания энергетического центра на промышленной площадке
          </p>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-energy" />
                Хронология развертывания
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ноябрь 2025 — Юридический фундамент и Земля</h3>
                  <p className="text-muted-foreground mb-3">
                    Подписаны твердые контракты, обеспечивающие базу проекта.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li><strong>Земля:</strong> Оформлен договор долгосрочной аренды (до 2035 года) промышленного участка 1,63 Га в пгт. Медведево с правом выкупа.</li>
                    <li><strong>Газ (ТУ):</strong> Заключен договор с «Газпром газораспределение Йошкар-Ола» на техприсоединение (5,5 млн руб.). Зафиксирован лимит газа 10 000 м³/час.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1 border-2 border-energy rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-energy rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Январь – Июнь 2026 — Закупка генерации (Capex)</h3>
                  <p className="text-muted-foreground mb-3">
                    Старт финансирования основного производственного актива.
                  </p>
                  <p className="text-sm text-muted-foreground ml-4">
                    <strong>Моторокомплекты:</strong> Начало платежей за поставку энергетического оборудования. Общая сумма инвестиций в агрегаты составляет 320 000 000 руб. Планомерное финансирование гарантирует своевременную отгрузку.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1 border-2 border-energy rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-energy rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Март – Май 2026 — Подготовка периметра и сетей</h3>
                  <p className="text-muted-foreground mb-3">
                    Активная фаза работ на площадке.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li><strong>Благоустройство:</strong> Установка ограждения (2 млн руб.), ворот и планировка территории (2,9 млн руб.).</li>
                    <li><strong>Внешние сети:</strong> Оплата этапов технологического присоединения газа согласно графику договора.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1 border-2 border-energy rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-energy rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Июнь – Июль 2026 — СМР и Газовая обвязка</h3>
                  <p className="text-muted-foreground mb-3">
                    Самый ответственный технический этап строительства.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li><strong>Инженерная инфраструктура:</strong> Монтаж системы газовой обвязки (инвестиции 88 000 000 руб.) — создание "кровеносной системы" энергоцентра.</li>
                    <li><strong>Здания и сооружения:</strong> Возведение складских помещений, бытовых корпусов для персонала и обслуживания оборудования.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1 border-2 border-energy rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-energy rounded-full animate-pulse" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Август 2026 — Безопасность и Связь</h3>
                  <p className="text-muted-foreground mb-3">
                    Финализация объекта перед пусконаладкой.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                    <li><strong>IT и охрана:</strong> Развертывание системы видеонаблюдения, подключение высокоскоростного интернета и установка охранных комплексов (тревожная кнопка).</li>
                    <li><strong>Готовность:</strong> Завершение всех капитальных оплат и строительных работ по графику.</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 mt-1 bg-gradient-to-br from-energy to-primary rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Конец 2026 — Пусконаладка и Старт</h3>
                  <p className="text-muted-foreground">
                    Интеграция моторокомплектов в систему, пробные пуски и выход на проектную мощность генерации.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Status */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Текущее состояние объекта</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Локация</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-energy flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">
                    Республика Марий Эл, Медведевский район, пгт. Медведево (промышленная зона)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Площадь</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-energy">16 320 м²</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Земли населенных пунктов для производственных нужд
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Оборудование</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-energy">400+ единиц</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Вычислительное оборудование размещено и готово к интеграции
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Video Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Видеоматериалы с объекта</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-hover overflow-hidden">
              <CardHeader>
                <CardTitle>Обзор помещения</CardTitle>
                <CardDescription>
                  Видеообзор производственного пространства
                </CardDescription>
              </CardHeader>
              <CardContent>
                <video 
                  controls 
                  className="w-full h-auto rounded-lg shadow-lg"
                  preload="metadata"
                >
                  <source src={video1} type="video/mp4" />
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
              </CardContent>
            </Card>

            <Card className="card-hover overflow-hidden">
              <CardHeader>
                <CardTitle>Размещение оборудования</CardTitle>
                <CardDescription>
                  Процесс установки вычислительных устройств
                </CardDescription>
              </CardHeader>
              <CardContent>
                <video 
                  controls 
                  className="w-full h-auto rounded-lg shadow-lg"
                  preload="metadata"
                >
                  <source src={video2} type="video/mp4" />
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
              </CardContent>
            </Card>

            <Card className="card-hover overflow-hidden">
              <CardHeader>
                <CardTitle>Инфраструктура объекта</CardTitle>
                <CardDescription>
                  Системы охлаждения и кабельные трассы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <video 
                  controls 
                  className="w-full h-auto rounded-lg shadow-lg"
                  preload="metadata"
                >
                  <source src={video3} type="video/mp4" />
                  Ваш браузер не поддерживает воспроизведение видео.
                </video>
              </CardContent>
            </Card>
          </div>

          {/* Photo Gallery */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-center mb-8">Фотоматериалы с объекта</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-hover overflow-hidden">
                <CardContent className="p-4">
                  <img 
                    src={warehouseImg} 
                    alt="Общий вид производственного помещения" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    Производственное помещение
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover overflow-hidden">
                <CardContent className="p-4">
                  <img 
                    src={rack1Img} 
                    alt="Стеллажи с оборудованием" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    Стеллажи с оборудованием
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover overflow-hidden">
                <CardContent className="p-4">
                  <img 
                    src={rack2Img} 
                    alt="Детальный вид монтажа" 
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <p className="text-sm text-muted-foreground mt-2 text-center">
                    Детальный вид монтажа
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Investment Note */}
        <Card className="mt-16 bg-gradient-to-br from-energy/10 to-transparent border-energy/20">
          <CardHeader>
            <CardTitle className="text-2xl">Инвестиционная привлекательность</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Проект находится на активной стадии реализации с подтвержденными правами на земельный участок 
              и зафиксированными условиями газификации. Низкая стоимость технологического присоединения 
              (~5,5 млн руб. за 10 000 м³/час) и выгодные арендные условия обеспечивают высокую рентабельность 
              будущего энергоцентра.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <p className="text-2xl font-bold text-energy mb-1">40 МВт</p>
                <p className="text-sm text-muted-foreground">Планируемая мощность ГПУ</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <p className="text-2xl font-bold text-energy mb-1">10 лет</p>
                <p className="text-sm text-muted-foreground">Гарантированная аренда участка</p>
              </div>
              <div className="text-center p-4 bg-background/50 rounded-lg">
                <p className="text-2xl font-bold text-energy mb-1">2027</p>
                <p className="text-sm text-muted-foreground">Запуск газопоршневых установок</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;
