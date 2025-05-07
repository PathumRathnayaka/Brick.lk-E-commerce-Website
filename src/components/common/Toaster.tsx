import React, { useState, useEffect, createContext, useContext } from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

interface ToasterContextType {
  showToast: (message: string, type: ToastType) => void;
}

const ToasterContext = createContext<ToasterContextType | undefined>(undefined);

export const useToaster = () => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error('useToaster must be used within a ToasterProvider');
  }
  return context;
};

export const ToasterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, type: ToastType) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { id, message, type };
    setToasts(prev => [...prev, newToast]);
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts(prev => prev.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return (
    <ToasterContext.Provider value={{ showToast }}>
      {children}
      <Toaster toasts={toasts} removeToast={(id) => setToasts(prev => prev.filter(toast => toast.id !== id))} />
    </ToasterContext.Provider>
  );
};

interface ToasterProps {
  toasts?: Toast[];
  removeToast?: (id: string) => void;
}

export const Toaster: React.FC<ToasterProps> = ({ toasts = [], removeToast }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center p-4 rounded-md shadow-lg max-w-xs animate-fade-in-up ${
            toast.type === 'success' ? 'bg-green-500' :
            toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
          } text-white`}
        >
          {toast.type === 'success' && <CheckCircle className="mr-2" size={18} />}
          {toast.type === 'error' && <AlertCircle className="mr-2" size={18} />}
          {toast.type === 'info' && <Info className="mr-2" size={18} />}
          <p className="flex-1">{toast.message}</p>
          {removeToast && (
            <button onClick={() => removeToast(toast.id)} className="ml-2 text-white hover:text-gray-200">
              <X size={18} />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};