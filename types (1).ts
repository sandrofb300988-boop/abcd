import React from 'react';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ComparisonRow {
  method: string;
  problem: string;
  solution: string;
}