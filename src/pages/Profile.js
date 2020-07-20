import React, {useContext, useEffect, Fragment} from 'react';
import {GithubContext}                          from '../context/github/githubContext';
import {Link}                                   from 'react-router-dom';
import Repos                                    from '../components/repos';

const Profile = ({match}) => {
    const {getUser, getRepos, loading, user, repos} = useContext(GithubContext);
    const urlName = match.params.name;

    useEffect(() => {
        getUser(urlName);
        getRepos(urlName);
        // eslint-disable-next-line
    }, []);


    if (loading) {
        return (<p className='text-center'>Loading...</p>);
    }

    const {
        name, company, avatar_url,
        location, bio, blog, login,
        html_url, followers, public_repos,
        public_gists, following
    } = user;
    return (
        <Fragment>
            <Link to={'/'} className='btn btn-link'>Main</Link>

            <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3 text-center">
                            <img
                                className='img-fluid'
                                src={avatar_url}
                                alt={name}
                            />
                            <h3>{name}</h3>
                            {location && <p>Location: {location}</p>}
                        </div>
                        <div className="col">
                            {
                                bio &&
                                <Fragment>
                                    <h3>Bio: {bio}</h3>
                                </Fragment>
                            }
                            <a
                                href={html_url}
                                className='btn btn-dark text-white'
                                target='_blank'
                                rel="noopener noreferrer"
                            >
                                Open Profile
                            </a>
                            <ul>
                                {
                                    login
                                    && <li><strong>Login: </strong>{login}</li>
                                }
                                {
                                    company
                                    && <li><strong>Company: </strong>{company}</li>
                                }
                                {
                                    blog
                                    && <li><strong>Website: </strong>{blog}</li>
                                }
                            </ul>

                            <div className="badge badge-primary">Followers: {followers}</div>
                            <div className="badge badge-success">Following: {following}</div>
                            <div className="badge badge-info">Repos: {public_repos}</div>
                            <div className="badge badge-dark">Gists: {public_gists}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Repos repos={repos}/>
        </Fragment>
    );
};

export default Profile;
