
import React from 'react';

const HolidaysModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-[20000] p-2 animate-fadeIn" onClick={onClose}>
      <div className="bg-white dark:bg-[#2d2d2d] rounded-2xl p-2 md:p-4 w-full h-full max-w-[98vw] max-h-[95vh] flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
         {/* Header */}
         <div className="flex justify-between items-center mb-2 px-2 shrink-0">
             <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                <i className="fas fa-calendar-alt"></i>
                لائحة العطل المدرسية
             </h3>
             <button onClick={onClose} className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 flex items-center justify-center hover:bg-red-500 hover:text-white transition shadow-sm">
                 <i className="fas fa-times text-lg"></i>
             </button>
         </div>
         
         {/* Image Container */}
         <div className="flex-1 relative overflow-hidden rounded-xl bg-gray-50 dark:bg-[#1a1a1a] border-2 border-primary/20">
             <img 
               src="https://drive.google.com/thumbnail?id=19hcQTdQe0uCR0JdZmpGnpmbfyH3MiFL9&sz=w1000" 
               alt="Holidays"
               className="absolute inset-0 w-full h-full object-contain p-1"
             />
         </div>
      </div>
    </div>
  );
};

export default HolidaysModal;
