export async function loadData(
  platform: string,
  user: string = "vedant_deore"
) {
  try {
    const response = await fetch(
      "https://atkb-8vuf4wyqm-vedantdeores-projects.vercel.app/all_data.json",
      {
        method: "GET",
      }
    ); // Replace with your backend URL
    if (!response.ok) {
      console.error("Failed to fetch data from backend:", response.statusText);
      return null;
    }

    const allData = await response.json();

    if (
      !allData[user] ||
      !allData[user].results ||
      !allData[user].results[platform]
    ) {
      console.error(`Data not found for user ${user} and platform ${platform}`);
      return null;
    }

    return allData[user].results[platform];
  } catch (error) {
    console.error("Error fetching data from backend:", error);
    return null;
  }
}
