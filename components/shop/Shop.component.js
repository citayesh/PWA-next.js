import React from "react";
import {ShopPageContainer,CollectionsOverviewContainer} from "./ShopPage.style"
import CollectionPreview from "../collection-preview/CollectionPreview.component";
import { useSelector } from 'react-redux';
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";

function ShopPage(){
const collections = useSelector(state=>selectCollectionsForPreview(state))
return(
<ShopPageContainer>
<CollectionsOverviewContainer>
{collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
</ShopPageContainer>

)
}
export default ShopPage;
