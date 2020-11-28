import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import Main from './сomponents/pages/Main/Main';
import Header from './сomponents/molecules/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import FilmInfo from './сomponents/pages/FilmInfo/FilmInfo';
import FavoriteList from './сomponents/pages/Favorite/FavoriteList';

const App = () => {
    const [error, setError] = useState(null);
    const [items, setItems] = useState(0);
    const [filmInfo, setFilmInfo] = useState(JSON.parse(localStorage.getItem('film')));
    const [arrayWithFavorite, setArrayWithFavorite] = useState(JSON.parse(localStorage.getItem('favoriteList')));

    const setFilm = useCallback((film) => {
        localStorage.setItem('film', JSON.stringify(film));
        setFilmInfo(JSON.parse(localStorage.getItem('film')));
    }, []);

    const deleteFromFavorite = useCallback((indexOrFilmInfo) => {
        if (typeof (indexOrFilmInfo) === "object") {
            arrayWithFavorite.forEach(function (item, index) {
                if (item.id === indexOrFilmInfo.id) {
                    arrayWithFavorite.splice(index, 1);
                    localStorage.setItem('favoriteList', JSON.stringify(arrayWithFavorite));
                    setArrayWithFavorite(JSON.parse(localStorage.getItem('favoriteList')));

                }
            });
        } else {
            arrayWithFavorite.splice(indexOrFilmInfo, 1);
            localStorage.setItem('favoriteList', JSON.stringify(arrayWithFavorite));
            setArrayWithFavorite(JSON.parse(localStorage.getItem('favoriteList')));
        }
    }, [arrayWithFavorite]);

    const changeFilmToNext = useCallback((idOfTheChangingFilm) => {
        items.forEach(function (item, index) {
            if (item.id === idOfTheChangingFilm) {
                if (index === 19) {
                    localStorage.setItem('film', JSON.stringify(items[0]));
                    setFilmInfo(JSON.parse(localStorage.getItem('film')));
                } else {
                    localStorage.setItem('film', JSON.stringify(items[index + 1]));
                    setFilmInfo(JSON.parse(localStorage.getItem('film')));
                }
            }
        });
    }, [items]);

    const addToFavorite = useCallback(() => {
        if (!arrayWithFavorite) {
            localStorage.setItem('favoriteList', JSON.stringify([filmInfo]));
            setArrayWithFavorite(JSON.parse(localStorage.getItem('favoriteList')));
        } else {
            arrayWithFavorite.unshift(filmInfo);
            localStorage.setItem('favoriteList', JSON.stringify(arrayWithFavorite));
            setArrayWithFavorite(JSON.parse(localStorage.getItem('favoriteList')));
        }
    }, [arrayWithFavorite, filmInfo]);

    useEffect(() => {
        fetch('http://api.themoviedb.org/3/movie/now_playing?api_key=ca68695c3a74819950e3843258f57feb')
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result.results);
                },

                (err) => {
                    setError(err.message);
                }
            );
    }, []);

    if (error) {
        return <div>Ошибка: {error}</div>;
    } else if (items === 0) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header/>
                    <Route path='/favorite' exact
                           component={() => <FavoriteList deleteFavoriteFilm={deleteFromFavorite}
                                                          arrayWithFavorite={arrayWithFavorite}/>}/>
                    <Route path='/film' exact
                           component={() => <FilmInfo arrayWithFavorite={arrayWithFavorite}
                                                      deleteFromFavorite={deleteFromFavorite}
                                                      changeFilmToNext={changeFilmToNext}
                                                      addToFavoriteFunction={addToFavorite} film={filmInfo}/>}/>
                    <Route path='/' exact component={() => <Main setFilm={setFilm} films={items}/>}
                           films={items}/>
                </div>
            </BrowserRouter>
        );
    }
};

export default App;
