import React, { Fragment } from 'react'


const ErrorMessage = (props) => {
 
    return(
<Fragment> 
<div class={`p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 ${props.error ? "" : "hidden"}`} role="alert">
<i><strong>{props.pesan}</strong></i>
</div>
<div class={`p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 ${props.sukses ? "" : "hidden"}`} role="alert">
<i><strong>{props.pesan}</strong></i>
</div>
</Fragment>
    )
}

export default  ErrorMessage ;
 