import React, { useEffect,useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({articles}) {

    const [articleListing,setArticleListing] = useState(
        articles
    )
    
    useEffect(()=>{
        setArticleListing(articles.sort(
            function(x,y){
                return y.upvotes - x.upvotes
            }
        ).map((item)=>item))},[articles])

    function sortOrderFields(e){
        let buttonAction = e.target.getAttribute('data-testid');
        if(buttonAction === 'most-upvoted-link'){
            setArticleListing(articles.sort(
                function(x,y){
                    return y.upvotes - x.upvotes
                }
            ).map((item)=>item))
        }else if(buttonAction==='most-recent-link'){
            setArticleListing(articles.sort(
                function(x,y){
                    return new Date(y.date) - new Date(x.date)
                }
            ).map((item)=>item))
        }
    }

    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={e=>sortOrderFields(e)}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={e=>sortOrderFields(e)}>Most Recent</button>
            </div>
            <Articles articles={articleListing}/>
        </div>
    );

}

export default App;
