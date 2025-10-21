import { Code, Server, Bot, PenTool, LayoutTemplate, Cloud, BrainCircuit, Database, Gamepad2, Smartphone, type LucideIcon, type LucideProps } from 'lucide-react';

export type IconName = 'code' | 'server' | 'devops' | 'design' | 'default' | 'ml' | 'data' | 'game' | 'mobile';

export const FieldIcons: Record<IconName, LucideIcon> = {
  code: Code,
  server: Server,
  devops: Bot,
  design: PenTool,
  default: Cloud,
  ml: BrainCircuit,
  data: Database,
  game: Gamepad2,
  mobile: Smartphone,
};

interface FieldIconProps extends LucideProps {
  name: IconName;
}

export const FieldIcon = ({ name, ...props }: FieldIconProps) => {
  const Icon = FieldIcons[name] || FieldIcons.default;
  return <Icon {...props} />;
};
