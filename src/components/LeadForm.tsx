import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, MessageSquare } from "lucide-react";

interface LeadFormProps {
  onSuccess?: () => void;
}

export const LeadForm = ({ onSuccess }: LeadFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requestType: "",
    consumption: "",
    message: "",
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      toast({
        title: "Ошибка",
        description: "Необходимо согласие на обработку персональных данных",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/send-lead-telegram`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при отправке");
      }

      toast({
        title: "Заявка отправлена!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });

      onSuccess?.();
    } catch (err) {
      toast({
        title: "Ошибка отправки",
        description: "Не удалось отправить заявку. Пожалуйста, попробуйте ещё раз или свяжитесь с нами напрямую.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);

    setFormData({
      name: "",
      email: "",
      phone: "",
      requestType: "",
      consumption: "",
      message: "",
      consent: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="name" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Имя *
          </Label>
          <Input
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-2"
            placeholder="Ваше имя"
          />
        </div>

        <div>
          <Label htmlFor="email" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email *
          </Label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-2"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Телефон *
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="mt-2"
            placeholder="+7 (___) ___-__-__"
          />
        </div>

        <div>
          <Label htmlFor="requestType">Тип запроса *</Label>
          <Select
            required
            value={formData.requestType}
            onValueChange={(value) => setFormData({ ...formData, requestType: value })}
          >
            <SelectTrigger className="mt-2">
              <SelectValue placeholder="Выберите тип запроса" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="invest">Приобретение ГЦП</SelectItem>
              <SelectItem value="info">Получить информацию</SelectItem>
              <SelectItem value="partnership">Партнёрство</SelectItem>
              <SelectItem value="other">Другое</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="consumption">Планируемая сумма инвестиций (₽)</Label>
          <Input
            id="consumption"
            type="number"
            value={formData.consumption}
            onChange={(e) => setFormData({ ...formData, consumption: e.target.value })}
            className="mt-2"
            placeholder="Например: 100000"
          />
        </div>

        <div>
          <Label htmlFor="message" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Комментарий
          </Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-2 min-h-[100px]"
            placeholder="Дополнительная информация..."
          />
        </div>

        <div className="flex items-start gap-3 p-4 rounded-lg border-2 border-energy/30 bg-energy/5">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, consent: checked as boolean })
            }
            className="mt-0.5"
          />
          <Label htmlFor="consent" className="text-sm text-foreground cursor-pointer leading-relaxed">
            Я согласен на обработку персональных данных в соответствии с политикой конфиденциальности *
          </Label>
        </div>
      </div>

      <Button
        type="submit"
        variant="energy"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </Button>
    </form>
  );
};
