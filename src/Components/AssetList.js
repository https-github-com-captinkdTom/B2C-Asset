import React from 'react';
import Asset from "./Asset";

function AssetList({assets}) {
    return (
        <ul className="asset-wrapper">
            {assets.map((item) => (
                <Asset
                    key={item.id}
                    name={item.name}
                    type={item.type}
                />
            ))}
        </ul>
    );
}

export default AssetList;