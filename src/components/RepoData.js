import React from 'react';
import './styles/RepoData.css'

const RepoData =({repoData})=>{
    
    const {data}=repoData;


    const dataRepo=data.slice(0,3);

    const repoList=(
        <div className="repo-list">
            
    <div className="repo-title">Some Repos</div>
    {(dataRepo.length!==0 || dataRepo!==null )&& dataRepo.map((repo)=>{
                    const {name,language,description,html_url, updated_at,id}=repo;
                    const repoJSX=repo.length===0?<h3>No Repos</h3>:(
                        <div className="list-item" key={id}>

                            <div className="list-header">
                                <div className="repo-name">{name&&name.length>15?name.slice(0,13)+"...":name}</div>
                                <div className="repo-desc">Desc: {description&& description.length>20?description.slice(0,17)+"...":description}</div>
                            </div>
                            <div className="list-body">
                                <div className="repo-lang">Lang: {language}</div>
                                <div className="repo-updated-date">Updated: {updated_at.split("T")[0]}</div>
                            </div>
                            <div className="list-foot"><a href={html_url}><div className="link">Open</div></a></div>
                        </div>);

                    return repoJSX;
                    
            })}
        </div>
    );
    
    return (
        <div className="repo-data">
                {repoList}
                {(dataRepo.length===0 || dataRepo===null )&& <h3>No Repo Data to show </h3>   }
        </div>
    );
}
export default RepoData;
