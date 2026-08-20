// ===================================
// 🚀 Error handling in async / await
// ===================================

(async function getData(api_url) {
  try {
    let response = await fetch(api_url);
    let data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
})("https://jsonplaceholder.typicode.com/users");
