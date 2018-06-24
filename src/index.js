(async function() {
  const promise = await new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, '')
  })
  return promise
})().catch(error => console.error(error.message))
