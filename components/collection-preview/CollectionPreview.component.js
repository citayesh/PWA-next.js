import React from 'react';
import {PreviewContainer,
    CollectionPreviewContainer,
    TitleContainer} from "./CollectionPreview.style"
import CollectionItemComponent from '../collection-item/CollectionItem.component';
import { useRouter } from 'next/router';


function CollectionPreview ({ title, items, routeName }) {
  const router=useRouter();
 const path= router.pathname
    return(
    <CollectionPreviewContainer>
    <TitleContainer onClick={() => router.push(`${path}/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItemComponent key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
    )
};
  
  export default CollectionPreview;