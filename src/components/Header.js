import React from 'react';

function Header() {
  return (
    <header>
      <nav>
        <img src="https://i.imgur.com/KDIDiSE.png" />
        <div>
          <span>Perfil</span>
          <img
            className="header-avatar"
            src="https://i.pravatar.cc/150?img=11"
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
