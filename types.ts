
export interface Message {
  role: 'user' | 'bot';
  content: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
