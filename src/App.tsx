import { useState, useCallback } from 'react';

import SideBar from './components/SideBar';
import Content from './components/Content';

import './styles/global.scss';
import { ButtonOpenSideBar } from './components/ButtonOpenSideBar';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, []);

  const handleOpenMenu = useCallback(() => {
    setIsMenuOpen(state => !state);
  }, [])

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
      <SideBar isMenuOpen={isMenuOpen} handleClickButton={handleClickButton} selectedGenreId={selectedGenreId} handleCloseMenu={handleCloseMenu} />
      <Content selectedGenreId={selectedGenreId} />
      <ButtonOpenSideBar iconName="filter" onClick={handleOpenMenu} />
    </div>
  )
}