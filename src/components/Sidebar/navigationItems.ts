import { Radio, Mail, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavigationItem {
  icon: LucideIcon;
  label: string;
  id: string;
}

export const navigationItems: NavigationItem[] = [
  {
    icon: Radio,
    label: 'radio show',
    id: 'radio',
  },
  {
    icon: Users,
    label: 'we are',
    id: 'about',
  },
  {
    icon: Mail,
    label: 'get in touch',
    id: 'contact',
  },
];