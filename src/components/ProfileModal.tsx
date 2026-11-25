"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
import { profile } from "@/data/profile";
import { SocialLinks } from "./SocialLinks";

export function ProfileModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--overlay)] p-4 backdrop-blur-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-modal-name"
            className="relative w-full max-w-sm rounded-3xl border border-brand/25 bg-surface p-8 text-center shadow-[0_0_60px_rgb(220_38_38/0.2)] sm:p-10"
            initial={{ scale: 0.7, y: 40, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.85, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              autoFocus
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-fg/5 text-fg-2 transition-all duration-300 hover:rotate-90 hover:border-brand hover:bg-brand/15 hover:text-brand"
            >
              <X size={18} />
            </button>

            <div className="relative mx-auto mb-6 h-[120px] w-[120px]">
              <motion.div
                aria-hidden="true"
                className="bg-gradient-brand absolute -inset-2 rounded-full blur-[15px]"
                animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="bg-gradient-brand relative h-full w-full rounded-full p-1">
                <Image
                  src={profile.photo}
                  alt={profile.name}
                  width={240}
                  height={240}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>

            <h3 id="profile-modal-name" className="text-gradient mb-1 text-2xl font-extrabold tracking-tight">
              {profile.name}
            </h3>
            <p className="mb-3 text-sm font-medium text-fg-2">Age {profile.age}</p>
            <span className="mb-5 inline-block rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-semibold text-brand">
              {profile.modalRole}
            </span>
            <p className="mb-7 text-sm leading-relaxed text-fg-2">{profile.modalBio}</p>
            <SocialLinks only={["github", "facebook", "instagram", "upwork"]} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
