import React from 'react';
import './preview-collection.component.styles.scss';

const CollectionPreview = ({title, items}) =>(
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items
            .filter((item, index) => index < 4)
            .map(items =>(
                <div key={items.id}>{items.name}</div>
            ))}
        </div>

    </div>
)
export default CollectionPreview;