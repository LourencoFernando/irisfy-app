export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Alterar depois de desenvolver
    //token: "BQCBm5edKN5Pkq5zRbcxPllXFbbDKYMX90Dy2K70FIEGLu2OUjzQ58cllhCZyKmlfeVyAJSaTSluwM71-QT3utmtKBzpLrc5U_vV72cGGvA-TGFJs5UtvNaVZzChKGL23trYngSxeCWK-9YtDTv9AVDt3H8XqNXMQTnPdKiQQXnhFezIipSUeAiHLxfZyzUEvAXbHoH_99yQukiU58xN"
}

const reducer = (state, action) => {
    console.log(action)

    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists
            }
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly
            }
        
        default:
            return state
    }
}

export default reducer