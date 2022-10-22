import React from "react";
import './Sidebar.css'
import logoirisfy from './img/IRISFY_LOGO_SIDEBAR.png'
import SidebarOption from "./SidebarOption";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from "./DataLayer";


function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue()

    return(
        <div className="sidebar">
            <img 
                className="sidebar__logo"
                src={logoirisfy}
                alt=""
            />

            <SidebarOption Icon={HomeIcon} title="Casa"/>
            <SidebarOption Icon={SearchIcon} title="Pesquisar"/>
            <SidebarOption Icon={LibraryMusicIcon} title="Sua Biblioteca"/>

            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

            {playlists?.item?.map(playlist => (
                <SidebarOption title={playlist.name} />
            ))}

        </div>
    )
}

export default Sidebar