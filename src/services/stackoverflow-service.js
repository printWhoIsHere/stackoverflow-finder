export const baseUrl = "https://stackoverflow.com";

export const getTaggedQuestions = async (search) => {
  await fetch(`${baseUrl}/search?q=${search}`).then(({ data }) => data);
};
