//Action Creator
// const SONG_SELCTED='SONG_SELECTED';

export const selectSong = song => {
    return {
        type: 'SONG_SELCTED',
        song:song
    };
};

