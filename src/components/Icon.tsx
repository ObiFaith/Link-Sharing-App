import * as icons from 'lucide-react';

interface IconProps {
  name: string;
  color?: string;
  size?: number;
  className?: string;
}

const Icon = ({ name, color, size = 16, className }: IconProps) => {
  const LucideIcon = (icons as any)[name];

  if (!LucideIcon) {
    console.error(`Icon "${name}" does not exist in "lucide-react"`);
    return;
  }

  return <LucideIcon color={color} strokeWidth={2} absoluteStrokeWidth={true} size={size} className={className} />;
};

export default Icon;
