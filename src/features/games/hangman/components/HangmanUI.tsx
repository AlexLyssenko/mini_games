import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { RefreshCcw } from "lucide-react";

export const HangmanUI = ({ masked, errors, maxErrors, onGuess, onReset }: {
  masked: string[];
  errors: number;
  maxErrors: number;
  onGuess: (letter: string) => void;
  onReset: () => void;
}) => {


  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Виселица</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center text-3xl tracking-widest font-mono">{masked.join(" ")}</div>
        <div className="text-center">Ошибки: {errors} / {maxErrors}</div>
        <div className="grid grid-cols-8 gap-2">
          {latin.map((ch) => (
            <Button key={ch} variant="secondary" className="rounded-xl" onClick={() => onGuess(ch)}>
              {ch}
            </Button>
          ))}
        </div>
        <div className="flex justify-end">
          <Button onClick={onReset} className="gap-2"><RefreshCcw className="w-4 h-4" />Сброс</Button>
        </div>
      </CardContent>
    </Card>
  );

};
