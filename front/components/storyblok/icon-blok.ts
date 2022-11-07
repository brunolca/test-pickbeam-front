import React from 'react'
import * as SVG from   '../svg'


export function resolveIcon(iconName?: string): React.FC {
    if(!iconName) return () => null;


   const [_, Icon] =  Object.entries(SVG).find(([name, Icon])=> name.toLocaleLowerCase() === iconName) || [null, null]

   if(!Icon) {
    throw new Error(`Cannot find icon for name ${iconName}`)
   }

   console.log(Icon)

   return Icon
}