// Somente informações confirmadas devem substituir null.
// true = disponibilidade confirmada; false = indisponível; null = a confirmar.
export const site = {
  name: 'Império Pet Center',
  contact: { phone: null, whatsapp: null, email: null, address: null, hours: null, instagram: null },
  policies: { booking: null, cancellation: null, privacy: null, animalRequirements: null },
  services: [
    { title: 'Banho & tosa', description: 'Um momento para renovar o pelo e o bem-estar. Consulte as opções de higiene e estética adequadas ao seu pet.', available: null, featured: true },
    { title: 'Cuidados de higiene', description: 'Converse sobre as necessidades de pele, pelagem e higiene antes de escolher um cuidado.', available: null },
    { title: 'Orientação para a rotina', description: 'Leve suas dúvidas sobre os itens do dia a dia. Atendimento veterinário não está confirmado neste site.', available: null },
  ],
  categories: [
    { title: 'Alimentação', description: 'Para diferentes fases e necessidades.', available: null },
    { title: 'Higiene & bem-estar', description: 'Pequenos cuidados que fazem parte da rotina.', available: null },
    { title: 'Brinquedos & acessórios', description: 'Espaço para brincar, explorar e descansar.', available: null },
  ],
  faq: [
    { question: 'Quais serviços estão disponíveis?', answer: 'As opções apresentadas são possibilidades a confirmar, não uma lista de serviços já disponíveis. Confirme o atendimento, os valores e as condições com a equipe antes de se programar.' },
    { question: 'Como posso agendar um atendimento?', answer: 'O canal oficial de agendamento ainda não foi informado. Assim que houver um contato confirmado, ele aparecerá na seção de contato. Este site não realiza reservas.' },
    { question: 'Há atendimento para cães e gatos?', answer: 'O conteúdo do site é voltado a tutores de cães e gatos. A aceitação de cada espécie, porte e necessidade em um serviço precisa ser confirmada com a equipe.' },
    { question: 'O que preciso saber antes de levar meu pet?', answer: 'Confirme previamente horário, duração, requisitos de saúde e vacinação, adaptação e restrições. As políticas de atendimento ainda não foram informadas. Conte sobre sensibilidades e necessidades específicas do animal.' },
    { question: 'Posso comprar produtos por aqui?', answer: 'Não. As categorias são uma apresentação institucional. Não há venda online, estoque, marcas ou preços confirmados neste site.' },
  ],
};

export function availabilityLabel(value) {
  return value === true ? 'Disponibilidade confirmada' : value === false ? 'Indisponível no momento' : 'Consulte disponibilidade';
}

export function contactLinks(contact) {
  const links = [];
  if (typeof contact.phone === 'string' && /^\+?[\d ()-]{8,22}$/.test(contact.phone) && /^\d{8,15}$/.test(contact.phone.replace(/\D/g, ''))) links.push({ label: contact.phone, href: `tel:${contact.phone.replace(/[^+\d]/g, '')}` });
  if (typeof contact.whatsapp === 'string' && /^\d{10,15}$/.test(contact.whatsapp)) links.push({ label: 'Conversar pelo WhatsApp', href: `https://wa.me/${contact.whatsapp}` });
  if (typeof contact.email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email)) links.push({ label: contact.email, href: `mailto:${contact.email}` });
  if (typeof contact.instagram === 'string' && /^https:\/\/(www\.)?instagram\.com\/[\w.]+\/?$/.test(contact.instagram)) links.push({ label: 'Visitar o Instagram', href: contact.instagram });
  return links;
}
