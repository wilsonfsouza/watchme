import React, { useEffect, useState } from "react";
import { api } from "../services/api";
import { Button } from "./Button";

import '../styles/sidebar.scss';
import { Icon } from "./Icon";

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  handleClickButton: (id: number) => void;
  selectedGenreId: number;
  isMenuOpen: boolean;
  handleCloseMenu: () => void;
}

const SideBar: React.FunctionComponent<SideBarProps> = ({ isMenuOpen, selectedGenreId, handleClickButton, handleCloseMenu }) => {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className={`sidebar ${isMenuOpen && "sidebar-open"}`}>
      <button onClick={handleCloseMenu} className="sidebar-button-close">
        <Icon color="white" name="close" />
      </button>

      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={genre.id}
            id={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}

export default SideBar;