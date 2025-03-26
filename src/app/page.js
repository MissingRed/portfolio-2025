import BackgroundPaths from "@/components/background-paths";
import Skills from "@/components/skills";
import ChatIa from "@/components/chat-ia";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import "../app/styles.css";


export default function Home() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];

  return (
    <div className="h-screen">
      <div className="fixed p-6 md:p-16 flex justify-between items-center z-50 w-full">
        <div>
          <h1 className="font-bold tracking-[.25em] text-xl">DANIEL</h1>
        </div>
        <div className="flex items-center md:space-x-8">
          <div>
            <button className="px-4 py-2 rounded-full border border-neutral-600 text-black bg-transparent hover:bg-gray-100 transition duration-200 font-bold cursor-pointer">
              Contactame
            </button>
          </div>
          <div className="font-bold underline items-center hidden md:flex">
            <a href="tel:+573053907367" className="flex items-center">
              +57 3053907367
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1920px-Flag_of_Colombia.svg.png"
                alt="Bandera de Colombia"
                className="ml-2 w-6 h-4"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="h-screen flex items-center justify-center">
        <BackgroundPaths />
      </div>
      <div>
        <Skills />
      </div>
      <ChatIa />
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold">Mi red</h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <div className="flex flex-col justify-center items-center pb-40 pt-40">
        <h1 className="font-bold text-[#000000] text-3xl">Danielrf.com</h1>
        <div className="mt-2 space-x-2">
          <button className="px-2 py-2 border border-neutral-600 rounded-xl cursor-pointer font-bold transform hover:-translate-y-1 transition duration-400">
            <img src="/brand-instagram.svg" />
          </button>
          <button className="px-2 py-2 border border-neutral-600 rounded-xl cursor-pointer font-bold transform hover:-translate-y-1 transition duration-400">
            <img src="/brand-linkedin.svg" />
          </button>
          <button className="px-2 py-2 border border-neutral-600 rounded-xl cursor-pointer font-bold transform hover:-translate-y-1 transition duration-400">
            <img src="/brand-github.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}
