import React from "react";
const HeaderCenter = () => {
    return (
      <div className="header-center">
        <div className="contact-info">
          <span>📞 (12) 99985-9999</span>
        </div>
        
        <div className="store-name">
          <strong>NOME DA LOJA</strong>
        </div>
        
        <div className="working-hours">
          <span>Horário de Funcionamento:</span><br />
          <span>De xx-feira a xx-feira</span><br />
          <span>hh:mm - hh:mm</span>

        </div>
      </div>
      
    );
  };

  export default HeaderCenter;