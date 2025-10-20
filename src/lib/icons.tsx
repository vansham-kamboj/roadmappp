import { Code, Server, Bot, PenTool, LayoutTemplate, Cloud, type LucideIcon, type LucideProps } from 'lucide-react';

export type IconName = 'code' | 'server' | 'devops' | 'design' | 'default';

export const FieldIcons: Record<IconName, LucideIcon> = {
  code: Code,
  server: Server,
  devops: Bot,
  design: PenTool,
  default: Cloud,
};

interface FieldIconProps extends LucideProps {
  name: IconName;
}

export const FieldIcon = ({ name, ...props }: FieldIconProps) => {
  const Icon = FieldIcons[name] || FieldIcons.default;
  return <Icon {...props} />;
};
