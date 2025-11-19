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
                  <h3 className="font-semibold text-lg mb-1">Ноябрь 2024 - Подготовка площадки</h3>
                  <p className="text-muted-foreground">
                    Завершена подготовка промышленной территории в Медведевском районе (1,63 Га). 
                    Оформлен долгосрочный договор аренды земельного участка до сентября 2035 года.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ноябрь 2024 - Закупка оборудования</h3>
                  <p className="text-muted-foreground">
                    Приобретено вычислительное оборудование промышленного класса. 
                    Размещен парк из сотен устройств с общей расчетной мощностью для последующей интеграции 
                    в энергетический центр на базе ГПУ.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-energy flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Ноябрь 2025 - Газификация</h3>
                  <p className="text-muted-foreground">
                    Подписан договор технологического присоединения с ООО «Газпром газораспределение Йошкар-Ола» 
                    на выделение 10 000 м³/час газа. Стоимость присоединения составляет 5,5 млн руб. 
                    Плановый срок завершения подключения - середина 2027 года.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 opacity-60">
                <div className="w-6 h-6 flex-shrink-0 mt-1 border-2 border-muted-foreground/50 rounded-full" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">2027 - Запуск ГПУ</h3>
                  <p className="text-muted-foreground">
                    Планируется развертывание газопоршневых установок общей мощностью до 40 МВт. 
                    Начало промышленной эксплуатации энергетического центра.
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

        {/* Photo Gallery */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center mb-8">Фотоматериалы с объекта</h2>

          {/* Main warehouse photo */}
          <Card className="card-elevated overflow-hidden">
            <CardHeader>
              <CardTitle>Общий вид производственного помещения</CardTitle>
              <CardDescription>
                Промышленное здание под размещение вычислительного парка с системой вентиляции
              </CardDescription>
            </CardHeader>
            <CardContent>
              <img 
                src={warehouseImg} 
                alt="Общий вид склада с оборудованием" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </CardContent>
          </Card>

          {/* Detailed photos grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover overflow-hidden">
              <CardHeader>
                <CardTitle>Стеллажи с оборудованием</CardTitle>
                <CardDescription>
                  Организация размещения устройств с оптимальным охлаждением
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={rack1Img} 
                  alt="Стеллаж с вычислительным оборудованием" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>

            <Card className="card-hover overflow-hidden">
              <CardHeader>
                <CardTitle>Детальный вид монтажа</CardTitle>
                <CardDescription>
                  Кабельная инфраструктура и система охлаждения в работе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={rack2Img} 
                  alt="Детальный вид оборудования на стеллажах" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Video Section */}
          <div className="mt-12">
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
