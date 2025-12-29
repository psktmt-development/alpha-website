"use client";

import React, { createContext, useContext, useState } from "react";
import { JoinCircleModal } from "./join-circle-modal";

interface JoinCircleContextType {
  openModal: () => void;
  closeModal: () => void;
  isOpen: boolean;
}

const JoinCircleContext = createContext<JoinCircleContextType | undefined>(
  undefined
);

export function JoinCircleProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <JoinCircleContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <JoinCircleModal isOpen={isOpen} onClose={closeModal} />
    </JoinCircleContext.Provider>
  );
}

export function useJoinCircle() {
  const context = useContext(JoinCircleContext);
  if (context === undefined) {
    throw new Error("useJoinCircle must be used within a JoinCircleProvider");
  }
  return context;
}

