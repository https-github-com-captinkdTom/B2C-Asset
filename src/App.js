import Asset from "./Components/Asset";
import AssetList from "./Components/AssetList";
import React, { useState, useEffect, useCallback } from 'react';


function App() {
    const [assets, setAssets] = useState([]);

    // async function fetchAssetHandler(){
    //         const response = await fetch('https://swapi.dev/api/films/');
    //         console.log(response);

            // fetch('/v1/databases/a4b284437363483b9eb51c6b9296b464/query', {
        //     method:"GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //         "X-Requested-With": "XMLHttpRequest",
        //         "BEARER_TOKEN": "Bearer secret_J4Urn6B1MuUAirnIudwapb4g5F2XHGyQbctVMXzbriL",
        //         "Notion-Version": "2022-02-22"
        //     }
        // })
        //     .then(response => {
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log(data)
        //         setAssets(data.results)
        //     })
    // }

    const fetchMoviesHandler = useCallback(async () => {
// 주석 테스트
        try {

            console.log("2");
            // const response = await fetch('/v1/databases/a4b284437363483b9eb51c6b9296b464/query');
             const response = await fetch('/v1/databases/a4b284437363483b9eb51c6b9296b464');

            console.log(response);
            console.log("3");

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            });
        } catch (error) {
        }
    }, []);

    useEffect(() => {
        // fetchMoviesHandler();

        console.log("1");
        fetchMoviesHandler();
    }, []);

    // const { Client } = require('@notionhq/client');
    //
    // const notion = new Client({ auth: process.env.NOTION_API_KEY });
    //
    // (async () => {
    //     const pageId = '59833787-2cf9-4fdf-8782-e53db20768a5';
    //     const response = await notion.pages.retrieve({ page_id: pageId });
    //     console.log(response);
    // })();

    return (
      <div className="App">
          {/*<button onClick={fetchAssetHandler}>B2C 장비</button>*/}
          {/*<AssetList assets={assets} />*/}
      </div>
    );
}

export default App;
