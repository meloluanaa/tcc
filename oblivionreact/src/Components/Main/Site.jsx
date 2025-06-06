import React, { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import logo from './pngiconenovo.png';
import Modal from './Modal.jsx';
import Styles from './retaguarda.module.css';

const Site = () => {
  // Estados para cada modal
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  return (
    <div className={Styles.dashboard}>
      {/* Top Menu */}
      <header className={Styles.topMenu}>
        <img src={logo} alt="logo" className={Styles.logo}/>
        <button className={Styles.accountBtn} onClick={() => setIsAccountModalOpen(true)}>
          {/*<i className="bi bi-person-circle"></i>*/}
        </button>
      </header>

      {/* Menu Lateral */}                                
      <aside>
        <nav className={Styles.leftMenu}>
          <ul>
            <li className={Styles.menuItem}>
              <Link to="/central-de-pedidos">
                <span className={Styles.txtLink}>Central de Pedidos</span>
              </Link>
            </li>

            <li className={Styles.menuItem}>
              <Link to="/cardapio">
                <span className={Styles.txtLink}>Cardápio</span>
              </Link>
            </li>


            <li className={Styles.menuItem}>
              <Link to="/estoque">
                <span className={Styles.txtLink}>Estoque</span>
              </Link>
            </li>


            <li className={Styles.menuItem}>
              <Link to="/financeiro">
                <span className={Styles.txtLink}>Financeiro</span>
              </Link>
            </li>
            <li className={Styles.menuItem}>
              <Link to="/editar-site">
                <span className={Styles.txtLink}>Editar Site</span>
              </Link>
            </li>
            <li className={Styles.menuItem}>
              <Link to="/configuracoes">
                <span className={Styles.txtLink}>Configurações</span>
              </Link>
            </li>
            <li className={Styles.menuItem}>
              <Link to="/">
                <span className={Styles.txtLink}>Voltar</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className={Styles.container}>
        <div className={Styles.containerContent}>
          <div className={Styles.containerButton}>
            <button id="btnCategoria" onClick={() => setIsCategoryModalOpen(true)}>
              + Nova Categoria
            </button>
            <button id="btnProduto" onClick={() => setIsProductModalOpen(true)}>
              + Novo Produto
            </button>
          </div>
          <hr/>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </main>

      {/* Modais Reutilizáveis */}
      <Modal
        isOpen={isAccountModalOpen}
        onClose={() => setIsAccountModalOpen(false)}
        title="Configurações da Conta">
        <label className={Styles.labelCont}>
          Alterar senha:
          <input type="password" className={Styles.inputCont}/>
        </label>
      </Modal>





      {/*Modal da categoria*/}
      <Modal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        title="Adicionar Categoria">
        <form>
          <label>
            Nome da Categoria:
            <input type="text" />
            Ativo:
            <input type='checkbox'  defaultChecked={true}/>
          </label>
        </form>
      </Modal>




      {/*Modal dos produtos*/}
      <Modal
        isOpen={isProductModalOpen}
        onClose={() => setIsProductModalOpen(false)}
        title="Adicionar Produto">
        <form>
          <label for="name">*Nome:</label>
          <input type="text" name="name" id="nameProduct" placeholder="Ex: Brincos Prateados"/>

          <label for="img">Imagem:</label>
          <input type="file" name="img" id="imgProduct"/>

          <label for="description">Descrição:</label>
          <input type="text" name="description" id="descriptionProduct" placeholder="Ex: Folheados a Prata."/>

           <label for="category">*Categoria:</label>
            <select name="category" id="category"/>
            <option value="joias">Joias</option>
            <option value="colar">Colar</option>

          <label for="preci">Preço:</label>
          <input type="number" name="preci" id="preciProduct" placeholder="Ex: 39.99"/>

          <label for="status">Status:</label>
          <input type="checkbox" name="status" id="statusProduct" defaultChecked={true}></input>
        </form>
      </Modal>


      {/* Rotas */}
      <Routes>
        
      </Routes>
    </div>
    
  );
};

export default Site;