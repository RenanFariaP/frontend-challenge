import { PriorityTypes } from "@/types/priority-types"
import { ProductFilterType } from "@/types/productFilterTypes"

export const getCategoryByType = (type: ProductFilterType) =>{
    if(type === ProductFilterType.MUG) return "mugs"
    if(type === ProductFilterType.SHIRT) return "t-shirts"
    return ""
}

export const getFieldByPriority = (priority: PriorityTypes) =>{
    if(priority === PriorityTypes.NEWS) return {field: "created_at", order: "ASC"}
    if(priority === PriorityTypes.BIGGEST_PRICE) return {field: "price_in_cents", order: "ASC"}
    if(priority === PriorityTypes.MINOR_PRICE) return {field: "price_in_cents", order: "DESC"}
    return {field: "sales", order:"ASC"}
}

export const mountQuery = (type: ProductFilterType, priority: PriorityTypes) =>{
    if(type === ProductFilterType.ALL && priority === PriorityTypes.POPULARITY ) return `
    query {
        allProducts(sortField: "sales", sortOrder: "DSC"){
          id
          name
          price_in_cents
          image_url
        }
      }
      `
      const sortSettings = getFieldByPriority(priority);
      const categoryFilter = getCategoryByType(type);
      return `
      query {
          allProducts(sortField: "${sortSettings.field}", sortOrder: "${sortSettings.order}", ${categoryFilter ? `filter: { category: "${categoryFilter}"}` : "" }){
            id
            name
            price_in_cents
            image_url
            category
          }
        }
        `

}