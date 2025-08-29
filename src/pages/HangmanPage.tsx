import { HangmanUI } from "@/features/games/hangman/components/HangmanUI.tsx";
import { useHangman } from "@/features/games/hangman/hooks/useHangman.ts";


export const HangmanPage = () => {

  const { state, masked, status, guess, reset } = useHangman();
  return (
    <div className="space-y-4">
      {status !== "playing" && (
        <div className={`p-3 rounded-xl border ${status === "won" ? "bg-green-50 border-green-200" : "bg-rose-50 border-rose-200"}`}>
          {status === "won" ? "Победа!" : "Поражение."} Слово: <b>{state.word}</b>
        </div>
      )}
      <HangmanUI masked={masked} errors={state.errors} maxErrors={state.maxErrors} onGuess={guess} onReset={reset} />
    </div>
  );

}