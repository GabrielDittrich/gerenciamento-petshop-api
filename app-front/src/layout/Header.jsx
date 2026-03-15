function Header() {
    return (
        <header className="site-header">
            
            <div className="brand-block">
                <span className="brand-kicker">Gestao para petshop</span>
                <h1 className="brand-title">PetShop Manager</h1>
                <p className="brand-copy">
                    Uma vitrine mais clara para clientes, pets e produtos com foco em organizacao e leitura rapida.
                </p>
            </div>

            <div className="header-badge">
                <strong>Painel em destaque</strong>
                <span>Frontend com cara de produto, nao apenas tela de cadastro.</span>
            </div>
        </header>
    );
}

export default Header;
