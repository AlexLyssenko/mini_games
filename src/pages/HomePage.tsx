import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { PreviewCard } from "@/features/common/components/PreviewCard.tsx";
import { Brain, HelpCircle, Home } from "lucide-react";

export const HomePage = () => {

  return (
    <div className="grid gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Добро пожаловать!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-slate-600">
          <p>Это набор мини‑игр как переиспользуемые React‑компоненты. Выберите игру слева или вверху.</p>
          <p className="text-sm">UI выполнен в спокойном стиле образовательного ресурса. Компоненты разделяют логику и
            отображение, что упрощает поддержку и повторное использование.</p>
        </CardContent>
      </Card>


      <div className="grid md:grid-cols-3 gap-4">
        <PreviewCard to="/hangman" title="Виселица" icon={<HelpCircle className="w-5 h-5" />}
                     desc="Угадай слово по буквам." />
        <PreviewCard to="/#" title="Мемори" icon={<Brain className="w-5 h-5" />} desc="Находи пары карт." />
        <PreviewCard to="/#" title="Викторина" icon={<Home className="w-5 h-5" />} desc="Ответь на вопросы." />
      </div>
    </div>
  );
};