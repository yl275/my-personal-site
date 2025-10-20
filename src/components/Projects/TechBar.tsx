interface TechBarProps {
  tech: string;
}

export default function TechBar({ tech }: TechBarProps) {
  return (
    <div className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-300">
      {tech}
    </div>
  );
}
