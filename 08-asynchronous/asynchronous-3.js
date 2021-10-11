import fetch from "node-fetch";

const getGitHubUser = async (username) => {
  try {
      const user = await fetch(`https://api.github.com/users/${username}`);
      const json = await user.json()
      const userData = await json;
      if (username == "") {
          return null
      }
      else if (userData.login) {
          return 'object';
      }
      else
          return 'not found';
  } catch (e) {
      console.log(e);
  }
}
const printGitHubUser = async () => {
  const mojombo = await getGitHubUser("mojombo");
  const orange = await getGitHubUser("");
  const rudiTabuti = await getGitHubUser("rudi.tabuti");

  console.log(mojombo);
  console.log(orange);
  console.log(rudiTabuti);
}

printGitHubUser();