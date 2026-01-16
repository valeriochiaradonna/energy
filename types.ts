// Fix: Added missing React import to resolve namespace errors for ReactNode types
import React from 'react';

export interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  bullets?: string[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface ValueCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}
