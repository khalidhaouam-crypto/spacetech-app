
import React from 'react';

interface InfoModalProps {
  title: string;
  content: string;
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 z-[20000] bg-black/70 flex justify-center items-center p-4 animate-fadeIn" onClick={onClose}>
      <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-6 max-w-lg w-full shadow-2xl scale-100 border border-gray-200 dark:border-gray-600" onClick={e => e.stopPropagation()}>
         <h3 className="text-xl font-bold text-primary mb-4 border-b border-gray-100 dark:border-gray-700 pb-2">{title}</h3>
         <div className="text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-wrap max-h-[60vh] overflow-y-auto custom-scrollbar p-1">
            {content}
         </div>
         <div className="mt-6 flex justify-end">
            <button onClick={onClose} className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-accent transition shadow-md">إغلاق</button>
         </div>
      </div>
    </div>
  );
};

export default InfoModal;
