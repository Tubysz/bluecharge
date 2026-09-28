export const CONTATO = {
  telefone: '(11) 3132-1113',
  telefoneLink: '+551131321113',
  whatsappLink: 'https://wa.me/551131321113',
  distribuidor: 'BlueCharge do Brasil',
};

export const PRODUTO_3_5 = {
  id: '3.5kW',
  nome: 'Carregador Portátil EV 3.5kW',
  badge: 'Entrada • Compacto',
  imagens: ['/produtos/carregador-3-5kw.jpg'],
  mercadoLivre: {
    link: 'https://www.mercadolivre.com.br/carregador-carro-eletrico-35kw-bivolt-portatil-tipo-2-16a/up/MLBU3224200730?pdp_filters=seller_id%3A1248087225',
    parcelas: 12,
  },
  precoPix: { valor: 850.0, economia: 140.0 },
  status: 'Pronta Entrega • Garantia Oficial',
  specs: [
    { label: 'Potência', value: '3.5kW' },
    { label: 'Corrente', value: '16A' },
    { label: 'Conector', value: 'Tipo 2' },
    { label: 'Cabo', value: '5 metros' },
  ],
  destaque: 'Ideal para uso diário residencial. Compatível com tomada industrial 220V. Proteção IP65, display LCD e controle de carga.',
  destaques: [
    'Bolsa de carregamento inclusa',
  ],
  extra: 'Instalação simples • Não requer aterramento dedicado',
};

export const PRODUTO_7_4 = {
  id: '7.4kW',
  nome: 'Carregador Portátil EV 7.4kW • Performance',
  imagens: [
    '/produtos/carregador-7-4kw.jpg',
    '/produtos/carregador-7-4kw-detalhe.jpg',
    '/produtos/feature-agendamento.jpg',
    '/produtos/feature-corrente.jpg',
  ],
  mercadoLivre: {
    link: 'https://www.mercadolivre.com.br/carregador-carro-eletrico-74kw-220v-tipo-2-cabo-5m-todos/up/MLBU2906969953?pdp_filters=seller_id%3A1248087225',
    parcelas: 10,
  },
  precoPix: { valor: 1200.0, economia: 97.0 },
  status: 'Pronta entrega nacional',
  specs: [
    { label: 'Potência Máx', value: '7.4kW' },
    { label: 'Corrente', value: '32A Ajustável' },
    { label: 'Alimentação', value: 'SOMENTE 220V' },
    { label: 'Conector', value: 'Tipo 2 (Mennekes)' },
    { label: 'Cabo', value: '5m • Cobre Puro' },
    { label: 'Proteção', value: 'IP65 • IP55' },
  ],
  especificacoes: [
    { label: 'Tensão de Operação', value: 'SOMENTE 220V Monofásico' },
    { label: 'Display', value: "LCD 2.8'' com status em tempo real" },
    { label: 'Ajuste de Corrente', value: '8A / 16A / 24A / 32A' },
    { label: 'Temperatura', value: '-30°C a +55°C' },
    { label: 'Segurança', value: 'Sobre-corrente, sobretensão, fuga, sobretemperatura' },
    { label: 'Compatibilidade', value: 'BYD, GWM, Volvo, BMW, Tesla (adaptador), e todos Tipo 2' },
  ],
  destaques: [
    'Carregamento 2x mais rápido que o 3.5kW',
    'Adaptador de brinde: dispensa tomada trifásica, basta uma tomada 220V comum',
    'Bolsa de carregamento inclusa',
    'Garantia 12 meses',
  ],
};

export const PRODUTOS = [PRODUTO_3_5, PRODUTO_7_4];

export function formatBRL(valor) {
  return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function linkWhatsapp(produto) {
  const msg = `Olá! Tenho interesse no ${produto.nome} (BlueCharge).`;
  return `${CONTATO.whatsappLink}?text=${encodeURIComponent(msg)}`;
}
