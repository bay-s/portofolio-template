const { createContext, useState, useEffect } = require("react");

export const ValueContext = createContext()

const ValueProvider = ({siteInfo,children}) => {
 
  const value = {
    menus:siteInfo.menu,
    site:siteInfo.menu?.globalSeo
    }
 
    return(
        <ValueContext.Provider value={value}>
             {children}
        </ValueContext.Provider>
    )
}

export default  ValueProvider