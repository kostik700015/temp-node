// globals - no window!!!!

// __dirnam   - path to current directory
// __filename - filename
// require   - function to use modukes (CommonJS)
// module    - info about env where the program is being executed

console.log(__filename)
setInterval(()=>{
    console.log('hello world!')
}, 1000)
