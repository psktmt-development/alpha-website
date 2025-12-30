"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface PopupContextType {
  popupClosed: boolean;
  setPopupClosed: (closed: boolean) => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [popupClosed, setPopupClosed] = useState(false);

  useEffect(() => {
    // Check if popup was already seen/closed in this session
    const hasSeenPopup = sessionStorage.getItem("entry_popup_seen");
    if (hasSeenPopup) {
      setPopupClosed(true);
    }
  }, []);

  return (
    <PopupContext.Provider value={{ popupClosed, setPopupClosed }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
}




