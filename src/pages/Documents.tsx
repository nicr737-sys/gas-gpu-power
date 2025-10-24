import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, ExternalLink, Clock } from "lucide-react";

const Documents = () => {
  const documents = [
    {
      title: "Паспорт ГПУ-250",
      description: "Технический паспорт газопоршневой установки WEICHAI WP13-49 / ENGGA EG280-250N с полными техническими характеристиками и эксплуатационными данными.",
      type: "PDF",
      size: "2.4 МБ",
      available: true,
      downloadUrl: "#", // В реальном проекте здесь будет ссылка на файл
    },
    {
      title: "Проект «Решения о выпуске»",
      description: "Проект решения о выпуске цифровых финансовых активов (УЦП/ГЦП) с условиями выпуска, обращения и погашения. Будет опубликован после согласования с оператором ОИС.",
      type: "PDF",
      size: "TBD",
      available: false,
      downloadUrl: "#",
    },
    {
      title: "Регламенты ОИС",
      description: "Правила и регламенты работы оператора информационной системы, через которую осуществляется выпуск и обращение ЦФА.",
      type: "Ссылка",
      size: "—",
      available: false,
      externalUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Документы</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12">
            Технические паспорта, решения о выпуске и регламенты операторов информационных систем.
          </p>

          {/* Documents List */}
          <div className="space-y-6 mb-16">
            {documents.map((doc, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card border-border hover:border-energy/30 transition-all shadow-[var(--shadow-card)]"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="p-4 rounded-lg bg-energy/10 shrink-0">
                    <FileText className="h-8 w-8 text-energy" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-2xl font-bold">{doc.title}</h3>
                      {!doc.available && (
                        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm shrink-0">
                          <Clock className="h-4 w-4" />
                          <span>Скоро</span>
                        </div>
                      )}
                    </div>

                    <p className="text-muted-foreground mb-4">{doc.description}</p>

                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="px-2 py-1 rounded bg-muted">{doc.type}</span>
                        {doc.size !== "—" && (
                          <span>{doc.size}</span>
                        )}
                      </div>

                      {doc.available && doc.downloadUrl && (
                        <Button variant="energy" asChild>
                          <a href={doc.downloadUrl} download>
                            <Download className="mr-2 h-4 w-4" />
                            Скачать
                          </a>
                        </Button>
                      )}

                      {doc.available && doc.externalUrl && (
                        <Button variant="hero" asChild>
                          <a href={doc.externalUrl} target="_blank" rel="noopener noreferrer">
                            Открыть
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      )}

                      {!doc.available && (
                        <Button variant="outline" disabled>
                          В процессе подготовки
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* External Resources */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Внешние ресурсы</h2>
            
            <div className="space-y-4">
              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4">
                  <ExternalLink className="h-6 w-6 text-energy shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Реестр операторов информационных систем ЦБ РФ</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Официальный реестр операторов ОИС для выпуска и обращения цифровых финансовых активов.
                    </p>
                    <Button variant="hero" size="sm" asChild>
                      <a href="https://cbr.ru/fintech/dfa/" target="_blank" rel="noopener noreferrer">
                        Перейти на сайт ЦБ РФ
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-energy shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">ФЗ-259 «О цифровых финансовых активах»</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Федеральный закон, регулирующий выпуск, обращение и погашение цифровых финансовых активов в Российской Федерации.
                    </p>
                    <Button variant="hero" size="sm" asChild>
                      <a href="http://www.consultant.ru/document/cons_doc_LAW_358753/" target="_blank" rel="noopener noreferrer">
                        Читать на КонсультантПлюс
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-card border-border shadow-[var(--shadow-card)]">
                <div className="flex items-start gap-4">
                  <FileText className="h-6 w-6 text-energy shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2">Страница выбранного оператора ОИС</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Ссылка на страницу оператора информационной системы будет добавлена после выбора конкретного оператора.
                    </p>
                    <Button variant="outline" size="sm" disabled>
                      Будет добавлена позже
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Documents;
