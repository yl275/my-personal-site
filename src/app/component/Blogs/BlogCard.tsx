interface BlogCardProps {
  title: string;
  onClick?: () => void;
}

export default function BlogCard({ title, onClick }: BlogCardProps) {
  return (
    <button
      onClick={onClick}
      className="
       hover:scale-102 transition-all duration-300
       min-w-fit max-w-xs px-10 text-3xl
       border-3 border-b-4 border-r-4 shadow-2xl 
       p-4 rounded-2xl hover:cursor-pointer
    "
    >
      {title}
    </button>
  );
}
