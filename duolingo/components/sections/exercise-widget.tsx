"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { Reveal } from "@/components/motion/reveal";
import { exerciseQuestions } from "@/lib/content";

export function ExerciseWidget() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);

  const question = exerciseQuestions[questionIndex];
  const isCorrect = useMemo(
    () => selected === question.correctIndex,
    [selected, question.correctIndex],
  );

  function choose(index: number) {
    if (revealed) return;
    setSelected(index);
    // A deliberate, comedic-timing delay before the deadpan verdict lands —
    // the pause is the joke, not the answer.
    window.setTimeout(() => setRevealed(true), 650);
  }

  function nextQuestion() {
    setQuestionIndex((i) => (i + 1) % exerciseQuestions.length);
    setSelected(null);
    setRevealed(false);
  }

  return (
    <section
      id="exercise"
      aria-labelledby="exercise-heading"
      className="bg-marble-100 px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-xl">
        <Reveal className="mb-10 flex flex-col items-center gap-2 text-center">
          <span className="font-label text-xs uppercase tracking-[0.2em] text-verdigris-600">
            A Live Exercise
          </span>
          <h2 id="exercise-heading" className="font-display text-3xl tracking-wide sm:text-4xl">
            Prove Your Reasoning
          </h2>
        </Reveal>

        <Reveal>
          <div className="marginalia-notch border border-border bg-card p-6 shadow-relief-md sm:p-8">
            <p className="font-label text-xs uppercase text-muted-foreground">
              Translate from {question.sourceLanguage}
            </p>
            <p className="mt-2 font-display text-2xl tracking-wide">
              {question.prompt}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {question.choices.map((choice, index) => {
                const isSelected = selected === index;
                const isAnswerKey = revealed && index === question.correctIndex;
                const isWrongPick = revealed && isSelected && !isCorrect;
                return (
                  <button
                    key={choice}
                    type="button"
                    onClick={() => choose(index)}
                    disabled={revealed}
                    className={`rounded-[var(--radius-tablet)] border px-4 py-3 text-left font-body text-sm transition-colors ${
                      isAnswerKey
                        ? "border-laurel-600 bg-laurel-600/10"
                        : isWrongPick
                          ? "border-oxblood-600 bg-oxblood-600/10"
                          : "border-border hover:bg-muted"
                    } ${revealed ? "cursor-default" : "cursor-pointer"}`}
                  >
                    {choice}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              {revealed && (
                <motion.div
                  key={isCorrect ? "correct" : "incorrect"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4"
                >
                  <p
                    className={`font-display text-sm tracking-wide uppercase ${
                      isCorrect ? "text-laurel-600" : "text-oxblood-600"
                    }`}
                  >
                    {isCorrect ? question.correctFeedback : question.incorrectFeedback}
                  </p>
                  <button
                    type="button"
                    onClick={nextQuestion}
                    className="shrink-0 rounded-[var(--radius-tablet)] border border-border bg-primary px-4 py-2 font-label text-xs uppercase tracking-[0.15em] text-primary-foreground hover:bg-primary-hover"
                  >
                    Next
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
