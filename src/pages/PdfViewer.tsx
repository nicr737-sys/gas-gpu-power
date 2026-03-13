import { useSearchParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";

const PdfViewer = () => {
  const [searchParams] = useSearchParams();
  const file = searchParams.get("file");
  const title = searchParams.get("title") || "Документ";

  if (!file) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Файл не указан</h1>
          <Button variant="energy" asChild>
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              На главную
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-8 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Назад
              </Link>
            </Button>
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <Button variant="energy" size="sm" asChild>
            <a href={file} download>
              <Download className="mr-2 h-4 w-4" />
              Скачать
            </a>
          </Button>
        </div>
        <div className="w-full rounded-lg overflow-hidden border border-border" style={{ height: "calc(100vh - 160px)" }}>
          <iframe
            src={file}
            className="w-full h-full"
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
