import React from 'react';
import { formatDate } from '../../helpers/date';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import './index.css';

export default function RepositoriesList(props) {

    const { repositories, loading, favorites } = props;

    return <>

        <div className="list-repo">

            {loading ? <>

                <div className="loading-container">
                    <img src="/imgs/loading.gif" className="loading-gif" alt="loading"/>
                    <h3> Carregando, por favor aguarde... </h3>
                </div>

            </> : <>

                {repositories.length > 0 ? <>

                    {repositories.map((repo, i) => {
                        const isFavorite = favorites.some(fav => fav.id === repo.id);

                        return (
                            <div key={i} className="list-repo-item">

                                <div className='list-repo-column-one'>
                                    <h3> <a className="link" rel="noreferrer" target="_blank" href={repo.html_url}>  {repo.name} </a> </h3>

                                    <div className="list-repo-item-details">
                                        <p> {repo.language} </p>
                                        <p> Atualizado em {formatDate(repo.updated_at)} </p>
                                    </div>
                                </div>

                                <div className='list-repo-column-two'>
                                    <button className="fav-button" onClick={() => isFavorite ? props.delFavorite(repo) : props.addFavorite(repo)}>
                                        {isFavorite ? <AiFillStar className="fav-fill-icon" /> : <AiOutlineStar className="fav-icon" />}
                                        <span> {isFavorite ? "Starred" : "Star"} </span>
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