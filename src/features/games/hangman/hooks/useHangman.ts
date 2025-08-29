import { useCallback, useMemo, useState } from "react";


type HangmanState = {
  word: string;
  guessed: Set<string>;
  errors: number;
  maxErrors: number;
};


const WORDS = [
  "REACT", "COMPONENT", "ADAPTIVE", "EDUCATION", "JAVASCRIPT", "TYPESCRIPT",
];

export function useHangman(initialMaxErrors = 6) {
  const [state, setState] = useState<HangmanState>(() => ({
    word: WORDS[Math.floor(Math.random() * WORDS.length)],
    guessed: new Set(),
    errors: 0,
    maxErrors: initialMaxErrors,
  }));


  const masked = useMemo(() =>
      state.word.split("").map((ch) => (state.guessed.has(ch) ? ch : "_")),
    [state.word, state.guessed]
  );


  const status = useMemo(() => {
    if (state.errors >= state.maxErrors) return "lost" as const;
    if (masked.join("") === state.word) return "won" as const;
    return "playing" as const;
  }, [state.errors, state.maxErrors, masked, state.word]);


  const guess = useCallback((letter: string) => {
    letter = letter.toUpperCase();
    if (state.guessed.has(letter) || status !== "playing") return;
    setState((prev) => {
      const correct = prev.word.includes(letter);
      const guessed = new Set(prev.guessed);
      guessed.add(letter);
      return {
        ...prev,
        guessed,
        errors: correct ? prev.errors : prev.errors + 1,
      };
    });
  }, [state.guessed, status]);


  const reset = useCallback(() => {
    setState({
      word: WORDS[Math.floor(Math.random() * WORDS.length)],
      guessed: new Set(),
      errors: 0,
      maxErrors: initialMaxErrors,
    });
  }, [initialMaxErrors]);


  return { state, masked, status, guess, reset };
}