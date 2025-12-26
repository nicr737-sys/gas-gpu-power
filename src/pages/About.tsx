import { Card } from "@/components/ui/card";
import { Building2, FileText } from "lucide-react";

const About = () => {
  const companyInfo = [
    { label: "Полное наименование", value: "Общество с ограниченной ответственностью «ЭнергоТех»" },
    { label: "Сокращенное наименование", value: "ООО «ЭнергоТех»" },
    { label: "Адрес по ЕГРЮЛ", value: "115230, г. Москва, вн.тер.г. Муниципальный округ Нагорный, проезд Электролитный, д. 1Б" },
    { label: "Почтовый адрес", value: "424020, Республика Марий Эл, г. Йошкар-Ола, ул. Машиностроителей, д. 8Г, офис 405/1" },
    { label: "Обособленное подразделение", value: "424020, Республика Марий Эл, г. Йошкар-Ола, ул. Машиностроителей, д. 8Г, офис 405/1" },
    { label: "Телефон", value: "Офис: +7 (8362) 55-70-80\nБухгалтерия: +7 967 759-10-34" },
    { label: "E-mail", value: "info@energy-tech.pro (Офис, общие вопросы)\nbuh@energy-tech.pro (Бухгалтерия)" },
    { label: "URL", value: "www.energy-tech.pro" },
    { label: "ОГРН", value: "1221200003530" },
    { label: "ИНН", value: "1200007598" },
    { label: "Банковские реквизиты", value: "р/с 40702810615920001004\nФИЛИАЛ «ЦЕНТРАЛЬНЫЙ» БАНКА ВТБ (ПАО)\nк/с 30101810145250000411\nБИК 044525411" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-12">
            <span className="text-gradient">О компании</span>
          </h1>

          <div className="space-y-8">
            {/* Company Information Section */}
            <Card className="p-8 bg-card border-border shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-energy/10">
                  <Building2 className="h-6 w-6 text-energy" />
                </div>
                <h2 className="text-2xl font-bold">Реквизиты</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-energy mb-6">ООО «ЭнергоТех»</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {companyInfo.map((item, index) => (
                      <tr key={index} className="border-b border-border last:border-0">
                        <td className="py-3 pr-4 font-medium text-muted-foreground whitespace-nowrap align-top w-1/3">
                          {item.label}
                        </td>
                        <td className="py-3 text-foreground whitespace-pre-line">
                          {item.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Reports Section */}
            <Card className="p-8 bg-card border-border shadow-[var(--shadow-card)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-energy/10">
                  <FileText className="h-6 w-6 text-energy" />
                </div>
                <h2 className="text-2xl font-bold">Отчетность</h2>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/!DOC/Buhgalsterskiy-balans/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-energy text-accent-foreground hover:bg-transparent hover:text-energy hover:border-energy border-2 border-energy h-11 px-8"
                >
                  Баланс
                </a>
                <a
                  href="/!DOC/Otchet-o-finansovyh-rezultatah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-energy text-accent-foreground hover:bg-transparent hover:text-energy hover:border-energy border-2 border-energy h-11 px-8"
                >
                  Отчет о финансовых результатах
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
