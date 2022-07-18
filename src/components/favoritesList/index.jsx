import React from 'react';
import { formatDate } from '../../helpers/date';
import { AiFillStar } from 'react-icons/ai';
import './index.css';

export default function FavoritesList(props) {

    const { favorites, loading } = props;

    return <>

        <div className="list-favorite">

            {loading ? <>

                <div className="loading-container">
                    <img src="/imgs/loading.gif" className="loading-gif" alt="loading"/>
                    <h3> Carregando, por favor aguarde... </h3>
                </div>

            </> : <>

                {favorites.length > 0 ? <>

                    {favorites.map((repo, i) => {

                        return (
                            <div key={i} className="favorite-item">

                                <div className='list-favorite-column-one'>
                                    <h3> <a className="link" href={repo.html_url} rel="noreferrer">  {repo.name} </a> </h3>

                                    <div className="list-favorite-item-details">
                                        <p> {repo.language} </p>
                                        <p> Atualizado em {formatDate(repo.updated_at)} </p>
                                    </div>
                                </div>

                                <div className='list-favorite-column-two'>
                                    <button className="fav-button" onClick={() => props.delFavorite(repo)}>
                                        <AiFillStar className="fav-fill-icon" />
                                        <span> Star </span>
                                    </button>
                                </div>
                            </div>
                        )

                    })}

                </> : <>

                    <div className="empty-list">
                        <h3> Não há repositórios disponíveis. </h3>
                    </div>

                </>}

            </>}

        </div>

    </>
}