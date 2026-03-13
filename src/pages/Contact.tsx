import { Card } from "@/components/ui/card";
import { LeadForm } from "@/components/LeadForm";
import { Mail, MessageSquare, FileText, Phone, Globe, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {!showThankYou ? (
            <>
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-gradient">Контакты</span>
              </h1>

              <p className="text-xl text-muted-foreground mb-12">
                Оставьте заявку, и мы свяжемся с вами для обсуждения условий приобретения
                долговых ГЦП или партнёрства.
              </p>

              {/* Address */}
              <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)] mb-6">
                <div className="p-3 rounded-lg bg-energy/10 w-fit mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-energy" />
                </div>
                <h3 className="font-bold mb-2">Адрес офиса</h3>
                <p className="text-sm text-muted-foreground">
                  424020, Республика Марий Эл, г. Йошкар-Ола, ул. Машиностроителей д.&nbsp;8Г, офис 405/1
                </p>
              </Card>

              {/* Contact Details */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit mx-auto mb-4">
                    <Phone className="h-6 w-6 text-energy" />
                  </div>
                  <h3 className="font-bold mb-2">Телефон</h3>
                  <a href="tel:88006008778" className="text-sm text-energy hover:underline">
                    8 800 600 87 78
                  </a>
                </Card>

                <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit mx-auto mb-4">
                    <Mail className="h-6 w-6 text-energy" />
                  </div>
                  <h3 className="font-bold mb-2">E-mail по ЦФА</h3>
                  <a href="mailto:cfa@energy-tech.pro" className="text-sm text-energy hover:underline break-all">
                    cfa@energy-tech.pro
                  </a>
                </Card>

                <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit mx-auto mb-4">
                    <Globe className="h-6 w-6 text-energy" />
                  </div>
                  <h3 className="font-bold mb-2">Сайт компании</h3>
                  <a href="https://energy-tech.pro" target="_blank" rel="noopener noreferrer" className="text-sm text-energy hover:underline">
                    energy-tech.pro
                  </a>
                </Card>
              </div>

              {/* Topics */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit mx-auto mb-4">
                    <Mail className="h-6 w-6 text-energy" />
                  </div>
                  <h3 className="font-bold mb-2">Покупка ЦФА</h3>
                  <p className="text-sm text-muted-foreground">
                    Приобретение долговых ЦФА с доходностью 25%
                  </p>
                </Card>

                <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit mx-auto mb-4">
                    <MessageSquare className="h-6 w-6 text-energy" />
                  </div>
                  <h3 className="font-bold mb-2">Консультация</h3>
                  <p className="text-sm text-muted-foreground">
                    Вопросы по условиям выпуска и доходности
                  </p>
                </Card>

                <Card className="p-6 bg-card border-border text-center shadow-[var(--shadow-card)]">
                  <div className="p-3 rounded-lg bg-energy/10 w-fit mx-auto mb-4">
                    <FileText className="h-6 w-6 text-energy" />
                  </div>
                  <h3 className="font-bold mb-2">Партнёрство</h3>
                  <p className="text-sm text-muted-foreground">
                    Сотрудничество и инвестиции
                  </p>
                </Card>
              </div>

              <Card className="p-8 bg-card border-border shadow-[var(--shadow-card)]">
                <h2 className="text-2xl font-bold mb-6">Форма заявки</h2>
                <LeadForm onSuccess={() => setShowThankYou(true)} />
              </Card>

              <div className="mt-12 p-6 rounded-lg bg-muted/30 border border-border">
                <h3 className="text-lg font-bold mb-3">Политика обработки персональных данных</h3>
                <p className="text-sm text-muted-foreground">
                  Отправляя форму, вы соглашаетесь на обработку персональных данных в соответствии
                  с Федеральным законом № 152-ФЗ «О персональных данных». Мы используем ваши данные
                  исключительно для связи с вами по вопросам, указанным в заявке, и не передаём их третьим лицам.
                </p>
              </div>
            </>
          ) : (
            <Card className="p-12 bg-gradient-to-br from-card via-card to-energy/5 border-energy/30 text-center shadow-[var(--shadow-card)]">
              <div className="max-w-2xl mx-auto">
                <div className="w-20 h-20 rounded-full bg-energy/10 flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-10 w-10 text-energy" />
                </div>

                <h1 className="text-4xl font-bold mb-4">
                  Спасибо за вашу заявку!
                </h1>

                <p className="text-xl text-muted-foreground mb-8">
                  Мы получили ваше сообщение и свяжемся с вами в ближайшее время.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-energy text-accent-foreground hover:bg-energy-glow h-11 px-8"
                  >
                    Вернуться на главную
                  </a>
                  <a
                    href="/docs"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-card border-2 border-energy/40 text-foreground hover:bg-energy/10 hover:border-energy h-11 px-8"
                  >
                    Посмотреть документы
                  </a>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
