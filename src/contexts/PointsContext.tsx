
import React, { createContext, useContext, useState, useEffect } from 'react';

interface PointsContextType {
  userPoints: number;
  addPoints: (points: number, reason: string) => void;
  spendPoints: (points: number, reason: string) => boolean;
  pointsHistory: PointTransaction[];
}

interface PointTransaction {
  id: string;
  amount: number;
  type: 'earned' | 'spent';
  reason: string;
  date: string;
}

const PointsContext = createContext<PointsContextType | undefined>(undefined);

export const usePoints = () => {
  const context = useContext(PointsContext);
  if (!context) {
    throw new Error('usePoints must be used within a PointsProvider');
  }
  return context;
};

export const PointsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userPoints, setUserPoints] = useState(125); // New user starting points
  const [pointsHistory, setPointsHistory] = useState<PointTransaction[]>([
    {
      id: '1',
      amount: 125,
      type: 'earned',
      reason: 'Bienvenida - Puntos iniciales',
      date: new Date().toISOString().split('T')[0]
    }
  ]);

  const addPoints = (points: number, reason: string) => {
    setUserPoints(prev => prev + points);
    const newTransaction: PointTransaction = {
      id: Date.now().toString(),
      amount: points,
      type: 'earned',
      reason,
      date: new Date().toISOString().split('T')[0]
    };
    setPointsHistory(prev => [newTransaction, ...prev]);
  };

  const spendPoints = (points: number, reason: string): boolean => {
    if (userPoints >= points) {
      setUserPoints(prev => prev - points);
      const newTransaction: PointTransaction = {
        id: Date.now().toString(),
        amount: points,
        type: 'spent',
        reason,
        date: new Date().toISOString().split('T')[0]
      };
      setPointsHistory(prev => [newTransaction, ...prev]);
      return true;
    }
    return false;
  };

  return (
    <PointsContext.Provider value={{ userPoints, addPoints, spendPoints, pointsHistory }}>
      {children}
    </PointsContext.Provider>
  );
};
