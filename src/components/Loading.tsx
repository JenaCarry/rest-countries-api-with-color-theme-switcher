export function Loading({ text }: { text: string }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 mt-20">
      <div
        aria-label="loading countries"
        className="animate-spin w-24 h-24 border-[0.875rem] border-elements-hover border-t-blue-500 rounded-full"
      ></div>
      <h2 className="text-lg font-semibold">{text}</h2>
    </section>
  );
}
