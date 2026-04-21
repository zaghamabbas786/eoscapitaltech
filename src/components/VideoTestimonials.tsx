"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

type VideoItem = {
  /** Title from the Vimeo clip (oEmbed `title`). */
  title: string;
  location: string;
  vimeoSrc: string;
  thumbnailSrc: string;
};

const videos: VideoItem[] = [
  {
    title: "Tim",
    location: "UK",
    vimeoSrc: "https://player.vimeo.com/video/1185097337?h=3431d70f64",
    thumbnailSrc:
      "https://i.vimeocdn.com/video/2148419660-7d5f1fe648cd492dd1fb4866fe1e48d5798075866203b4331ecaea10ef30eeec-d_960?region=us",
  },
  {
    title: "Dave",
    location: "UK",
    vimeoSrc: "https://player.vimeo.com/video/1185097409?h=33e5143611",
    thumbnailSrc:
      "https://i.vimeocdn.com/video/2148419763-8f604295959ab35de7c2f12d02f2384697c01479adf89cdb6bf509e0610a046c-d_960?region=us",
  },
  {
    title: "Kevin",
    location: "UK",
    vimeoSrc: "https://player.vimeo.com/video/1185097273?h=00dd2fcd9d",
    thumbnailSrc:
      "https://i.vimeocdn.com/video/2148419637-60702fd6fa9b881b449944513ae9e6f6f03d92b21676d65fb04e91f560ce82d7-d_960?region=us",
  },
  {
    title: "Tyrone",
    location: "UK",
    vimeoSrc: "https://player.vimeo.com/video/1185097439?h=75cb8281a7",
    thumbnailSrc:
      "https://i.vimeocdn.com/video/2148419807-7fd931c42d61a98c62c56add2114fba710e89069f6796e5ee164dea284c8865e-d_960?region=us",
  },
  {
    title: "Sian",
    location: "UK",
    vimeoSrc: "https://player.vimeo.com/video/1185097390?h=50d5becc3c",
    thumbnailSrc:
      "https://i.vimeocdn.com/video/2148419725-b44660c5b7b7c8b40811a2810454574660d75c76f4f8f2a6e46aadf6f2362896-d_960?region=us",
  },
  {
    title: "Matthew",
    location: "UK",
    vimeoSrc: "https://player.vimeo.com/video/1185097362?h=e05af22202",
    thumbnailSrc:
      "https://i.vimeocdn.com/video/2148419676-1e2df3dd0649ea274e38640990b89e1edf56facd6090d73bce05df0ce3bac385-d_960?region=us",
  },
  {
    title: "Oluwatoromo",
    location: "UK",
    vimeoSrc: "https://player.vimeo.com/video/1185097212?h=08402cba27",
    thumbnailSrc:
      "https://i.vimeocdn.com/video/2148419520-812c32faf296840c18141958888c48c48307d9360922d3a6756dfe7684aa3e9b-d_960?region=us",
  },
  {
    title: "Chidinma",
    location: "UK",
    vimeoSrc: "https://player.vimeo.com/video/1185097174?h=30d31b9e5b",
    thumbnailSrc:
      "https://i.vimeocdn.com/video/2148419441-44c62f43b0f39ecf85129b21e5f4ec7858577468fd9bc7e17ad30d371ce140c4-d_960?region=us",
  },
  {
    title: "Daniel",
    location: "UK",
    vimeoSrc: "https://player.vimeo.com/video/1185097254?h=1b914c3fbd",
    thumbnailSrc:
      "https://i.vimeocdn.com/video/2148419534-67949eb829f86f50332b2fbb60d087d6dc4ff3859e608ce92c73c69029d06490-d_960?region=us",
  },
  {
    title: "Karan",
    location: "UK",
    vimeoSrc: "https://player.vimeo.com/video/1185097189?h=1cbeff98cd",
    thumbnailSrc:
      "https://i.vimeocdn.com/video/2148419463-764ffb609beaf0e42be909f2722bf06d394f1eae777b31c935bd2ab57b07b1ed-d_960?region=us",
  },
];

function vimeoWithAutoplay(src: string) {
  const sep = src.includes("?") ? "&" : "?";
  return `${src}${sep}autoplay=1`;
}

const SLIDE_GAP_PX = 16;

export default function VideoTestimonials() {
  const [modal, setModal] = useState<{ src: string; title: string } | null>(
    null,
  );
  const stripRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ canPrev: false, canNext: true });

  const closeModal = useCallback(() => setModal(null), []);

  const updateScrollState = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const epsilon = 4;
    setScrollState({
      canPrev: scrollLeft > epsilon,
      canNext: scrollLeft < scrollWidth - clientWidth - epsilon,
    });
  }, []);

  const scrollStrip = useCallback((dir: -1 | 1) => {
    const el = stripRef.current;
    if (!el) return;
    const slide = el.querySelector("[data-testimonial-slide]");
    const w = slide?.getBoundingClientRect().width ?? 280;
    el.scrollBy({
      left: dir * (w + SLIDE_GAP_PX),
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const ro = new ResizeObserver(updateScrollState);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      ro.disconnect();
    };
  }, [updateScrollState]);

  useEffect(() => {
    if (!modal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [modal, closeModal]);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <span className="mb-4 block text-xs font-semibold tracking-[0.25em] text-accent uppercase">
            See What Our Clients Have To Say
          </span>
          <h2 className="mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Video Testimonials
          </h2>
          <p className="max-w-lg text-sm text-muted sm:text-base">
            Hear directly from our clients about their experience with Eos Capital Tech.
          </p>
        </motion.div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => scrollStrip(-1)}
            disabled={!scrollState.canPrev}
            className="hidden shrink-0 rounded-full border border-card-border bg-card-bg/95 p-2.5 text-foreground shadow-lg backdrop-blur-sm transition-opacity hover:border-accent/40 disabled:pointer-events-none disabled:opacity-30 md:inline-flex"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={22} />
          </button>

          <div
            ref={stripRef}
            className="min-w-0 flex-1 -mx-4 flex gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory px-4 sm:-mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {videos.map((v, i) => (
              <motion.div
                key={v.vimeoSrc}
                data-testimonial-slide
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="w-[min(100%,280px)] shrink-0 snap-start sm:w-72"
              >
                <button
                  type="button"
                  onClick={() =>
                    setModal({ src: v.vimeoSrc, title: v.title })
                  }
                  className="group relative mb-2 flex aspect-video w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-card-border bg-black text-left transition-all hover:border-accent/30"
                  aria-label={`Play video testimonial — ${v.title}`}
                >
                  <Image
                    src={v.thumbnailSrc}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/20"
                    aria-hidden
                  />
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-sm transition-transform group-hover:scale-110">
                    <Play size={20} className="ml-0.5 fill-white text-white" />
                  </div>
                </button>
                <p className="truncate text-sm leading-snug">
                  <span className="font-semibold text-foreground">{v.title}</span>
                  <span className="text-muted"> · {v.location}</span>
                </p>
              </motion.div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollStrip(1)}
            disabled={!scrollState.canNext}
            className="hidden shrink-0 rounded-full border border-card-border bg-card-bg/95 p-2.5 text-foreground shadow-lg backdrop-blur-sm transition-opacity hover:border-accent/40 disabled:pointer-events-none disabled:opacity-30 md:inline-flex"
            aria-label="Next testimonials"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {modal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={closeModal}
            aria-label="Close video"
          />
          <div className="relative z-10 w-full max-w-4xl">
            <button
              type="button"
              onClick={closeModal}
              className="absolute -right-1 -top-12 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:-right-2 sm:-top-14"
              aria-label="Close"
            >
              <X size={22} />
            </button>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl">
              <div className="relative aspect-video w-full">
                <iframe
                  key={modal.src}
                  src={vimeoWithAutoplay(modal.src)}
                  title={modal.title}
                  className="absolute inset-0 h-full w-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
