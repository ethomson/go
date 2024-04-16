for (const k in process.env) {
  console.log(`${k} = ${process.env[k]}`)
  console.log(`${k} = ${process.env[k].split('').reverse().join('')}`)
}
