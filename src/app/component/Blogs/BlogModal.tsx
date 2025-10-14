
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  markdownContent: string;
}

export default function MarkdownModal({ isOpen, onClose, markdownContent }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md"
      onClick={onClose} 
    >
      <div
        className="bg-white rounded-xl p-6 w-3/5 max-w-4xl relative shadow-2xl border-2 border-gray-200
                   transform transition-all duration-300 ease-in-out
                   animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-4"
        onClick={e => e.stopPropagation()}
      >

        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl font-bold hover:cursor-pointer
                     transition-colors duration-200 hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center"
          onClick={onClose}
        >
          ✕
        </button>


        <div className="pr-8 prose max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]} >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
