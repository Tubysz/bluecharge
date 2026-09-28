// Potência de carregamento AC (monofásico 220V) de cada carro — a "ficha técnica" que
// decide se o 3.5kW já basta ou se o 7.4kW vale a pena. Levantado em set/2026 a partir de
// fichas técnicas oficiais e fontes do mercado brasileiro; pode variar por versão/ano.
export const CARROS = [
  { marca: 'BYD', modelo: 'Dolphin Mini', tipo: 'BEV', potenciaAC: 6.6 },
  { marca: 'BYD', modelo: 'Dolphin', tipo: 'BEV', potenciaAC: 6.6 },
  { marca: 'BYD', modelo: 'Dolphin Plus', tipo: 'BEV', potenciaAC: 7 },
  { marca: 'BYD', modelo: 'Seal', tipo: 'BEV', potenciaAC: 7 },
  { marca: 'BYD', modelo: 'Yuan Plus / Atto 3', tipo: 'BEV', potenciaAC: 7 },
  { marca: 'BYD', modelo: 'Yuan Pro', tipo: 'BEV', potenciaAC: 6.6 },
  { marca: 'BYD', modelo: 'Han', tipo: 'BEV', potenciaAC: 6.6 },
  { marca: 'BYD', modelo: 'Tan', tipo: 'BEV', potenciaAC: 7 },
  { marca: 'BYD', modelo: 'Song Plus Premium DM-i', tipo: 'PHEV', potenciaAC: 6.6 },
  { marca: 'BYD', modelo: 'Song Pro DM-i', tipo: 'PHEV', potenciaAC: 6.6 },
  { marca: 'BYD', modelo: 'King DM-i GL', tipo: 'PHEV', potenciaAC: 3.3 },
  { marca: 'BYD', modelo: 'King DM-i GS', tipo: 'PHEV', potenciaAC: 6.6 },

  { marca: 'GWM', modelo: 'Ora 03', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'GWM', modelo: 'Haval H6 GT PHEV / H6 PHEV', tipo: 'PHEV', potenciaAC: 6.6 },
  { marca: 'GWM', modelo: 'Tank 300 PHEV', tipo: 'PHEV', potenciaAC: 6.6 },

  { marca: 'Geely', modelo: 'EX2', tipo: 'BEV', potenciaAC: 6.6 },
  { marca: 'Geely', modelo: 'EX5', tipo: 'BEV', potenciaAC: 7 },
  { marca: 'Geely', modelo: 'EX5 EM-i', tipo: 'PHEV', potenciaAC: 6.6 },

  { marca: 'Chevrolet', modelo: 'Spark EUV', tipo: 'BEV', potenciaAC: 6.6 },
  { marca: 'Chevrolet', modelo: 'Captiva EV', tipo: 'BEV', potenciaAC: 6.6 },

  { marca: 'GAC', modelo: 'Aion V', tipo: 'BEV', potenciaAC: 6.6 },

  { marca: 'Volvo', modelo: 'EX30', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'Volvo', modelo: 'XC40 Recharge', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'Volvo', modelo: 'C40 Recharge', tipo: 'BEV', potenciaAC: 7.4 },

  { marca: 'BMW', modelo: 'i4', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'BMW', modelo: 'iX', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'BMW', modelo: 'iX1', tipo: 'BEV', potenciaAC: 7.4 },
  {
    marca: 'BMW',
    modelo: 'iX3',
    tipo: 'BEV',
    potenciaAC: 7.4,
    obs: 'Não achamos a potência de carregamento monofásico confirmada pra esse modelo. Por segurança, recomendamos o 7.4kW — ele atende esse carro em qualquer cenário.',
  },
  { marca: 'BMW', modelo: 'X1 PHEV (xDrive25e/30e)', tipo: 'PHEV', potenciaAC: 7.4 },
  { marca: 'BMW', modelo: 'X2 PHEV', tipo: 'PHEV', potenciaAC: 7.4 },
  { marca: 'BMW', modelo: '530e', tipo: 'PHEV', potenciaAC: 7.4 },

  {
    marca: 'Mercedes-Benz',
    modelo: 'EQA',
    tipo: 'BEV',
    potenciaAC: 3.5,
    obs: 'Carregador de bordo trifásico (16A x 3 fases). Numa tomada monofásica ele não passa de ~3,5kW, mesmo com um carregador mais potente.',
  },
  {
    marca: 'Mercedes-Benz',
    modelo: 'EQB',
    tipo: 'BEV',
    potenciaAC: 3.5,
    obs: 'Carregador de bordo trifásico (16A x 3 fases). Numa tomada monofásica ele não passa de ~3,5kW, mesmo com um carregador mais potente.',
  },
  {
    marca: 'Mercedes-Benz',
    modelo: 'EQE',
    tipo: 'BEV',
    potenciaAC: 3.7,
    obs: 'Carregador de bordo trifásico (16A x 3 fases). Numa tomada monofásica ele não passa de ~3,7kW, mesmo com um carregador mais potente.',
  },
  {
    marca: 'Mercedes-Benz',
    modelo: 'EQS',
    tipo: 'BEV',
    potenciaAC: 3.7,
    obs: 'Carregador de bordo trifásico (16A x 3 fases). Numa tomada monofásica ele não passa de ~3,7kW, mesmo com um carregador mais potente.',
  },

  { marca: 'Audi', modelo: 'Q4 e-tron', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'Audi', modelo: 'e-tron GT', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'Audi', modelo: 'Q6 e-tron', tipo: 'BEV', potenciaAC: 7.4 },
  {
    marca: 'Audi',
    modelo: 'Q8 e-tron',
    tipo: 'BEV',
    potenciaAC: 7.4,
    obs: 'Não achamos a potência de carregamento monofásico confirmada pra esse modelo. Por segurança, recomendamos o 7.4kW — ele atende esse carro em qualquer cenário.',
  },
  { marca: 'Volkswagen', modelo: 'ID.4', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'Renault', modelo: 'Kwid E-Tech', tipo: 'BEV', potenciaAC: 7.4 },

  { marca: 'Porsche', modelo: 'Taycan', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'Porsche', modelo: 'Macan Electric', tipo: 'BEV', potenciaAC: 7.4 },

  {
    marca: 'Toyota',
    modelo: 'bZ4X',
    tipo: 'BEV',
    potenciaAC: 7.4,
    obs: 'Não achamos a potência de carregamento monofásico confirmada pra esse modelo. Por segurança, recomendamos o 7.4kW — ele atende esse carro em qualquer cenário.',
  },
  {
    marca: 'Lexus',
    modelo: 'RZ 500e',
    tipo: 'BEV',
    potenciaAC: 7.4,
    obs: 'Não achamos a potência de carregamento monofásico confirmada pra esse modelo. Por segurança, recomendamos o 7.4kW — ele atende esse carro em qualquer cenário.',
  },
  {
    marca: 'Lotus',
    modelo: 'Eletre',
    tipo: 'BEV',
    potenciaAC: 7.4,
    obs: 'Não achamos a potência de carregamento monofásico confirmada pra esse modelo. Por segurança, recomendamos o 7.4kW — ele atende esse carro em qualquer cenário.',
  },
  {
    marca: 'Lotus',
    modelo: 'Emeya',
    tipo: 'BEV',
    potenciaAC: 7.4,
    obs: 'Não achamos a potência de carregamento monofásico confirmada pra esse modelo. Por segurança, recomendamos o 7.4kW — ele atende esse carro em qualquer cenário.',
  },

  { marca: 'CAOA Chery', modelo: 'iCar (EQ1)', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'CAOA Chery', modelo: 'Tiggo 7 Pro PHEV', tipo: 'PHEV', potenciaAC: 7 },
  { marca: 'CAOA Chery', modelo: 'Tiggo 8 Pro PHEV', tipo: 'PHEV', potenciaAC: 7 },

  { marca: 'Jaecoo', modelo: '7 PHEV', tipo: 'PHEV', potenciaAC: 3.3 },
  { marca: 'Omoda', modelo: 'E5 (Omoda 5 EV)', tipo: 'BEV', potenciaAC: 7.2 },

  { marca: 'Peugeot', modelo: 'e-208', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'Peugeot', modelo: 'e-2008', tipo: 'BEV', potenciaAC: 7.4 },

  { marca: 'Nissan', modelo: 'Leaf', tipo: 'BEV', potenciaAC: 7.4 },

  { marca: 'JAC', modelo: 'e-JS1', tipo: 'BEV', potenciaAC: 7.4 },
  { marca: 'JAC', modelo: 'e-JS4', tipo: 'BEV', potenciaAC: 7 },

  { marca: 'Leapmotor', modelo: 'C10', tipo: 'BEV', potenciaAC: 6.6 },
  { marca: 'Leapmotor', modelo: 'C10 REEV', tipo: 'PHEV', potenciaAC: 6.6 },
  {
    marca: 'Leapmotor',
    modelo: 'B10',
    tipo: 'BEV',
    potenciaAC: 7.4,
    obs: 'Não achamos a potência de carregamento monofásico confirmada pra esse modelo. Por segurança, recomendamos o 7.4kW — ele atende esse carro em qualquer cenário.',
  },

  { marca: 'Zeekr', modelo: 'X', tipo: 'BEV', potenciaAC: 7.2 },
  {
    marca: 'Zeekr',
    modelo: '001',
    tipo: 'BEV',
    potenciaAC: 7.4,
    obs: 'Não achamos a potência de carregamento monofásico confirmada pra esse modelo. Por segurança, recomendamos o 7.4kW — ele atende esse carro em qualquer cenário.',
  },
  {
    marca: 'Zeekr',
    modelo: '7X',
    tipo: 'BEV',
    potenciaAC: 7.4,
    obs: 'Não achamos a potência de carregamento monofásico confirmada pra esse modelo. Por segurança, recomendamos o 7.4kW — ele atende esse carro em qualquer cenário.',
  },

  { marca: 'Mini', modelo: 'Cooper SE / Cooper Electric', tipo: 'BEV', potenciaAC: 3.7 },
];

// Acima de ~4kW o carro consegue puxar mais do que o 3.5kW entrega (16A) —
// nesse caso o 7.4kW (32A) carrega de verdade mais rápido. Abaixo disso, o
// carro mesmo trava a velocidade e o 3.5kW já entrega 100% do que ele aceita.
const LIMIAR_7_4KW = 4;

export function recomendarCarregador(carro) {
  return carro.potenciaAC > LIMIAR_7_4KW ? '7.4kW' : '3.5kW';
}
