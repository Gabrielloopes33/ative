import React from 'react';

const ServicosContabilidade: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Serviços de Contabilidade</h1>
      <p style={{ textAlign: 'center', color: '#777' }}>Profissionais altamente qualificados para gerenciar suas finanças.</p>

      <section style={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
        <div style={{ width: '30%', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h2>Consultoria Financeira</h2>
          <p>Ajudamos você a planejar, gerenciar e otimizar suas finanças.</p>
        </div>
        <div style={{ width: '30%', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h2>Gestão de Impostos</h2>
          <p>Oferecemos serviços completos de gestão e planejamento fiscal.</p>
        </div>
        <div style={{ width: '30%', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
          <h2>Conformidade Contábil</h2>
          <p>Garantimos que sua empresa esteja em conformidade com as regulamentações.</p>
        </div>
      </section>

      <footer style={{ marginTop: '40px', textAlign: 'center', color: '#555' }}>
        <p>&copy; 2023 Serviços de Contabilidade. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default ServicosContabilidade;