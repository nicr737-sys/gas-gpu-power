import { useParams, Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, ArrowLeft } from "lucide-react";

// Маппинг slug -> информация о документе
const documentsMap: Record<string, {
  title: string;
  description: string;
  type: string;
  size: string;
  downloadUrl?: string;
  content?: string;
}> = {
  "DOGOVOR-01-2A25": {
    title: "Договор №01-2A25",
    description: "Договор аренды земельного участка в Медведево, Республика Марий Эл.",
    type: "PDF",
    size: "1.2 МБ",
    downloadUrl: "/documents/DOGOVOR-01-2A25.pdf",
  },
  // Добавьте другие документы здесь
};

const DocumentViewer = () => {
  const { slug } = useParams<{ slug: string }>();
  const document = slug ? documentsMap[slug] : null;

  if (!document) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Документ не найден</h1>
            <p className="text-muted-foreground mb-8">
              Документ с идентификатором "{slug}" не существует или был удалён.
            </p>
            <Button variant="energy" asChild>
              <Link to="/docs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                К списку документов
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <Link 
            to="/docs" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Назад к документам
          </Link>

          <Card className="p-8 bg-card border-border shadow-[var(--shadow-card)]">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-lg bg-energy/10 shrink-0">
                <FileText className="h-10 w-10 text-energy" />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-4">{document.title}</h1>
                <p className="text-muted-foreground mb-6">{document.description}</p>

                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <span className="px-2 py-1 rounded bg-muted">{document.type}</span>
                  <span>{document.size}</span>
                </div>

                {document.downloadUrl && (
                  <Button variant="energy" asChild>
                    <a href={document.downloadUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      Скачать документ
                    </a>
                  </Button>
                )}

                {document.content && (
                  <div className="mt-8 p-6 bg-muted rounded-lg">
                    <pre className="whitespace-pre-wrap text-sm">{document.content}</pre>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;
