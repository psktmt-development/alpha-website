"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, User, Mail, Phone, MapPin, Building2, Briefcase, Linkedin, TrendingUp, MessageSquare, Send, ChevronDown, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface JoinCircleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinCircleModal({ isOpen, onClose }: JoinCircleModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    location: "",
    companyName: "",
    role: "",
    linkedInProfile: "",
    companyTurnover: "",
    motivation: "",
    expectations: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: "",
        email: "",
        mobileNumber: "",
        location: "",
        companyName: "",
        role: "",
        linkedInProfile: "",
        companyTurnover: "",
        motivation: "",
        expectations: "",
      });
      setSubmitStatus("idle");
      setErrorMessage("");
    }
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/join-circle", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit form");
      }

      // Success
      setSubmitStatus("success");

      // Reset form after showing success message
      setTimeout(() => {
        setFormData({
          fullName: "",
          email: "",
          mobileNumber: "",
          location: "",
          companyName: "",
          role: "",
          linkedInProfile: "",
          companyTurnover: "",
          motivation: "",
          expectations: "",
        });
        setIsSubmitting(false);
        setSubmitStatus("idle");
        onClose();
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again later."
      );
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10001] flex items-center justify-center p-4 pointer-events-none"
          >
            <div
              className="bg-white rounded-[2rem] border border-neutral-200/60 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-white border-b border-neutral-200/60 px-8 md:px-16 lg:px-20 py-6 flex items-center justify-between z-10">
                <div className="flex-1">
                  <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight text-neutral-900 mb-3 leading-[1.1]">
                    Join <span className="italic text-[#BB2324]">Alpha Circle</span>
                  </h2>
                  <p className="text-lg md:text-xl text-neutral-500 max-w-2xl leading-relaxed">
                    Experience the power of Alpha Circle. Our specialists will reach out to provide a
                    tailored walkthrough of our ecosystem.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="ml-4 p-2 hover:bg-neutral-100 rounded-full transition-colors flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5 text-neutral-500" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 md:p-16 lg:p-20 space-y-6">
                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 flex items-start gap-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-green-900 font-semibold mb-1">Thank you for your interest!</h3>
                      <p className="text-green-700 text-sm">We've received your submission and will get back to you soon.</p>
                    </div>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 flex items-start gap-4"
                  >
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-red-900 font-semibold mb-1">Submission Failed</h3>
                      <p className="text-red-700 text-sm">{errorMessage || "Something went wrong. Please try again later."}</p>
                    </div>
                  </motion.div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="Full Name"
                    name="fullName"
                    icon={<User size={18} />}
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <FloatingInput
                    label="Email ID"
                    name="email"
                    type="email"
                    icon={<Mail size={18} />}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="Mobile Number"
                    name="mobileNumber"
                    icon={<Phone size={18} />}
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                  <FloatingInput
                    label="Location"
                    name="location"
                    icon={<MapPin size={18} />}
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="Your Company Name"
                    name="companyName"
                    icon={<Building2 size={18} />}
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                  <FloatingInput
                    label="Your Role"
                    name="role"
                    icon={<Briefcase size={18} />}
                    value={formData.role}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FloatingInput
                    label="LinkedIn Profile"
                    name="linkedInProfile"
                    type="url"
                    icon={<Linkedin size={18} />}
                    value={formData.linkedInProfile}
                    onChange={handleChange}
                  />
                  <FloatingSelect
                    label="Company Turnover"
                    name="companyTurnover"
                    icon={<TrendingUp size={18} />}
                    value={formData.companyTurnover}
                    onChange={handleChange}
                    required
                  />
                </div>

                <FloatingTextarea
                  label="What motivates you to join The Alpha Circle?"
                  name="motivation"
                  icon={<MessageSquare size={18} />}
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                />

                <FloatingTextarea
                  label="What expectations do you have from being part of The Alpha Circle?"
                  name="expectations"
                  icon={<MessageSquare size={18} />}
                  value={formData.expectations}
                  onChange={handleChange}
                  required
                />

                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full md:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 bg-[#BB2324] text-white font-bold rounded-2xl overflow-hidden shadow-lg shadow-[#BB2324]/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="relative">Processing...</span>
                      </div>
                    ) : (
                      <>
                        <span className="relative">Submit Form</span>
                        <Send className="w-5 h-5 relative transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ---------- Floating Input Components (matching contact form) ---------- */

function FloatingInput({ label, icon, ...props }: any) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value && props.value.length > 0;

  return (
    <div className="relative group">
      <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-[#BB2324]' : 'text-neutral-400 group-hover:text-neutral-500'}`}>
        {icon}
      </div>
      <label
        className={`absolute left-12 transition-all duration-300 pointer-events-none
          ${(isFocused || hasValue)
            ? 'top-2 text-[10px] font-bold text-[#BB2324] uppercase tracking-wider'
            : 'top-1/2 -translate-y-1/2 text-neutral-400 text-base'}`}
      >
        {label}
      </label>
      <input
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full pl-12 pr-5 pt-6 pb-2 bg-neutral-50 border-2 rounded-2xl outline-none transition-all duration-300
          ${isFocused
            ? 'border-[#BB2324] bg-white ring-4 ring-[#BB2324]/5 shadow-sm'
            : 'border-neutral-100 group-hover:border-neutral-200'}`}
      />
    </div>
  );
}

function FloatingSelect({ label, icon, ...props }: any) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value && props.value.length > 0;

  return (
    <div className="relative group">
      <div className={`absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-[#BB2324]' : 'text-neutral-400 group-hover:text-neutral-500'}`}>
        {icon}
      </div>
      <label
        className={`absolute left-12 transition-all duration-300 pointer-events-none
          ${(isFocused || hasValue)
            ? 'top-2 text-[10px] font-bold text-[#BB2324] uppercase tracking-wider'
            : 'top-1/2 -translate-y-1/2 text-neutral-400 text-base'}`}
      >
        {label}
      </label>
      <select
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full pl-12 pr-12 pt-6 pb-2 bg-neutral-50 border-2 rounded-2xl outline-none transition-all duration-300 appearance-none cursor-pointer
          ${isFocused
            ? 'border-[#BB2324] bg-white ring-4 ring-[#BB2324]/5 shadow-sm'
            : 'border-neutral-100 group-hover:border-neutral-200'}`}
      >
        <option value="" hidden></option>
        <option value="10cr-25cr">₹ 10cr - ₹ 25 cr</option>
        <option value="25cr-50cr">₹ 25cr - ₹ 50 cr</option>
        <option value="50cr-100cr">₹ 50cr - ₹ 100 cr</option>
        <option value="100cr-200cr">₹ 100cr - ₹ 200 cr</option>
        <option value="200cr+">₹ 200cr +</option>
      </select>
      <ChevronDown className={`absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none transition-transform duration-300 ${isFocused ? 'rotate-180' : ''}`} size={18} />
    </div>
  );
}

function FloatingTextarea({ label, icon, ...props }: any) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = props.value && props.value.length > 0;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      const minHeight = 60; // Minimum height for 2 rows
      textareaRef.current.style.height = `${Math.max(scrollHeight, minHeight)}px`;
    }
  }, [props.value]);

  return (
    <div className="relative group">
      <div className={`absolute left-5 top-5 transition-colors duration-300 ${isFocused ? 'text-[#BB2324]' : 'text-neutral-400 group-hover:text-neutral-500'}`}>
        {icon}
      </div>
      <label
        className={`absolute left-12 transition-all duration-300 pointer-events-none
          ${(isFocused || hasValue)
            ? 'top-2 text-[10px] font-bold text-[#BB2324] uppercase tracking-wider'
            : 'top-5 text-neutral-400 text-base'}`}
      >
        {label}
      </label>
      <textarea
        {...props}
        ref={textareaRef}
        rows={2}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full pl-12 pr-5 pt-6 pb-3 bg-neutral-50 border-2 rounded-2xl outline-none transition-all duration-300 resize-none overflow-hidden
          ${isFocused
            ? 'border-[#BB2324] bg-white ring-4 ring-[#BB2324]/5 shadow-sm'
            : 'border-neutral-100 group-hover:border-neutral-200'}`}
        style={{ minHeight: '60px' }}
      />
    </div>
  );
}
