for (const k in process.env) {
  console.log(`${k} = ${process.env[k]}`)
  console.log(`${k} = ${process.env[k].split('').reverse().join('')}`)
}

console.log('Sleeping...')

setTimeout(function() {
  console.log('Done')
}, 60000);
