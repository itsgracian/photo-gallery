export const baseUrl = 'https://api.unsplash.com';

export const apiEndPoint = {
  randomPhoto: (value: number) => `${baseUrl}/photos/random?count=${value}`,
  singlePhoto: (id: string) => `${baseUrl}/photos/${id}`,
};
