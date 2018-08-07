# webpack-concatenateModules-error
I noticed that circular dependencies induced by Typescript decorator lead to an error with the webpack option concatenateModules

## step to reproduce:
- `git clone https://github.com/Diademe/webpack-concatenateModules-error.git`
- `cd webpack-concatenateModules-error`
- `npm install`
- `npm run build`
- `npm run start`

witch lead to the following error
```
__metadata("design:type", A)
ReferenceError: A is not defined
```

## which cyclic references are affected :
the decorated cyclic references are not the only one affected by this problem. There are also:
- inline initialized static variable
- inherited class
- reference to a variable in another module in the global scope (ie not inside a function body)

## local.namespace.ts
I used a namespace to force the loading order of the modules.
