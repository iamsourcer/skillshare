
import React, { createContext, useContext, useState, useEffect } from 'react';

interface PointsContextType {
  userPoints: number;
  addPoints: (points: number, reason: string, isBonus?: boolean) => void;
  spendPoints: (points: number, reason: string) => boolean;
  pointsHistory: PointTransaction[];
  referralCode: string;
  generateReferralCode: () => string;
  applyReferralCode: (code: string) => boolean;
  totalReferrals: number;
}

interface PointTransaction {
  id: string;
  amount: number;
  type: 'earned' | 'spent' | 'bonus' | 'referral';
  reason: string;
  date: string;
  isBonus?: boolean;
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
  const [userPoints, setUserPoints] = useState(125);
  const [referralCode, setReferralCode] = useState('SKILL' + Math.random().toString(36).substr(2, 6).toUpperCase());
  const [totalReferrals, setTotalReferrals] = useState(0);
  const [pointsHistory, setPointsHistory] = useState<PointTransaction[]>([
    {
      id: '1',
      amount: 125,
      type: 'earned',
      reason: 'Bienvenida - Puntos iniciales',
      date: new Date().toISOString().split('T')[0]
    }
  ]);

  const addPoints = (points: number, reason: string, isBonus = false) => {
    // Bonus multiplier for highly rated sessions
    let finalPoints = points;
    if (isBonus) {
      finalPoints = Math.floor(points * 1.5);
    }

    setUserPoints(prev => prev + finalPoints);
    const newTransaction: PointTransaction = {
      id: Date.now().toString(),
      amount: finalPoints,
      type: isBonus ? 'bonus' : 'earned',
      reason: isBonus ? `${reason} (Bonus +50%)` : reason,
      date: new Date().toISOString().split('T')[0],
      isBonus
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

  const generateReferralCode = (): string => {
    const newCode = 'SKILL' + Math.random().toString(36).substr(2, 6).toUpperCase();
    setReferralCode(newCode);
    return newCode;
  };

  const applyReferralCode = (code: string): boolean => {
    if (code && code !== referralCode) {
      // Give bonus points for using referral
      setUserPoints(prev => prev + 50);
      setTotalReferrals(prev => prev + 1);
      
      const newTransaction: PointTransaction = {
        id: Date.now().toString(),
        amount: 50,
        type: 'referral',
        reason: `Código de referido aplicado: ${code}`,
        date: new Date().toISOString().split('T')[0]
      };
      setPointsHistory(prev => [newTransaction, ...prev]);
      return true;
    }
    return false;
  };

  return (
    <PointsContext.Provider value={{ 
      userPoints, 
      addPoints, 
      spendPoints, 
      pointsHistory, 
      referralCode,
      generateReferralCode,
      applyReferralCode,
      totalReferrals
    }}>
      {children}
    </PointsContext.Provider>
  );
};
