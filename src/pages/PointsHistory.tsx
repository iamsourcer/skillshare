
import { ArrowLeft, Coins, TrendingUp, Gift, Users, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { usePoints } from "@/contexts/PointsContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";

const PointsHistory = () => {
  const navigate = useNavigate();
  const { 
    userPoints, 
    pointsHistory, 
    referralCode, 
    generateReferralCode, 
    applyReferralCode, 
    totalReferrals 
  } = usePoints();
  const [referralInput, setReferralInput] = useState("");

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'earned': return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'spent': return <Coins className="h-4 w-4 text-red-600" />;
      case 'bonus': return <Award className="h-4 w-4 text-orange-600" />;
      case 'referral': return <Gift className="h-4 w-4 text-purple-600" />;
      default: return <Coins className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'earned': return 'text-green-600';
      case 'spent': return 'text-red-600';
      case 'bonus': return 'text-orange-600';
      case 'referral': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const handleApplyReferral = () => {
    if (referralInput.trim()) {
      const success = applyReferralCode(referralInput.trim());
      if (success) {
        alert('¡Código de referido aplicado exitosamente! +50 puntos');
        setReferralInput("");
      } else {
        alert('Código de referido inválido o ya utilizado');
      }
    }
  };

  const copyReferralCode = () => {
    navigator.clipboard.writeText(referralCode);
    alert('Código copiado al portapapeles');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Historial de Puntos</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Coins className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-600">Puntos Actuales</p>
                  <p className="text-2xl font-bold text-gray-900">{userPoints}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-600">Total Ganados</p>
                  <p className="text-2xl font-bold text-green-600">
                    {pointsHistory.filter(t => ['earned', 'bonus', 'referral'].includes(t.type))
                      .reduce((sum, t) => sum + t.amount, 0)}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-500" />
                <div>
                  <p className="text-sm text-gray-600">Referidos</p>
                  <p className="text-2xl font-bold text-purple-600">{totalReferrals}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-orange-500" />
                <div>
                  <p className="text-sm text-gray-600">Bonificaciones</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {pointsHistory.filter(t => t.type === 'bonus').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Referral System */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5" />
                Invita Amigos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Comparte tu código y gana 50 puntos por cada amigo que se registre
              </p>
              <div className="flex gap-2">
                <Input value={referralCode} readOnly className="font-mono" />
                <Button onClick={copyReferralCode}>Copiar</Button>
                <Button variant="outline" onClick={generateReferralCode}>
                  Nuevo
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                ¿Tienes un código?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Usa el código de un amigo y obtén 50 puntos gratis
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Código de referido"
                  value={referralInput}
                  onChange={(e) => setReferralInput(e.target.value)}
                />
                <Button onClick={handleApplyReferral}>
                  Aplicar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Transaction History */}
        <Card>
          <CardHeader>
            <CardTitle>Historial de Transacciones</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Descripción</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead className="text-right">Puntos</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pointsHistory.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {getTransactionIcon(transaction.type)}
                        <Badge variant="outline" className={getTransactionColor(transaction.type)}>
                          {transaction.type === 'earned' && 'Ganado'}
                          {transaction.type === 'spent' && 'Gastado'}
                          {transaction.type === 'bonus' && 'Bonus'}
                          {transaction.type === 'referral' && 'Referido'}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>{transaction.reason}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell className={`text-right font-medium ${getTransactionColor(transaction.type)}`}>
                      {transaction.type === 'spent' ? '-' : '+'}{transaction.amount}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PointsHistory;
