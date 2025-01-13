import { title } from "@/src/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>You&apos;re&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
      </div>
    </section>
  );
}
