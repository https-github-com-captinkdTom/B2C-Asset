import Asset from "./Components/Asset";
import AssetList from "./Components/AssetList";
import {useState} from "react";

function App() {
    const [assets, setAssets] = useState([]);

    function fetchAssetHandler(){
        fetch('https://api.notion.com/v1/users/49f3758b-2c29-4670-aec2-0bd2abc95f16', {
            method:"GET",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest",
                "BEARER_TOKEN": "Bearer secret_J4Urn6B1MuUAirnIudwapb4g5F2XHGyQbctVMXzbriL",
                "Notion-Version": "2022-02-22"
            }
        })
            .then(response => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setAssets(data.results)
            })
    }

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
          <button onClick={fetchAssetHandler}>B2C 장비</button>
          <AssetList assets={assets} />
      </div>
    );
}

export default App;
